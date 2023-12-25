import React from "react"
import CategorySelect from "./CategorySelect"
import OrderButtons from "./OrderButtons"

type Props = {}

const FeedHeader: React.FC<Props> = () => {
  return (
    <div className="flex items-center justify-between mb-4 border-b border-gray-300">
      <CategorySelect />
      <OrderButtons />
    </div>
  )
}

export default FeedHeader
