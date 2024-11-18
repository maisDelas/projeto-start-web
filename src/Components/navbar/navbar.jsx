import logo from '../../assets/Logo-nav.svg'
import { ButtonNav, NavContainer } from './Navbar.styles';


function NavBar() {
    return (
      
      <NavContainer>
        <div>
          <LogoDelas src={logo} alt='Logo mais delas'/>
            <ContainerLinks>
              <Links>
                <ul>
                  <li><a href="#">Serviços</a></li>
                  <li><a href="#">Depoimentos</a></li>
                  <li><a href="#">Junte-se a +Delas</a></li>
                </ul>
              </Links>
              <ButtonNav>
                <IconUser/>
              </ButtonNav>
            </ContainerLinks>
        </div>
      </NavContainer>
    );
  }
  
  export default NavBar;
  