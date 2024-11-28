
import styled from "styled-components";
import Logo from "./Imagem/Logomaroon.svg"

const HeaderContainer = styled.header`
  background-color: #f6e5d3;
`;

const Nav = styled.div`
  max-width: 1300px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 40px;
`;

const NavList = styled.ul`
  display: flex;
  gap: 40px;
`;

const NavItem = styled.li`
  list-style: none;

  a {
    text-decoration: none;
    color: #544e48;
    font-size: 18px;

   
  }
`;

const Picklist = styled.select`
  border: 0;
  background: #f6e5d3;
`;

const LogoImage = styled.img`
  max-width: 150px;
`;

function NavCad() {
  return (
    <HeaderContainer>
      <Nav>
        <LogoImage src={Logo} alt="Logo" />
        <nav>
          <NavList>
            <NavItem>
              <a href="/">Página inicial</a>
            </NavItem>
            <NavItem>
              <a href="#contact">Fale Conosco</a>
            </NavItem>
          
          </NavList>
        </nav>
      </Nav>
    </HeaderContainer>
  );
}

export default NavCad;