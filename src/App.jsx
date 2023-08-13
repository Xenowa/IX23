import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Homepage from './pages/Homepage'
import Errorpage from './pages/Errorpage'
import Finalepage from './pages/Finalepage'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Homepage />} />
        {/* CHANGE THE ROUTE TO: /final after finalizing timelines*/}
        <Route path="/finale-998710293821" element={<Finalepage />} />
        <Route path="/*" element={<Errorpage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
