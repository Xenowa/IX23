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
        <Route path="/finale" element={<Finalepage />} />
        <Route path="/*" element={<Errorpage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
