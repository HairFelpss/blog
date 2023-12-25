import React from "react"
import Logo from "./Logo"
import NavBar from "./NavBar"
import ThemeToggle from "./ThemeToggle"

const Header: React.FC<{ fullWidth: boolean }> = ({ fullWidth }) => {
  return (
    <div className="z-50 sticky top-0 bg-gray-100 shadow-md">
      <div
        className={`container flex flex-row items-center justify-between px-4 md:px-24 py-2 ${
          fullWidth ? "md:px-32" : ""
        }`}
      >
        <Logo />
        <div className="flex gap-3 items-center">
          <ThemeToggle />
          <NavBar />
        </div>
      </div>
    </div>
  )
}

export default Header
