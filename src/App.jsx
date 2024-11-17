import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home/Home'
// import Statement from './pages/Home/Statement'

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        {/* <Route path="/statement" element={<Statement />} /> */}
      </Routes>
    </BrowserRouter>
  )
}