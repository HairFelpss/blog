import React from "react"
import Logo from "./Logo"
import NavBar from "./NavBar"
import ThemeToggle from "./ThemeToggle"

const Header: React.FC<{ fullWidth: boolean }> = ({ fullWidth }) => {
  return (
    <div className="navbar">
      <div className="flex flex-1 flex-row items-center justify-around">
        <Logo />
        <div className="flex flex-row items-center justify-around">
          <ThemeToggle />
          <NavBar />
        </div>
      </div>
    </div>
  )
}

export default Header
