import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './home/Home'
import Mapeamento from 'pages/mapeamento/Mapa'
import Cards from 'pages/mapeamento/Cards'

import Trilha from 'pages/trilha/Trilha'
import Perfil from 'pages/perfil/Perfil'
import CadastroTipo from 'escolhercadastro/CadastroTipo'
import ConteudoTrilha1 from './pages/trilha/TrilhaConteudo1'
import ConteudoTrilha2 from 'pages/trilha/TrilhaConteudo2'

import CadastroPrestadora from 'pages/cadastroP/TelaP'


export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/Map" element={<Mapeamento />} />
        <Route path="/C" element={<Cards/>} />
        <Route path="/Trilha" element={< Trilha/>} />
        <Route path="/ConteudoTrilha1" element={< ConteudoTrilha1/>} />
        <Route path="/ConteudoTrilha2" element={< ConteudoTrilha2/>} />



        <Route path="/CadastroPrestadora" element={<CadastroPrestadora />} />

        <Route path="/ResetPassword" element={<ResetPassword />} />

        
        <Route path="/Perfil" element={< Perfil />} />
        <Route path="/CadastroTipo" element={<CadastroTipo />} /> 
      </Routes>
      </BrowserRouter>
  )
}


