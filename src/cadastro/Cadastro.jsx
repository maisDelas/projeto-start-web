import Onda from "./../assets/Onda.svg"
import * as S from "./Cadastro.styled"
import logo from "../assets/Logobranca.svg"
import Navbar from "Components/navbar/Navbar";


function Cadastro() {
  return (
    <S.Container>
      <Navbar/>
      <S.Logo>
        <img src={logo} />
      </S.Logo>
      <S.Onda src={Onda} />
      <S.Card>
        <S.Button>Cadastre-se como Usuária(a)</S.Button>
        <S.Button>Cadastre-se como Prestadora</S.Button>
      </S.Card>
    </S.Container>
  )
}

export default Cadastro
