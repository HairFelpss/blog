import { NotionAPI } from "notion-client"

export const NotionClient = new NotionAPI()

export const getPage = async (id: string) => {
  return await NotionClient.getPage(id)
}

export const getUsers = async (userId: string[]) => {
  return await NotionClient.getUsers(userId)
}
