import { Container, Box, Title, Text, Link } from "./Prestadora3styles";
import confirm from 'assets/Imgconfirm.svg'
import GlobalStyle from "./globalstyle"; 
import NavCad from './Header' 
import { useNavigate } from "react-router-dom";
import Logo from "assets/Logobranca.svg";

function CadastroPrestadora3() { 
  const navigate = useNavigate();



  return (

    <>
      <GlobalStyle />
      <NavCad />
      <Container>
        <div className="header"> <img src={Logo} alt="" className="logo" />
      </div>
          <Box>
          <Title>Cadastro finalizado com sucesso!</Title>

          <img src={confirm} alt="" className="image_confirm" />


          <Text>
            Entre com a sua conta:{" "}
            <Link href="/login" style={{ display: "inline" }}>
              Login
            </Link>
          </Text>
          </Box>
        
      </Container>
    </>
  );
}

export default CadastroPrestadora3;
