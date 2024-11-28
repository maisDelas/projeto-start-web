import React from "react";
import {
  Container,
  Title,
  Section,
  TextArea,
  ButtonGroup,
  Button,
  Swapper,
} from "./StyledComponents";
import { useNavigate } from "react-router-dom";
import EU from "./Header.jsx";
import GlobalStyle from "./GlobalStyle";
import Logo from "./Imagem/Logo branca 4.svg";
import NN2 from "pages/cadastroP/Imagem/NN2.svg";

function CadastroPrestadora2() {
  const navigate = useNavigate();

  return (
    <>
      <GlobalStyle />
      <EU />
      <img src={Logo} alt="Logo" className="logo" />

      <Container>
        <img src={NN2} alt="NN2" className="nn2" />
        <Title>Dados de Serviço</Title>

        <Section>
          <label htmlFor="serviceDescription">Descrição de Serviço*</label>
          <TextArea
            id="serviceDescription"
            placeholder="Descreva aqui..."
            maxLength={200}
          />
          <span>0/200</span>
        </Section>

        <Section>
          <label htmlFor="experience">Experiência Profissional</label>
          <TextArea
            id="experience"
            placeholder="Descreva sua experiência..."
            maxLength={200}
          />
          <span>0/200</span>
        </Section>

        <Section>
          <label htmlFor="portfolio">
            Portfólio e Exemplos de Trabalho (foto ou link)
          </label>
          <input
            id="portfolioFile"
            type="file"
            accept="image/*"
            multiple
            placeholder="Adicione arquivos de imagem"
          />
          <TextArea
            id="portfolioLink"
            placeholder="Adicione links para seu portfólio"
            maxLength={200}
          />
          <span>0/200</span>
        </Section>

        <ButtonGroup>
          <Button type="button" onClick={() => navigate("/CadastroPrestadora1")}>
            Retornar
          </Button>
          <Button
            type="button"
            primary
            onClick={() => navigate("/CadastroPrestadora3")}
          >
            Avançar
          </Button>
        </ButtonGroup>

        <Swapper>
          <span className="circle"></span>
          <span className="circle active"></span>
        </Swapper>
      </Container>
    </>
  );
}

export default CadastroPrestadora2;