import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home/home'
import Statement from './pages/Home/statement'

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/statement" element={<Statement />} />
      </Routes>
    </BrowserRouter>
  )
}