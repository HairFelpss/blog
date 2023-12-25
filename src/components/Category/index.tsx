import { useRouter } from "next/router"
import React from "react"
import { COLOR_SET } from "./constants"

export const getColorClassByName = (name: string): string => {
  try {
    let sum = 0
    name.split("").forEach((alphabet) => (sum = sum + alphabet.charCodeAt(0)))
    const colorKey = sum
      .toString(16)
      ?.[sum.toString(16).length - 1].toUpperCase()
    return COLOR_SET[colorKey]
  } catch {
    return COLOR_SET[0]
  }
}

type Props = {
  children: string
  readOnly?: boolean
}

const Category: React.FC<Props> = ({ readOnly = false, children }) => {
  const router = useRouter()

  const handleClick = (value: string) => {
    if (readOnly) return
    router.push(`/?category=${value}`)
  }

  const categoryColor = getColorClassByName(children)

  return (
    <div
      onClick={() => handleClick(children)}
      className={`p-1.5 rounded-full inline-block text-sm leading-5 ${
        readOnly ? "cursor-default" : "cursor-pointer"
      }`}
      style={{ backgroundColor: categoryColor }}
    >
      {children}
    </div>
  )
}

export default Category
