import React from "react"
import { Emoji } from "src/components/Emoji"

type Props = {}

const CustomError: React.FC<Props> = () => {
  return (
    <div className="mx-auto px-6 pt-12 pb-12 rounded-lg max-w-screen-lg">
      <div className="flex flex-col items-center gap-10">
        <div className="flex items-center text-6xl">
          <div>4</div>
          <Emoji>🤔</Emoji>
          <div>4</div>
        </div>
        <div className="text-3xl font-bold text-gray-700">Post not found</div>
      </div>
    </div>
  )
}

export default CustomError
