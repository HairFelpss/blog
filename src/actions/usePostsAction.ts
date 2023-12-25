import { TPost } from "src/types"

const fetchPosts = async () => {
  try {
    const response = await fetch("/api/posts") // Your server endpoint for fetching posts
    if (!response.ok) {
      throw new Error("Failed to fetch data")
    }
    const fetchedData: TPost[] = await response.json()
    return fetchedData
  } catch (error) {
    console.error("Error fetching data:", error)
    throw new Error("Failed to fetch posts")
  }
}

export default fetchPosts
