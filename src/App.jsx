import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from 'pages/home/home'
import Mapeamento from 'pages/mapeamento/Mapa'
import Cards from 'pages/mapeamento/Cards'

import Trilha from 'pages/trilha/Trilha'
import NavU from 'Components/navbar/Nav.usuario'


export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/Map" element={<Mapeamento />} />
        <Route path="/C" element={<Cards/>} />
        <Route path="/Trilha" element={< Trilha/>} />
        <Route path="/NavU" element={< NavU/>} />
        
      </Routes>
      </BrowserRouter>
  )
}
