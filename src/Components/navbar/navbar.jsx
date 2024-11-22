import logo from "assets/Logo-nav.svg"
import {Container,IconUser,Button,Content,Logo,Link, ListLinks} from "./Navbar.styles"

function NavBar({ children }) {
  return (
    <Container>
      <Content>
        <Logo src={logo} alt="Logo do site" />
        {children ? (
          <ListLinks>{children}</ListLinks>
        ) : (
          <ListLinks>
            <Link>
              <a href="#">Serviços</a>
            </Link>
            <Link>
              <a href="#">Depoimentos</a>
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
