import usePostQuery from "src/hooks/usePostQuery"
import NotionRenderer from "../components/NotionRenderer"

const PageDetail = () => {
  const data = usePostQuery()

  if (!data) return null
  return (
    <div className="mx-auto max-w-56rem">
      <NotionRenderer recordMap={data.recordMap} />
    </div>
  )
}

export default PageDetail
