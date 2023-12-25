import { useRouter } from "next/router"
import React from "react"

type TOrder = "asc" | "desc"

type Props = {}

const OrderButtons: React.FC<Props> = () => {
  const router = useRouter()

  const currentOrder = `${router.query.order || ``}` || ("desc" as TOrder)

  const handleClickOrderBy = (value: TOrder) => {
    router.push({
      query: {
        ...router.query,
        order: value,
      },
    })
  }

  return (
    <div className="flex gap-2 text-sm">
      <a
        className={`cursor-pointer ${
          currentOrder === "desc"
            ? "font-semibold text-gray-900"
            : "text-gray-600"
        }`}
        onClick={() => handleClickOrderBy("desc")}
      >
        Desc
      </a>
      <a
        className={`cursor-pointer ${
          currentOrder === "asc"
            ? "font-semibold text-gray-900"
            : "text-gray-600"
        }`}
        onClick={() => handleClickOrderBy("asc")}
      >
        Asc
      </a>
    </div>
  )
}

export default OrderButtons
