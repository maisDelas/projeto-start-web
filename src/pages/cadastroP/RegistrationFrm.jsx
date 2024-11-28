import React, { useState } from "react";
import {
  FormContainer,
  LogoContainer,
  FormBox,
  InputGroup,
  ButtonContainer,
  StyledButton,
  Swapper,
} from "./RegistrationFormStyles";
import Logo from "./Imagem/Logo branca 4.svg";
import Eu from "./Imagem/LogoNN1.svg";
import { Link } from "react-router-dom";
import NavCad from "./Header.jsx";
import GlobalStyle from "./GlobalStyle";



function CadastroPrestadora1() {
  const [formData, setFormData] = useState({
    fullName: "",
    birthDate: "",
    cpfCnpj: "",
    email: "",
    phone: "", // Novo campo para número de telefone
    rgFront: null,
    rgBack: null,
    selfieWithRg: null,
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleFileChange = (e) => {
    const { name, files } = e.target;
    setFormData({ ...formData, [name]: files[0] });
  };

  const validateForm = () => {
    const newErrors = {};

    if (!formData.fullName.trim()) {
      newErrors.fullName = "O nome deve ter no mínimo 3 caracteres";
    } else if (formData.fullName.length < 3) {
      newErrors.fullName = "O nome deve ter no mínimo 3 caracteres";
    }

    if (!formData.birthDate) newErrors.birthDate = "Este campo é obrigatório";
    if (!formData.cpfCnpj.trim()) newErrors.cpfCnpj = "Este campo é obrigatório";
    if (!formData.email.trim()) newErrors.email = "Este campo é obrigatório";
    if (!formData.phone.trim()) {
      newErrors.phone = "Este campo é obrigatório";
    } else if (!/^\d{10,11}$/.test(formData.phone)) {
      newErrors.phone = "Insira um número de telefone válido (10-11 dígitos)";
    }
    if (!formData.rgFront) newErrors.rgFront = "Este campo é obrigatório";
    if (!formData.rgBack) newErrors.rgBack = "Este campo é obrigatório";
    if (!formData.selfieWithRg) newErrors.selfieWithRg = "Este campo é obrigatório";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      console.log(formData);
      alert("Cadastro enviado com sucesso!");
    }
  };

  return (
    <>
    <NavCad/>
    <GlobalStyle/>

    <FormContainer>
      <LogoContainer>
        <img src={Logo} alt="Logo" className="logo" />
      </LogoContainer>
      <FormBox>
        <img src={Eu} alt="Avatar" />
        <h2>Dados Pessoais:</h2>
        <form onSubmit={handleSubmit}>
          <InputGroup>
            <label>Nome Completo*</label>
            <input
              type="text"
              name="fullName"
              value={formData.fullName}
              onChange={handleChange}
              placeholder="Nome Completo"
            />
            {errors.fullName && <span className="error">{errors.fullName}</span>}
          </InputGroup>

          <InputGroup>
            <label>Data de Nascimento*</label>
            <input
              type="date"
              name="birthDate"
              value={formData.birthDate}
              onChange={handleChange}
            />
            {errors.birthDate && <span className="error">{errors.birthDate}</span>}
          </InputGroup>

          <InputGroup>
            <label>CPF/CNPJ*</label>
            <input
              type="text"
              name="cpfCnpj"
              value={formData.cpfCnpj}
              onChange={handleChange}
              placeholder="CPF/CNPJ"
            />
            {errors.cpfCnpj && <span className="error">{errors.cpfCnpj}</span>}
          </InputGroup>

          <InputGroup>
            <label>E-mail*</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="E-mail"
            />
            {errors.email && <span className="error">{errors.email}</span>}
          </InputGroup>

          <InputGroup>
            <label>Telefone*</label>
            <input
              type="text"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              placeholder="Número de Telefone"
            />
            {errors.phone && <span className="error">{errors.phone}</span>}
          </InputGroup>
            <Link to='/CadastroPrestadora2'>
            
            <ButtonContainer>
            <StyledButton type="submit">Avançar</StyledButton>
          </ButtonContainer>
            </Link>
        

        </form>

        <Swapper>
          <span className="circle active"></span>
          <span className="circle"></span>
          <span className="circle"></span>
        </Swapper>
      </FormBox>
    </FormContainer>
    </>
  );
}

export default CadastroPrestadora1;
