import React from "react"
import {
  AiFillLinkedin,
  AiOutlineGithub,
  AiOutlineInstagram,
  AiOutlineMail,
} from "react-icons/ai"
import { CONFIG } from "site.config"

const ContactCard: React.FC = () => {
  return (
    <>
      <div className="p-1 mb-3">💬 Contact</div>
      <div className="flex flex-col p-1 rounded-xl bg-white dark:bg-gray-400">
        {CONFIG.profile.github && (
          <a
            href={`https://github.com/${CONFIG.profile.github}`}
            rel="noreferrer"
            target="_blank"
            className="flex p-3 gap-3 items-center rounded-xl text-gray-900 dark:text-gray-300 hover:text-gray-100 hover:bg-gray-500 dark:hover:bg-gray-300"
          >
            <AiOutlineGithub className="icon" />
            <div className="name">github</div>
          </a>
        )}
        {CONFIG.profile.instagram && (
          <a
            href={`https://www.instagram.com/${CONFIG.profile.instagram}`}
            rel="noreferrer"
            target="_blank"
            className="flex p-3 gap-3 items-center rounded-xl text-gray-900 dark:text-gray-300 hover:text-gray-100 hover:bg-gray-500 dark:hover:bg-gray-300"
          >
            <AiOutlineInstagram className="icon" />
            <div className="name">instagram</div>
          </a>
        )}
        {CONFIG.profile.email && (
          <a
            href={`mailto:${CONFIG.profile.email}`}
            rel="noreferrer"
            target="_blank"
            className="flex p-3 gap-3 items-center rounded-xl text-gray-900 dark:text-gray-300 hover:text-gray-100 hover:bg-gray-500 dark:hover:bg-gray-300"
          >
            <AiOutlineMail className="icon" />
            <div className="name">email</div>
          </a>
        )}
        {CONFIG.profile.linkedin && (
          <a
            href={`https://www.linkedin.com/in/${CONFIG.profile.linkedin}`}
            rel="noreferrer"
            target="_blank"
            className="flex p-3 gap-3 items-center rounded-xl text-gray-900 dark:text-gray-300 hover:text-gray-100 hover:bg-gray-500 dark:hover:bg-gray-300"
          >
            <AiFillLinkedin className="icon" />
            <div className="name">linkedin</div>
          </a>
        )}
      </div>
    </>
  )
}

export default ContactCard
