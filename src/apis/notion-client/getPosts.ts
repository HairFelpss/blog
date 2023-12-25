import { idToUuid } from "notion-utils"
import { CONFIG } from "site.config"
import getAllPageIds from "src/libs/utils/notion/getAllPageIds"
import getPageProperties from "src/libs/utils/notion/getPageProperties"
import { TPosts } from "src/types"
import { getPage } from "./notionClient"

export const getPosts = async () => {
  const id = CONFIG.notionConfig.pageId as string

  const response = await getPage(id)

  const uuid = idToUuid(id)
  const collection = Object.values(response.collection)[0]?.value

  const block = response.block
  const schema = collection?.schema

  const rawMetadata = block[uuid]?.value

  if (
    rawMetadata?.type !== "collection_view_page" &&
    rawMetadata?.type !== "collection_view"
  ) {
    return []
  }

  const pageIds = getAllPageIds(response)

  const dataPromises = pageIds.map(async (pageId) => {
    const properties = (await getPageProperties(pageId, block, schema)) || null
    properties.createdTime = new Date(
      block[pageId].value?.created_time
    ).toString()
    properties.fullWidth =
      (block[pageId].value?.format as any)?.page_full_width ?? false
    return properties
  })

  const data = await Promise.all(dataPromises)

  const posts = data.sort((a: any, b: any) => {
    const dateA: any = new Date(a?.date?.start_date || a.createdTime)
    const dateB: any = new Date(b?.date?.start_date || b.createdTime)
    return dateB - dateA
  }) as TPosts

  return posts
}
