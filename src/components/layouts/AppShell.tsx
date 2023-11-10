import { ReactNode } from "react"
import NavbarLayout from "./NavbarLayout"
import { Roboto } from "next/font/google"

type Props = {
    children: ReactNode
  }

const roboto = Roboto({
    subsets: ['latin'],
    weight: ['400', "500", "700"]
  })

const AppShell = ({children} : Props) => {
  return (
    <div className={roboto.className}>
        <NavbarLayout/>
        {children}
    </div>
  )
}

export default AppShell
