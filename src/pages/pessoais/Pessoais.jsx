import * as S from "./PessoaisStyles"
import logo from "../../assets/Logobranca.svg"
import NavCad from "pages/cadastroP/Header"


function Pessoais() {
  return (
    <>
    <NavCad/>
     <S.Onda></S.Onda>
      <S.Container>
      <img src={logo} alt="Logo" />
      <S.Form>
      <S.NomeImg>
            <div className="circulo">
              <h2>1</h2>
            </div>
            <h3>Dados pessoais</h3>
          </S.NomeImg>
          <div className="formfield">
            <label htmlFor="nome">Nome Completo*</label>
            <input type="text" id="nome" placeholder="Digite seu nome aqui..." />
          </div>
          <S.inputs>
          <div>
            <label htmlFor="dataNascimento">Data de Nascimento*</label>
            <input type="date" id="dataNascimento" />
          </div>
          <div>
            <label htmlFor="cpf">CPF/CNPJ*</label>
            <input type="text" id="cpf" placeholder="CPF/CNPJ" />
          </div>
          </S.inputs>
          <div className="formfield">
            <label htmlFor="email">E-mail*</label>
            <input type="email" id="email" placeholder="Digite seu e-mail aqui..." />
          </div>
          <div className="formfield">
            <label htmlFor="telefone">Telefone*</label>
            <input type="tel" id="telefone" placeholder="(88) 88888-8888" />
          </div>
          <div className="buttonContainer">
          <S.Botao type="submit">Avançar</S.Botao>
          </div>
      </S.Form>
      </S.Container>
     
    </>
  )
}

export default Pessoais