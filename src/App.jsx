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
<<<<<<< HEAD
import Modal from 'Components/modal/Modal'

import CadastroPrestadora from 'pages/cadastroP/TelaP'
=======
// import CadastroPrestadora from 'pages/cadastroP/TelaP'
import CadastroPrestadora1 from 'pages/cadastroP/Prestadora1'
import CadastroPrestadora2 from 'pages/cadastroP/Prestadoratre2'
import CadastroPrestadora3 from 'pages/cadastroP/Prestadora3'
import CadastroPrestadora0 from 'pages/cadastroP/Prestadora0'

<<<<<<< HEAD

>>>>>>> 349e990c6e5745eb54572ed45e78679bfd190336



=======
>>>>>>> 70523745f57595419e4f8b5607f8f961ea0719bc
export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="/Map" element={<Mapeamento />} />

        <Route path="/C" element={<Cards />} />

<<<<<<< HEAD
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
      
=======
        <Route path="/Trilha" element={< Trilha />} />
        <Route path="/ConteudoTrilha1" element={< ConteudoTrilha1 />} />
        <Route path="/ConteudoTrilha2" element={< ConteudoTrilha2 />} />

        <Route path="/Perfil" element={< Perfil />} />

        <Route path="/Cadastro" element={<Cadastro />} />

        <Route path="/Dados" element={<Dados />} />
        {/* <Route path="/CadastroPrestadora" element={<CadastroPrestadora />} /> */}
        <Route path="/CadastroPrestadora0" element={<CadastroPrestadora0 />} />
        <Route path="CadastroPrestadora1" element={<CadastroPrestadora1 />} />
        <Route path="/CadastroPrestadora2" element={<CadastroPrestadora2 />} />
        <Route path="/CadastroPrestadora3" element={<CadastroPrestadora3 />} />
        <Route path="/ResetPassword" element={<ResetPassword />} />
        <Route path="/CadastroTipo" element={<CadastroTipo />} />
>>>>>>> 349e990c6e5745eb54572ed45e78679bfd190336
      </Routes>
    </BrowserRouter>
  )
}


