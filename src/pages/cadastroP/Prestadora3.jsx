import { Container, Box, Title, Text, Button, Link } from "./Prestadora3styles";
import Logo_completo from './Imagem/Logo_sucesso.svg'
import GlobalStyle from './globalstyle'
import NavCad from './Header'
import { useNavigate } from "react-router-dom";


import Logo from "./Imagem/Logo branca 4.svg";

function CadastroPrestadora3() {
  const navigate = useNavigate(); 

  

  return (

  <>
  <GlobalStyle/>
  <NavCad/>

 <div className="header"> <img src={Logo} alt="" className="logo"/>
 </div>
  
  <Container>
      <Box>
        <Title>Cadastro finalizado com sucesso!</Title>

        <img src={Logo_completo } alt="" className="Logo_sucesso"/>
        
   
        <Text>
          Entre com a sua conta:{" "}
          <Link href="/login" style={{ display: "inline" }}>
            Login
          </Link>
        </Text>


        <Button onClick={()=> navigate('/')}>Voltar a tela inicial</Button>
      </Box>
    </Container>
  </>
  );
}

export default CadastroPrestadora3;
