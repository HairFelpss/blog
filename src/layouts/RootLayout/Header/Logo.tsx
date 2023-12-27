import Link from "next/link"
import { CONFIG } from "site.config"

const Logo = () => {
  return (
    <Link
      href="/"
      aria-label={CONFIG.blog.title}
      className="btn btn-ghost text-xl"
    >
      {CONFIG.blog.title}
    </Link>
  )
}

export default Logo
