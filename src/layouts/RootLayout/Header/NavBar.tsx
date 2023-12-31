import Link from "next/link"

const NavBar: React.FC = () => {
  const links = [{ id: 1, name: "About", to: "/about" }]

  return (
    <div className="flex-none">
      <ul className="menu menu-horizontal px-1">
        {links.map((link) => (
          <li key={link.id} className="block ml-4 text-gray-700">
            <Link href={link.to}>{link.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default NavBar
