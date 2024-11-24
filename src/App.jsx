import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/home/Home'
import Trilha from 'pages/trilha/Trilha'
import Perfil from 'pages/perfil/Perfil'
import Cadastro from 'cadastro/Cadastro'



export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Trilha" element={< Trilha/>} />
        <Route path="/Perfil" element={< Perfil />} />
        <Route path="/Cadastro" element={<Cadastro />} />
      </Routes>
      </BrowserRouter>
  )
}


