import { getAllSelectItemsFromPosts } from "src/libs/utils/notion"
import usePostsQuery from "./usePostsQuery"

export const useTagsQuery = () => {
  const posts = usePostsQuery()
  const tags = getAllSelectItemsFromPosts("tags", posts)

  return tags
}
