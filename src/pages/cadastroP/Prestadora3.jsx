import React from "react";
import { Container, Box, Title, Text, Button, Link } from "./Prestadora3styles";
import Logo_completo from './Imagem/Logo_sucesso.svg'
import GlobalStyle from './globalstyle'
import EU from './Header'


import Logo from "./Imagem/Logo branca 4.svg";

function CadastroPrestadora3() {
  const handleContinue = () => {
    alert("Continuando para a próxima etapa!");
  
  };

  return (

  <>
  <GlobalStyle/>
  <EU/>

 <div className="header"> <img src={Logo} alt="" className="logo"/>
 </div>
  
  <Container>
      <Box>
        <Title>Cadastro finalizado com sucesso!</Title>

        <img src={Logo_completo } alt="" className="Logo_sucesso"/>
        
   
        <Text>
          Já tem uma conta?{" "}
          <Link href="/login" style={{ display: "inline" }}>
            Login
          </Link>
        </Text>


        <Button onClick={handleContinue}>Voltar a tela inicial</Button>
      </Box>
    </Container>
  </>
  );
}

export default CadastroPrestadora3;
