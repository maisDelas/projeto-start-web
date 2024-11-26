import React from "react";
import {
  Container,
  Title,
  Subtitle,
  Paragraph,
  List,
  StyledButton,LogoContainer
} from "pages/cadastroP/Prestadoraa.styles.js";
import Logo1 from "./Imagem/LogoNN1.svg"
import Logo2 from './Imagem/NN2.svg'


import { TfiBag } from "react-icons/tfi";

import EU from './Header'
import GlobalStyle from './globalstyle'
import { IoDocumentTextOutline } from "react-icons/io5";


import Logo from "./Imagem/Logo branca 4.svg";

function CadastroPrestadora0() {


  return (
<>
<EU/>
<GlobalStyle />




<img src={Logo} alt="Logo" className="logo" /> 


   


<Container>
  
      <Paragraph>
        Para realizar seu cadastro como prestadora de serviços, é necessário ter alguns documentos e informações à mão. Isso ajudará a agilizar o processo e garantir que seu cadastro seja 
        completo.
        {/* <Title>Do que você precisará:</Title> */}
      </Paragraph>
     
      <Title>Do que você precisará:</Title>

       
      <List>
        <Subtitle>
          <img src={Logo1} alt="Logo"  />
          <IoDocumentTextOutline className="Icons" />  Documentos pessoais:
        </Subtitle>
        
        <li>Dados Pessoais;</li>
        <li>CPF ou CNPJ;</li>
        <li>E-mail e Telefone.</li>
      
      </List>

      <List>
        <Subtitle>
          <img src={Logo2}  />
          <TfiBag className="Icons"/> Dados de serviço:
        </Subtitle>
          
        <li>Descrição de Serviço;</li>
        <li>Experiência;</li>
        <li>Portfólio e Exemplos de Trabalho (foto ou link).</li>
        
      </List>

      <StyledButton>Iniciar Cadastro</StyledButton>
    </Container>
</>
  );
}

export default CadastroPrestadora0;
