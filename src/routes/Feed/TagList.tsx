import { useRouter } from "next/router"
import React from "react"
import { Emoji } from "src/components/Emoji"
import { useTagsQuery } from "src/hooks/useTagsQuery"

type Props = {}

const TagList: React.FC<Props> = () => {
  const router = useRouter()
  const currentTag = router.query.tag || undefined
  const data = useTagsQuery()

  const handleClickTag = (value: any) => {
    if (currentTag === value) {
      router.push({
        query: {
          ...router.query,
          tag: undefined,
        },
      })
    } else {
      router.push({
        query: {
          ...router.query,
          tag: value,
        },
      })
    }
  }

  return (
    <div>
      <div className="hidden md:block py-1 mb-3">
        <Emoji>🏷️</Emoji> Tags
      </div>
      <div className="flex mb-6 gap-1.5 overflow-x-auto">
        {Object.keys(data).map((key) => (
          <a
            key={key}
            className={`block px-4 py-1 mt-1 mb-1 rounded-lg text-sm leading-tight cursor-pointer ${
              key === currentTag
                ? "text-gray-900 bg-gray-300"
                : "text-gray-700 hover:bg-gray-200"
            }`}
            onClick={() => handleClickTag(key)}
          >
            {key}
          </a>
        ))}
      </div>
    </div>
  )
}

export default TagList
