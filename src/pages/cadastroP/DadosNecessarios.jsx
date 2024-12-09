
import {
  Container,
  Box,
  Title,
  Subtitle,
  Paragraph,
  List,
  StyledButton,
} from "./Necessarios.styles";

import { TfiBag } from "react-icons/tfi";
import NavCad from "./Header"; 
import GlobalStyle from "./globalstyle";
import { IoDocumentTextOutline } from "react-icons/io5";
import Logo from "../../assets/Logobranca.svg";
import { Link } from "react-router-dom";

function CadastroPrestadora0() {
  return (
    <>
      <NavCad />
      <GlobalStyle />
      <Container>
      <img src={Logo} alt="Logo" className="logo" />

      <Box>
        
        <Paragraph>
          Para realizar seu cadastro como prestadora de serviços, é necessário
          ter alguns documentos e informações à mão. Isso ajudará a agilizar o
          processo e garantir que seu cadastro seja completo.
        </Paragraph>

        <Title>Do que você precisará:</Title>

        <List>
          <Subtitle>
            <h1>1</h1>
            <IoDocumentTextOutline className="Icons" /> Documentos pessoais:
          </Subtitle>

          <li>Dados Pessoais;</li>
          <li>CPF ou CNPJ;</li>
          <li>E-mail e Telefone.</li>
        </List>

        <List>
          <Subtitle>
            <h1>2</h1>
            <TfiBag className="Icons" /> Dados de serviço:
          </Subtitle>

          <li>Descrição de Serviço;</li>
          <li>Experiência;</li>  
        </List>

        {/* Link para a próxima página */}
        <Link to="/CadastroUnificado">
          <StyledButton>Iniciar Cadastro</StyledButton>
        </Link>
      </Box>
      </Container>
    </>
  );
}

export default CadastroPrestadora0;
