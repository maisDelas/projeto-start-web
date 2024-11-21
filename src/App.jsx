import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/home/Home'
import Trilha from 'pages/trilha/Trilha'


export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Trilha" element={< Trilha/>} />
        
      </Routes>
      </BrowserRouter>
  )
}
