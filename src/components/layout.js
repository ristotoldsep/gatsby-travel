import React from "react"
import Header from "./header"
import Footer from "./Footer"
import { GlobalStyle } from "./styles/GlobalStyles"

const Layout = ({ children }) => {
  

  return (
    <>
      <GlobalStyle />
      <Header />
     
        <main>{children}</main>
      
      <Footer />
        
    </>
  )
}


export default Layout
