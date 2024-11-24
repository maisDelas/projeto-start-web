import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from 'pages/home/home'
import Mapeamento from 'pages/mapeamento/Mapa'
import Cards from 'pages/mapeamento/Cards'

import Trilha from 'pages/trilha/Trilha'
import Perfil from 'pages/perfil/Perfil'
import Cadastro from 'cadastro/Cadastro'
import CadastroPrestadora from 'pages/cadastroP/TelaP'


export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/Map" element={<Mapeamento />} />
        <Route path="/C" element={<Cards/>} />
        <Route path="/Trilha" element={< Trilha/>} />



        <Route path="/CadastroPrestadora" element={<CadastroPrestadora />} />



        
        <Route path="/Perfil" element={< Perfil />} />
        <Route path="/Cadastro" element={<Cadastro />} />
      </Routes>
      </BrowserRouter>
  )
}


