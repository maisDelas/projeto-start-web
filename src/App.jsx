import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/home/Home'
// import Trilha from './pages/trilha/trilha'

// import NavBar from './Components/navbar/Navbar'


export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        {/* <Route path="/" element={<Trilha />} />  */}

        {/* <Route path="/Nav" element={<NavBar />} /> */}
      </Routes>
      </BrowserRouter>
  )
}