import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/home/home' 
import Mapeamento from './pages/mapeamento/MapLayout'
import Cards from './pages/mapeamento/Cards'
import Trilha from './pages/trilha/Trilha'
import Perfil from './pages/perfil/Perfil'
import PerfilUsuario from './pages/perfilUser/PerfilUser'
import ConteudoTrilha1 from './pages/trilha/TrilhaConteudo1'
import ConteudoTrilha2 from './pages/trilha/TrilhaConteudo2'
import Dados from './pages/dados/Dados'
import CadastroTipo from './pages/escolhercadastro/CadastroTipo'
import Login from './pages/login/Login'
import ResetPassword from './pages/resetPassword/ResetPassword'
import CadastroPrestadora0 from './pages/cadastroP/Prestadora0'
import Pessoais from "./pages/pessoais/Pessoais";
import Configuracao from './pages/configuracao/Config'
import Contratar from './pages/enviodecontrato/Contratar'
import Contratos from './pages/contratosP/Contratos'
import LoginDados from './pages/loginDados/Logindados'
import CadastroUnificado from './pages/cadastroP/Prestadora1'



export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="/Map" element={<Mapeamento />} />
        <Route path="/C" element={<Cards />} />
        <Route path="/Perfil" element={< Perfil />} />
        <Route path="/Trilha" element={<Trilha />} />
        <Route path="/ConteudoTrilha1" element={<ConteudoTrilha1 />} />
        <Route path="/ConteudoTrilha2" element={<ConteudoTrilha2 />} />
        <Route path="/Configuracao" element={<Configuracao />} />
        <Route path="/Contratos" element={<Contratos/>} />

        <Route path="/PerfilUsuario" element={< PerfilUsuario />} />
        
        <Route path="/CadastroTipo" element={<CadastroTipo />} />;
        <Route path="/DadosPessoais" element={<Pessoais />} />;
        <Route path="/DadosEndereco" element={<Dados />} />;
        <Route path="/CadastroPrestadora0" element={<CadastroPrestadora0 />} />;
        <Route path="/CadastroUnificado" element={<CadastroUnificado />} />;
        <Route path="/LoginDados" element={<LoginDados />} />;
        <Route path="/Contratar" element={<Contratar />} />;
        <Route path="/Login" element={<Login />} />;
        <Route path="/ResetPassword" element={<ResetPassword/>} />;

      </Routes>
    </BrowserRouter>
  )
}
