import Link from "next/link"
import { CONFIG } from "site.config"

const Logo = () => {
  return (
    <Link href="/" aria-label={CONFIG.blog.title} className="ml-5">
      {CONFIG.blog.title}
    </Link>
  )
}

export default Logo
