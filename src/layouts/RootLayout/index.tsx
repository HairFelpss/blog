import { ReactNode } from "react"
import Scripts from "src/layouts/RootLayout/Scripts"
import Header from "./Header"
import { ThemeProvider } from "./ThemeProvider"
import useGtagEffect from "./useGtagEffect"

type Props = {
  children: ReactNode
}

const RootLayout = ({ children }: Props) => {
  useGtagEffect()
  return (
    <ThemeProvider>
      <Scripts />
      {/* Replace with Header component */}
      <Header fullWidth={false} />
      <main className="mx-auto w-full px-4">{children}</main>
    </ThemeProvider>
  )
}

export default RootLayout
