import React from "react"
import { CONFIG } from "site.config"

const year = new Date().getFullYear()
const from = +CONFIG.since

type Props = {
  className?: string
}

const Footer: React.FC<Props> = ({ className }) => {
  return (
    <div
      className={`mt-3 text-sm text-gray-700 dark:text-gray-300 ${className}`}
    >
      <a
        href={`https://github.com/${CONFIG.profile.github}`}
        target="_blank"
        rel="noreferrer"
        className="block"
      >
        © {CONFIG.profile.name}{" "}
        {from === year || !from ? year : `${from} - ${year}`}
      </a>
    </div>
  )
}

export default Footer
