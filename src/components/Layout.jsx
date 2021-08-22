import * as React from "react"
import Header from "./Header"
import { GlobalStyle } from "./styles/GlobalStyles"

const Layout = ({children}) => {
  return (
    <>
    <GlobalStyle/>
      <Header/>
      {children}
    </>
  )
}

export default Layout
