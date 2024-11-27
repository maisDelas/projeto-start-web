import * as S from "./Dados.styles"
import logo from "../../assets/Logobranca.svg"

function Dados() {
  return (
    <>
      <S.Onda></S.Onda>
      <S.Container>
          <img src={logo} alt="Logo" />
        <S.Form>
        
          <S.NomeImg>
            <div className="circulo">
              <h2>2</h2>
            </div>
            <h3>Dados do endereço</h3>
          </S.NomeImg>
          <div>
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
            <S.Indicador active />
            <S.Indicador />
          </S.IndicadorG>
        
        </S.Form>
      </S.Container>
    </>
  )
}

export default Dados
