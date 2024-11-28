import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from 'pages/home/Home'
import Mapeamento from 'pages/mapeamento/Mapa'
import Cards from 'pages/mapeamento/Cards'
import Trilha from 'pages/trilha/Trilha'
import Perfil from 'pages/perfil/Perfil'
import ConteudoTrilha1 from './pages/trilha/TrilhaConteudo1'
import ConteudoTrilha2 from 'pages/trilha/TrilhaConteudo2'

import Dados from 'pages/dados/Dados'

import CadastroTipo from 'pages/escolhercadastro/CadastroTipo'
import Login from 'pages/login/Login'
import ResetPassword from 'pages/resetPassword/ResetPassword'
import CadastroPrestadora1 from 'pages/cadastroP/RegistrationFrm'
import CadastroPrestadora2 from 'pages/cadastroP/Prestadoratre2'
import CadastroPrestadora3 from 'pages/cadastroP/Prestadora3'
import CadastroPrestadora0 from 'pages/cadastroP/Prestadora0'
<<<<<<< HEAD
import Pessoais from "./pages/pessoais/Pessoais";

=======
import Configuracao from 'pages/configuracao/Config'
>>>>>>> 7557d1fa0dc07de7ab0fa42b3051a3d8391fc0b7

  

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="/Map" element={<Mapeamento />} />
        <Route path="/C" element={<Cards/>} />
        <Route path="/Trilha" element={< Trilha/>} />
        <Route path="/ConteudoTrilha1" element={< ConteudoTrilha1/>} />
        <Route path="/ConteudoTrilha2" element={< ConteudoTrilha2/>} />
        <Route path="/Dados" element={<Dados/>} />
       
        <Route path="/Perfil" element={< Perfil />} />
<<<<<<< HEAD
        <Route path="/Dados" element={<Dados />} />
        <Route path="/CadastroPrestadora0" element={<CadastroPrestadora0 />} />
        <Route path="CadastroPrestadora1" element={<CadastroPrestadora1 />} />
        <Route path="/CadastroPrestadora2" element={<CadastroPrestadora2 />} />
        <Route path="/CadastroPrestadora3" element={<CadastroPrestadora3 />} />
=======
        <Route path="/Configuracao" element={<Configuracao/>}/>
        <Route path="/Dados" element={<Dados />} />;
        <Route path="/CadastroPrestadora0" element={<CadastroPrestadora0 />} />; 
        <Route path="CadastroPrestadora1" element={<CadastroPrestadora1 />} />;
        <Route path="/CadastroPrestadora2" element={<CadastroPrestadora2 />} />;
        <Route path="/CadastroPrestadora3" element={<CadastroPrestadora3 />} />; 
>>>>>>> 7557d1fa0dc07de7ab0fa42b3051a3d8391fc0b7
        <Route path="/Login" element={<Login />} />;
        <Route path="/ResetPassword" element={<ResetPassword />} />;
        <Route path="/CadastroTipo" element={<CadastroTipo />} />;
        <Route path="/Pessoais" element={<Pessoais />} />;
      </Routes>
    </BrowserRouter>
  )
}
