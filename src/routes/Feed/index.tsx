import { useState } from "react"

import ContactCard from "./ContactCard"
import { FeedHeader } from "./FeedHeader"
import Footer from "./Footer"
import MobileProfileCard from "./MobileProfileCard"
import PostList from "./PostList"
import ProfileCard from "./ProfileCard"
import SearchInput from "./SearchInput"
import ServiceCard from "./ServiceCard"
import TagList from "./TagList"

type Props = {}

const Feed: React.FC<Props> = () => {
  const [query, setQuery] = useState("")

  return (
    <div className="grid grid-cols-12 gap-6 md:gap-8 md:grid">
      <div className="hidden md:block col-span-2 lt overflow-scroll sticky top-[63px]">
        <TagList />
      </div>
      <div className="col-span-12 md:col-span-7">
        <MobileProfileCard />
        <SearchInput
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className="md:hidden"
        />
        <div className="tags hidden md:block">
          <TagList />
        </div>
        <FeedHeader />
        <PostList query={query} />
        <div className="footer md:hidden">
          <Footer />
        </div>
      </div>
      <div className="hidden md:block col-span-3 rt overflow-scroll sticky top-[63px]">
        <ProfileCard />
        <ServiceCard />
        <ContactCard />
        <div className="footer">
          <Footer />
        </div>
      </div>
    </div>
  )
}

export default Feed
