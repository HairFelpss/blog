import { BlockMap, CollectionPropertySchemaMap } from "notion-types"
import { getDateValue, getTextContent } from "notion-utils"
import { getUsers } from "src/apis/notion-client/notionClient"
import { customMapImageUrl } from "./customMapImageUrl"

async function getPageProperties(
  id: string,
  block: BlockMap,
  schema: CollectionPropertySchemaMap
) {
  const rawProperties = Object.entries(block?.[id]?.value?.properties || [])
  const excludeProperties = ["date", "select", "multi_select", "person", "file"]
  const properties: any = {}
  for (const [key, val] of rawProperties as any) {
    properties.id = id

    if (schema[key]?.type && !excludeProperties.includes(schema[key].type)) {
      properties[schema[key].name] = getTextContent(val)
      continue
    }

    switch (schema[key]?.type) {
      case "file": {
        try {
          const Block = block?.[id]?.value
          const url: string = val?.[0]?.[1]?.[0]?.[1]
          const newUrl = customMapImageUrl(url, Block)
          properties[schema[key].name] = newUrl
        } catch (error) {
          properties[schema[key].name] = undefined
        }
        break
      }
      case "date": {
        const dateProperty = getDateValue(val)
        if (dateProperty?.type !== undefined) {
          delete (dateProperty as any).type
        }
        properties[schema[key].name] = dateProperty
        break
      }
      case "select":
      case "multi_select": {
        const selects = getTextContent(val)
        if (selects?.[0]?.length) {
          properties[schema[key].name] = selects.split(",")
        }
        break
      }
      case "person": {
        const rawUsers = val?.flat()?.filter((user: any) => user?.[0]?.[1])
        const users = await Promise.all(
          rawUsers?.map(async (userId: any) => {
            const res: any = await getUsers(userId?.[0])
            const resValue =
              res?.recordMapWithRoles?.notion_user?.[userId?.[0]?.[1]]?.value
            return {
              id: resValue?.id,
              name:
                resValue?.name ||
                `${resValue?.family_name}${resValue?.given_name}` ||
                undefined,
              profile_photo: resValue?.profile_photo || null,
            }
          }) ?? []
        )
        properties[schema[key].name] = users
        break
      }
      default:
        break
    }
  }
  return properties
}

export { getPageProperties as default }
