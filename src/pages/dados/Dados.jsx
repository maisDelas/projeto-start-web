import * as S from "./Dados.styles"
import Onda from "../../assets/Onda.svg"
import logo from "../../assets/Logobranca.svg"
import bola2 from "assets/bola2.svg"

function Dados() {
  return (
    <S.Container>
      <S.Onda src={Onda} alt="Onda" />
      <S.Logo>
        <img src={logo} alt="Logo" />
      </S.Logo>
      <S.Form>
        <div>
          <S.NomeImg>
            <img src={bola2} />
            <h1>Dados do endereço</h1>
          </S.NomeImg>
          <S.Label>Digite seu CEP</S.Label>
          <S.Input type="text" placeholder="CEP" />
          <S.HelperLink href="#">Não sabe seu CEP?</S.HelperLink>
        </div>
        <div>
          <S.Label>Cidade</S.Label>
          <S.Input type="text" placeholder="Cidade" />
        </div>
        <div>
          <S.Label>Bairro</S.Label>
          <S.Input type="text" placeholder="Bairro" />
        </div>
        <div>
          <S.Label>Logradouro</S.Label>
          <S.Input type="text" placeholder="Logradouro" />
        </div>
        <S.ButtonGroup>
          <S.Button>Retornar</S.Button>
          <S.Button primary>Avançar</S.Button>
        </S.ButtonGroup>
        <S.IndicadorG>
          <S.Indicador />
          <S.Indicador active  />
          <S.Indicador />
        </S.IndicadorG>
      </S.Form>
    </S.Container>
  )
}

export default Dados
