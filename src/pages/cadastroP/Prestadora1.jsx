import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import CadastroPrestadora1 from './CadastroPrestadora1'; // Caminho correto para o componente
import CadastroPrestadora2 from './CadastroPrestadora2'; // Caminho correto para o componente
import CadastroPrestadora3 from './CadastroPrestadora3'; // Caso haja uma terceira página de cadastro

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/CadastroPrestadora1" element={<CadastroPrestadora1 />} />
        <Route path="/CadastroPrestadora2" element={<CadastroPrestadora2 />} />
        <Route path="/CadastroPrestadora3" element={<CadastroPrestadora3 />} />
        {/* Defina outras rotas conforme necessário */}
      </Routes>
    </Router>
  );
}

export default App;
