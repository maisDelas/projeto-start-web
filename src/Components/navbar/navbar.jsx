import logo from "../../assets/Logomarron.svg"
import {Container,IconUser,Button,Content,Logo,Link, ListLinks} from "./navbar.styles"

function NavBar({ children }) {

  function scrollToService() { window.scrollTo({ top: 2150, behavior: "smooth" }) }
  function scrollToDepoiment() { window.scrollTo({ top: 3000, behavior: "smooth" }) }
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
              <a href="/CadastroPrestadora0">Junte-se a +Delas</a>
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
