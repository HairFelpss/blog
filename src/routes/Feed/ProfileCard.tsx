import Image from "next/image"
import React from "react"
import { CONFIG } from "site.config"

type Props = {}

const ProfileCard: React.FC<Props> = () => {
  return (
    <div className="p-4 md:p-6 mb-9 md:mb-0 md:w-96 bg-white dark:bg-gray-400 rounded-lg">
      <div className="text-lg font-bold mb-3">
        <span role="img" aria-label="laptop emoji">
          💻
        </span>{" "}
        Profile
      </div>
      <div className="flex flex-col md:flex-row items-center md:items-start">
        <div className="w-32 h-32 rounded-full overflow-hidden md:mr-6">
          <Image
            src={CONFIG.profile.image}
            layout="responsive"
            width={90}
            height={90}
            objectFit="cover"
            alt="profile_image"
          />
        </div>
        <div className="text-center md:text-left">
          <div className="text-xl font-semibold">{CONFIG.profile.name}</div>
          <div className="text-sm text-gray-500">{CONFIG.profile.role}</div>
          <div className="text-sm text-gray-700 dark:text-gray-300">
            {CONFIG.profile.bio}
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProfileCard
