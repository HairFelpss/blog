import React from "react"
import { AiFillCodeSandboxCircle } from "react-icons/ai"
import { CONFIG } from "site.config"
import { Emoji } from "src/components/Emoji"

const ServiceCard: React.FC = () => {
  if (!CONFIG.projects) return null
  return (
    <div className="mb-9 md:mb-0 md:w-96">
      <div className="text-lg font-bold mb-3">
        <Emoji>🌟</Emoji> Service
      </div>
      <div className="flex flex-col">
        {CONFIG.projects.map((project, idx) => (
          <a
            key={idx}
            href={`${project.href}`}
            rel="noreferrer"
            target="_blank"
            className="flex items-center gap-3 p-3 rounded-lg text-gray-700 dark:text-gray-300 hover:text-gray-900 hover:bg-gray-200 dark:hover:bg-gray-500"
          >
            <AiFillCodeSandboxCircle className="text-xl" />
            <div className="text-sm">{project.name}</div>
          </a>
        ))}
      </div>
    </div>
  )
}

export default ServiceCard
