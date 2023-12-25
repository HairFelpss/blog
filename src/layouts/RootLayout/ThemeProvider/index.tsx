import { type FC, type PropsWithChildren } from "react"

import { Inter } from "next/font/google"

const inter = Inter({ subsets: ["latin"] })

export const ThemeProvider: FC<PropsWithChildren> = ({ children }) => {
  return <div className={inter.className}>{children}</div>
}
