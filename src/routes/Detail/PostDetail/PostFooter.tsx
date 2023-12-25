import { useRouter } from "next/router"
import React from "react"

type Props = {}

const Footer: React.FC<Props> = () => {
  const router = useRouter()

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  return (
    <div className="flex justify-between font-medium text-gray-700">
      <a onClick={() => router.push("/")} className="mt-2 cursor-pointer">
        ← Back
      </a>
      <a onClick={scrollToTop} className="mt-2 cursor-pointer">
        ↑ Top
      </a>
    </div>
  )
}

export default Footer
