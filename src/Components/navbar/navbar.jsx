import logo from "assets/Logo-nav.svg"
import {Container,IconUser,Button,Content,Logo,Link, ListLinks} from "./navbar.styles"

function NavBar({ children }) {

  function scrollToService() { window.scrollTo({ top: 2000, behavior: "smooth" }) }
  function scrollToDepoiment() { window.scrollTo({ top: 2900, behavior: "smooth" }) }
  return (
    <Container>
      <Content>
        <Logo src={logo} alt="Logo do site" />
        {children ? (
          <ListLinks>{children}</ListLinks>
        ) : (
          <ListLinks>
            <Link>
              <a href="#" onClick={scrollToService}>Serviços</a>
            </Link>
            <Link>
              <a href="#" onClick={scrollToDepoiment}>Depoimentos</a>
            </Link>
            <Link>
              <a href="#">Junte-se a +Delas</a>
            </Link>
            <Button>
             <IconUser /><a href="/Login">Entrar </a>   
            </Button>
          </ListLinks>
        )}
      </Content>
    </Container>
  )
}

export default NavBar
