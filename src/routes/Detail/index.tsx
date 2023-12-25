import usePostQuery from "src/hooks/usePostQuery"
import PageDetail from "./PageDetail"
import PostDetail from "./PostDetail"
import useMermaidEffect from "./hooks/useMermaidEffect"

const Detail: React.FC = () => {
  const data = usePostQuery()
  useMermaidEffect()

  if (!data) return null

  return (
    <div className="p-8 md:p-0" data-type={data.type}>
      {data.type[0] === "Page" ? <PageDetail /> : <PostDetail />}
    </div>
  )
}

export default Detail
