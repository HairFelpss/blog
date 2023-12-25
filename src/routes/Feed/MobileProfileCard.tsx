import Image from "next/image"
import React from "react"
import { CONFIG } from "site.config"

type Props = {}

const MobileProfileCard: React.FC<Props> = () => {
  return (
    <div className="block md:hidden">
      <div className="text-lg font-bold mb-3">💻 Profile</div>
      <div className="p-2 bg-white dark:bg-gray-400 rounded-md">
        <div className="flex items-center gap-2">
          <div className="relative w-16 h-16">
            <Image
              src={CONFIG.profile.image}
              width={90}
              height={90}
              layout="responsive"
              className="rounded-full"
              alt="profile_image"
            />
          </div>
          <div>
            <div className="text-xl font-semibold">{CONFIG.profile.name}</div>
            <div className="text-sm text-gray-500">{CONFIG.profile.role}</div>
            <div className="text-sm text-gray-700 dark:text-gray-300">
              {CONFIG.profile.bio}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default MobileProfileCard
