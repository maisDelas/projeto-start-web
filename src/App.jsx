import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from 'pages/home/Home'
import Mapeamento from 'pages/mapeamento/Mapa'
import Cards from 'pages/mapeamento/Cards'
import Trilha from 'pages/trilha/Trilha'
import Perfil from 'pages/perfil/Perfil'
import Cadastro from 'cadastro/Cadastro'
import CadastroTipo from 'pages/escolhercadastro/CadastroTipo'
import Dados from 'pages/dados/Dados'
import ConteudoTrilha1 from './pages/trilha/TrilhaConteudo1'
import ConteudoTrilha2 from 'pages/trilha/TrilhaConteudo2'
import ResetPassword from 'pages/resetPassword/ResetPassword'

import CadastroPrestadora from 'pages/cadastroP/TelaP'
// import ResetPassword from 'pages/resetPassword/ResetPassword'



export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Map" element={<Mapeamento />} />
        <Route path="/C" element={<Cards />} />
        <Route path="/Trilha" element={< Trilha />} />
        <Route path="/ConteudoTrilha1" element={< ConteudoTrilha1 />} />

        <Route path="/ConteudoTrilha2" element={< ConteudoTrilha2 />} />
        <Route path="/CadastroPrestadora" element={<CadastroPrestadora />} />
        <Route path="/Perfil" element={< Perfil />} />
        <Route path="/Cadastro" element={<Cadastro />} />
        {/* <Route path="/Redefinição" element={<ResetPassword/>} /> */}
        <Route path="/Dados" element={<Dados />} />  
        <Route path="/ResetPassword" element={<ResetPassword />} />
        <Route path="/CadastroTipo" element={<CadastroTipo />} />   
      </Routes>
    </BrowserRouter>
  )
}


