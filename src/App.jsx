import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Homepage from './pages/Homepage'
import Errorpage from './pages/Errorpage'
import Finalepage from './pages/Finalepage'
import Redirectpage from './pages/Redirectpage'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/finale" element={<Finalepage />} />
        {/* Create a redirect to youtube on route /finale2 */}
        <Route path="/gallery-1" element={<Redirectpage url="https://m.facebook.com/story.php?story_fbid=pfbid0BffZGkTFSLLPXta7TdDxYTBk1dvswZzJ7rRebi82KmiKXuVTdycuVDSCVNtCaxDCl&id=100093309528840&mibextid=Nif5oz" />} />
        <Route path="/gallery-2" element={<Redirectpage url="https://m.facebook.com/story.php?story_fbid=pfbid02Biiq5y3gACL56aWsgyBEjqQM42YgvEe5g1zHof9mrDzUNCx9iWPrBV72ignNe4kxl&id=100093309528840&mibextid=Nif5oz" />} />
        <Route path="/*" element={<Errorpage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
