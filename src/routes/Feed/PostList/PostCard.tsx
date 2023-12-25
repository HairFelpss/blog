import Image from "next/image"
import Link from "next/link"
import { CONFIG } from "site.config"
import { formatDate } from "src/libs/utils"
import Category from "../../../components/Category"
import Tag from "../../../components/Tag"
import { TPost } from "../../../types"

type Props = {
  data: TPost
}

const PostCard: React.FC<Props> = ({ data }) => {
  const category = data?.category?.[0] || undefined

  return (
    <Link href={`/${data.slug}`}>
      <span className="relative block overflow-hidden transition-shadow duration-300 bg-white dark:bg-gray-400 rounded-lg shadow-md hover:shadow-lg mb-6 md:mb-8">
        <article>
          {category && (
            <div className="absolute top-3 left-3 z-10">
              <Category>{category}</Category>
            </div>
          )}
          {data.thumbnail && (
            <div className="relative bg-gray-200 h-0 aspect-w-1 aspect-h-0 md:aspect-w-1 md:aspect-h-1">
              <Image
                src={data.thumbnail}
                layout="fill"
                objectFit="cover"
                alt={data.title}
              />
            </div>
          )}
          <div
            className={`p-4 ${
              !data.thumbnail ? "pt-14" : "" // To maintain space when there's no thumbnail
            }`}
          >
            <header className="mb-4 md:mb-6">
              <h2 className="text-lg font-medium cursor-pointer hover:text-gray-700 dark:hover:text-gray-300 md:text-xl md:font-semibold">
                {data.title}
              </h2>
              <div className="flex flex-wrap gap-2 mb-2">
                {data.tags &&
                  data.tags.map((tag: string, idx: number) => (
                    <Tag key={idx}>{tag}</Tag>
                  ))}
              </div>
              <div className="text-sm text-gray-600 dark:text-gray-400">
                {formatDate(
                  data?.date?.start_date || data.createdTime,
                  CONFIG.lang
                )}
              </div>
            </header>
            <div className="hidden md:block">
              <p className="text-gray-700 dark:text-gray-300 line-clamp-3">
                {data.summary}
              </p>
            </div>
          </div>
        </article>
      </span>
    </Link>
  )
}

export default PostCard
