import React, { useState } from "react";
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
import GlobalStyle from "./GlobalStyle";
import Logo from "./Imagem/Logo branca 4.svg";
import NN2 from "pages/cadastroP/Imagem/NN2.svg";
import NavCad from "./Header.jsx";

function CadastroPrestadora2() {
  const navigate = useNavigate();

  
  const [formData, setFormData] = useState({
    serviceDescription: "",
    experience: "",
    portfolioFiles: [],
    portfolioLink: "",
  });
  const [errors, setErrors] = useState({});

  
  const handleChange = (e) => {
    const { id, value, files } = e.target;
    if (files) {
      setFormData({ ...formData, portfolioFiles: files });
    } else {
      setFormData({ ...formData, [id]: value });
    }
  };

 
  const validateForm = () => {
    const newErrors = {};

    if (!formData.serviceDescription.trim()) {
      newErrors.serviceDescription = "Este campo é obrigatório";
    }

    if (!formData.experience.trim()) {
      newErrors.experience = "Este campo é obrigatório";
    }

    if (formData.portfolioFiles.length === 0 && !formData.portfolioLink.trim()) {
      newErrors.portfolio = "Adicione um arquivo ou link para o portfólio";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };
 


  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      console.log(formData); 
      navigate("/CadastroPrestadora3"); 
    }
  };

  return (
    <>
      <GlobalStyle />
      <NavCad />
      <img src={Logo} alt="Logo" className="logo" />

      <Container>
        <img src={NN2} alt="NN2" className="nn2" />
        <Title>Dados de Serviço</Title>

        <form onSubmit={handleSubmit}>
          <Section>
            <label htmlFor="serviceDescription">Descrição de Serviço*</label>
            <TextArea
              id="serviceDescription"
              placeholder="Descreva aqui..."
              maxLength={200}
              value={formData.serviceDescription}
              onChange={handleChange}
            />
            <span>0/200</span>
            {errors.serviceDescription && (
              <span className="error">{errors.serviceDescription}</span>
            )}
          </Section>

          <Section>
            <label htmlFor="experience">Experiência Profissional*</label>
            <TextArea
              id="experience"
              placeholder="Descreva sua experiência..."
              maxLength={200}
              value={formData.experience}
              onChange={handleChange}
            />
            <span>0/200</span>
            {errors.experience && (
              <span className="error">{errors.experience}</span>
            )}
          </Section>

          {/* <Section>
            <label htmlFor="portfolio">
              Portfólio e Exemplos de Trabalho (foto ou link)*
            </label>
            <input
              id="portfolioFiles"
              type="file"
              accept="image/*"
              onChange={handleChange}
              multiple
            />
            <TextArea
              id="portfolioLink"
              placeholder="Adicione links para seu portfólio"
              maxLength={200}
              value={formData.portfolioLink}
              onChange={handleChange}
            />
            <span>0/200</span>
            {errors.portfolio && (
              <span className="error">{errors.portfolio}</span>
            )}
          </Section> */}

          <ButtonGroup>
            <Button
              type="button"
              variant="retornar"
              onClick={() => navigate("/CadastroPrestadora1")}
            >
              Retornar
            </Button>
            <Button type="submit"
            
            ariant="avancar"
            >
              Avançar</Button>
          </ButtonGroup>
        </form>

        <Swapper>
          <span className="circle"></span>
          <span className="circle active"></span>
          <span className="circle"></span>
        </Swapper>
      </Container>
    </>
  );
}

export default CadastroPrestadora2;
