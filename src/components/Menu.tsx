import { Homepage,Product,Footer,BackToTopButton } from "./navigate"
import React from "react"

const Menu : React.FC = () => {
  return (
     <>
     <Homepage />
     <Product />
     <BackToTopButton/>
     <Footer/>
     </>
  )
}

export default Menu