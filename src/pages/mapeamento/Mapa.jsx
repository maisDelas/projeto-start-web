import Footer from "./Components/footer/Footer"
import * as S from "./Mapa.styles"
import LogoBranca from "assets/Logo-branca.svg"
import Map from "./Api.mapa"
import NavBar from "./Components/navbar/Navbar"
import Cards from './Cards'

function Mapeamento() {
  return (
    <div>
      <NavBar />
      <S.Container>
        <S.Description>
          <S.Logo src={LogoBranca} />
          <h3>Mapeamento de serviços</h3>
          <p>Enconte uma proficional capacitada mais próxima de você</p>
        </S.Description>
        <div>
          <S.ContainerCarrossel>
            
            <S.VerticalSlider>
              <Cards/>
            </S.VerticalSlider>
          </S.ContainerCarrossel>
        </div>
      </S.Container>
      <S.ContainerMap><Map/></S.ContainerMap>

      {/* <Footer/> */}
    </div>
  )
}

export default Mapeamento
