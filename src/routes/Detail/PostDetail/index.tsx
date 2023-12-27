import React from "react"
import Category from "src/components/Category"
import usePostQuery from "src/hooks/usePostQuery"
import NotionRenderer from "../components/NotionRenderer"
import CommentBox from "./CommentBox"
import Footer from "./PostFooter"
import PostHeader from "./PostHeader"

type Props = {}

const PostDetail: React.FC<Props> = () => {
  const data = usePostQuery()

  if (!data) return null

  const category = (data.category && data.category?.[0]) || undefined

  return (
    <div className="p-6 max-w-56rem mx-auto shadow-md rounded-lg">
      <article className="max-w-42rem mx-auto">
        {category && (
          <div className="mb-2">
            <Category readOnly={data.status?.[0] === "PublicOnDetail"}>
              {category}
            </Category>
          </div>
        )}
        {data.type[0] === "Post" && <PostHeader data={data} />}
        <div>
          <NotionRenderer recordMap={data.recordMap} />
        </div>
        {data.type[0] === "Post" && (
          <>
            <Footer />
            <CommentBox data={data} />
          </>
        )}
      </article>
    </div>
  )
}

export default PostDetail
