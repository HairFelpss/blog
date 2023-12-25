import Image from "next/image"
import React from "react"
import { CONFIG } from "site.config"
import Tag from "src/components/Tag"
import { formatDate } from "src/libs/utils"
import { TPost } from "src/types"

type Props = {
  data: TPost
}

const PostHeader: React.FC<Props> = ({ data }) => {
  return (
    <div className="px-4 sm:px-6 md:px-8 py-8 md:py-12 max-w-screen-md mx-auto">
      <h1 className="text-3xl md:text-4xl font-bold mb-4">{data.title}</h1>
      {data.type[0] !== "Paper" && (
        <nav className="text-gray-600">
          <div className="flex items-center mb-3">
            {data.author && data.author[0] && data.author[0].name && (
              <>
                <div className="flex items-center">
                  <Image
                    src={data.author[0].profile_photo || CONFIG.profile.image}
                    alt="profile_photo"
                    width={24}
                    height={24}
                    className="rounded-full"
                  />
                  <div className="ml-2">{data.author[0].name}</div>
                </div>
                <div className="h-4 bg-gray-300 mx-3"></div>
              </>
            )}
            <div className="text-sm">
              {formatDate(
                data?.date?.start_date || data.createdTime,
                CONFIG.lang
              )}
            </div>
          </div>
          <div className="flex items-center mb-4 space-x-2 overflow-x-auto">
            {data.tags &&
              data.tags.map((tag: string) => <Tag key={tag}>{tag}</Tag>)}
          </div>
          {data.thumbnail && (
            <div className="relative overflow-hidden rounded-lg mb-6">
              <Image
                src={data.thumbnail}
                alt={data.title}
                layout="responsive"
                width={1200}
                height={627}
                className="object-cover"
              />
            </div>
          )}
        </nav>
      )}
    </div>
  )
}

export default PostHeader
