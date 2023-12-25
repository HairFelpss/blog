import { useRouter } from "next/router"
import React from "react"
import { MdExpandMore } from "react-icons/md"
import { DEFAULT_CATEGORY } from "src/constants"
import { useCategoriesQuery } from "src/hooks/useCategoriesQuery"
import useDropdown from "src/hooks/useDropdown"

type Props = {}

const CategorySelect: React.FC<Props> = () => {
  const router = useRouter()
  const data = useCategoriesQuery()

  const [dropdownRef, opened, handleOpen] = useDropdown()

  const currentCategory = `${router.query.category || ""}` || DEFAULT_CATEGORY

  const handleOptionClick = (category: string) => {
    router.push({
      query: {
        ...router.query,
        category,
      },
    })
  }

  return (
    <div className="relative">
      <div
        ref={dropdownRef}
        className="flex mt-2 mb-2 gap-1 items-center text-lg font-bold cursor-pointer"
        onClick={handleOpen}
      >
        {`${currentCategory} Posts`} <MdExpandMore />
      </div>
      {opened && (
        <div className="absolute z-40 p-1 rounded bg-gray-200 dark:bg-gray-600 text-gray-800 dark:text-gray-300 shadow-md">
          {Object.keys(data).map((key, idx) => (
            <div
              className="p-1 pl-2 pr-2 rounded text-sm whitespace-nowrap cursor-pointer hover:bg-gray-300 dark:hover:bg-gray-700"
              key={idx}
              onClick={() => handleOptionClick(key)}
            >
              {`${key} (${data[key]})`}
            </div>
          ))}
        </div>
      )}
    </div>
  )
}

export default CategorySelect
