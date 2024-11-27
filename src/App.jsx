import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from 'pages/home/home'
import Mapeamento from 'pages/mapeamento/Mapa'
import Cards from 'pages/mapeamento/Cards'
import Trilha from 'pages/trilha/Trilha'
import Perfil from 'pages/perfil/Perfil'
import CadastroTipo from 'pages/escolhercadastro/CadastroTipo'
import Dados from  'pages/dados/Dados'
import ConteudoTrilha1 from './pages/trilha/TrilhaConteudo1'
import ConteudoTrilha2 from 'pages/trilha/TrilhaConteudo2'
import ResetPassword from 'pages/resetPassword/ResetPassword'
import Modal from 'Components/modal/Modal'

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

        <Route path="/Perfil" element={< Perfil />} />

        <Route path="/Dados" element={<Dados/>} />

        <Route path="/CadastroPrestadora" element={<CadastroPrestadora />} />

        <Route path="/ResetPassword" element={<ResetPassword />} />

        <Route path="/Perfil" element={< Perfil />} />

        <Route path="/CadastroTipo" element={<CadastroTipo />} /> 

        <Route path="/Dados" element={<Dados />} />

        <Route path="/Modal" element={<Modal />} />
      
      </Routes>
      </BrowserRouter>
  )
}


