import React from 'react'
import Menu from "./components/Menu"
import { BrowserRouter } from 'react-router-dom'

const App : React.FC = () => {
  return (
    <BrowserRouter>
    <Menu/>
    </BrowserRouter>
  )
}

export default App