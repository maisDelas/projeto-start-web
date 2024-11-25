import { useState } from "react"

import Footer from "Components/footer/footer"
import * as S from "./Mapa.styles"
import LogoBranca from "assets/Logo-branca.svg"
import Map from "./Api.mapa"
import Cards from "./Cards"
import InfoCards from "./InfoCards"
import NavU from "Components/navbar/Nav.usuario"


function Mapeamento() {
  const [isVerticalOpen, setIsVerticalOpen] = useState(true)

  function handleWithButtonClick() {
    setIsVerticalOpen((isVerticalOpen) => !isVerticalOpen)
  }

  return (
    <>
      {/* Navbar com o icone de usuario funcionando */}
      <NavU />

      <S.MapSection>
        {/* Div com o backgroud laranja */}
        <S.Container>
          <S.Description>
            <S.Logo src={LogoBranca} />
            <h3>Mapeamento de serviços</h3>
            <p>Enconte uma proficional capacitada mais próxima de você</p>
          </S.Description>
        </S.Container>

        {/* Container com a api de map */}
        <S.ContainerMap>
          <div>
            <Map />
          </div>
        </S.ContainerMap>

        {/* Container com os cards das prestadoras */}
        <S.VerticalSlider isOpen={isVerticalOpen}>
          <S.Buttonarrow onClick={handleWithButtonClick}>
            <S.IconArrow />
          </S.Buttonarrow>
          <S.InputContainer isOpen={isVerticalOpen} >
            <S.Pesquisa placeholder="Buscar"/>
            <S.Lupa />
          </S.InputContainer>
          <S.BotaoFiltrar isOpen={isVerticalOpen}>
            <S.Innertext>Filtrar por área de serviço</S.Innertext>
            <S.Arrow2 />
          </S.BotaoFiltrar>
          <S.ContainerCards>
            {InfoCards.map((x, i) => (
              <Cards key={`Cards_${i}`} {...x} />
            ))}
          </S.ContainerCards>
        </S.VerticalSlider>

        {/* Footer padrão global */}
      </S.MapSection>
      <Footer />
    </>
  )
}

export default Mapeamento
