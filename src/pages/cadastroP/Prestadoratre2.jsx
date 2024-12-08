import React, { useState } from "react";
import {
  Container,
  Section,
  TextArea,
  ButtonGroup,
  Button,
  Swapper,
  Box,
} from "./styledcomponents";  
import { useNavigate } from "react-router-dom";
import GlobalStyle from "./globalstyle";
import Logo from "../../assets/Logobranca.svg";
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
      <Box>
        <img src={Logo} alt="Logo" className="logo" />

        <Container>
          <h1>2</h1>
          <h2>Dados de Serviço</h2>

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

            <ButtonGroup>
              <Button
                type="button"
                className="retornar"
                onClick={() => navigate("/CadastroPrestadora1")}
              >
                Retornar
              </Button>
              <Button
                type="submit"
                className="avancar"
                onClick={() => navigate('/CadastroPrestadora3')}
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
      </Box>
    </>
  );
}

export default CadastroPrestadora2;
