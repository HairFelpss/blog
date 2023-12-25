import { useRouter } from "next/router"
import React from "react"

type Props = {
  children: string
}

const Tag: React.FC<Props> = ({ children }) => {
  const router = useRouter()

  const handleClick = (value: string) => {
    router.push(`/?tag=${value}`)
  }
  return (
    <div
      onClick={() => handleClick(children)}
      className="p-1.5 border-2 rounded-full text-xs font-medium text-gray-700 bg-gray-300 cursor-pointer hover:bg-gray-400"
    >
      {children}
    </div>
  )
}

export default Tag
