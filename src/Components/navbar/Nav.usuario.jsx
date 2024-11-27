import logo from "assets/Logo-nav.svg"
import * as S from './Nav.usuario.styles'


function NavU () {
  return(
    <S.NavContainer>
      <S.NavContent>
        <S.NavLogo src={logo}/>
        <S.ListLinks>
          <S.Link>
            <a href="/">Pagina Inicial</a>
          </S.Link>
          <S.Link>
            <a href="#">Fale Conosco</a>
          </S.Link>
          <S.User>
            <S.Usericon>U</S.Usericon>
            
             <S.UserName>
              <p>Fulano123</p>
              <S.Arrow/>
             </S.UserName>
            
          </S.User>
        </S.ListLinks>
      </S.NavContent>
    </S.NavContainer>
  )
}

export default NavU;