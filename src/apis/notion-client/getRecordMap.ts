import { getPage } from "./notionClient"

export const getRecordMap = async (pageId: string) => {
  const recordMap = await getPage(pageId)
  return recordMap
}
