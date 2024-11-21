import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from 'pages/home/home'
import Mapeamento from 'pages/mapeamento/Mapa'
import Cards from 'pages/mapeamento/Cards'



export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Map" element={<Mapeamento />} />
        <Route path="/C" element={<Cards/>} />
      </Routes>
    </BrowserRouter>
  )
}