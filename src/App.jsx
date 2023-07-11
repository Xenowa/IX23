import { Box } from '@mui/material'
import Dashboard from "./components/Dashboard"
import Home from "./components/Home"
import About from "./components/About"
import Guidelines from "./components/Guidelines"
import Schedule from "./components/Schedule"
import Awards from "./components/Awards"
import Partners from "./components/Partners"
import Register from "./components/Register"
import Contact from "./components/Contact"
import './App.css'
import Footer from './components/Footer'

import VisibilityContext from "./context/Visibility"
import { useState } from 'react'

function App() {
  const [visibleElement, setVisibleElement] = useState();

  return (
    <Box>
      <VisibilityContext.Provider value={{visibleElement, setVisibleElement}}>
        <Dashboard />

        <Box component="main" flex="1">
          <Home />
          <About />
          <Guidelines />
          <Schedule />
          <Awards />
          <Register />
          <Partners />
          <Contact />
          <Footer />
        </Box>
      </VisibilityContext.Provider>
    </Box>
  )
}

export default App
