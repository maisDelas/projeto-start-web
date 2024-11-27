import logo from "assets/Logo-nav.svg"
import {Container,IconUser,Button,Content,Logo,Link, ListLinks} from "./Navbar.styles"

function NavBar({ children }) {

  function scrollToService() { window.scrollTo({ top: 1650, behavior: "smooth" }) }
  function scrollToDepoiment() { window.scrollTo({ top: 2400, behavior: "smooth" }) }
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
             <IconUser /> Entrar   
            </Button>
          </ListLinks>
        )}
      </Content>
    </Container>
  )
}

export default NavBar
