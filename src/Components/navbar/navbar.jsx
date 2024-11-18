import logo from '../../assets/Logo-nav.svg'
import { ButtonNav, NavContainer, IconUser } from './Navbar.styles';


function NavBar() {
    return (
      
      <NavContainer>
        <div>
            <img src={logo} alt="Lgo mais delas" />
                <ul>
                  <li><a href="#">Serviços</a></li>
                  <li><a href="#">Depoimentos</a></li>
                  <li><a href="#">Junte-se a +Delas</a></li>
                </ul>
                <ButtonNav>
                  <IconUser/>
                </ButtonNav>
        </div>
      </NavContainer>
    );
  }
  
  export default NavBar;
  