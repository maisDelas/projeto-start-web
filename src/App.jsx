import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/home/Home'
import Trilha from 'pages/trilha/Trilha'
import ConteudoTrilha from './pages/trilha/TrilhaConteudo'


export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Trilha" element={< Trilha/>} />
        <Route path="/ConteudoTrilha" element={< ConteudoTrilha/>} />
        
      </Routes>
      </BrowserRouter>
  )
}
