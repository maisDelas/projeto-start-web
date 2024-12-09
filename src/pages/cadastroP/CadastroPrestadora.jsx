import React, { useState } from "react"
import { useNavigate } from "react-router-dom"
import GlobalStyle from "./globalstyle"
import NavCad from "./Header"
import Logo from "../../assets/Logobranca.svg"
import * as S from "./Cadastro.styles"
import { register } from "../../services/auth/auth"

function CadastroUnificado() {
  const [step, setStep] = useState(1) // Etapa atual
  const navigate = useNavigate()

  const [formData, setFormData] = useState({
    fullName: "",
    birthDate: "",
    cpfCnpj: "",
    email: "",
    phone: "",
    serviceDescription: "",
    experience: "",
    portfolioFiles: [],
    portfolioLink: "",
    password: "",
    confirmPassword: "",
  })

  const [errors, setErrors] = useState({})
  const [validations, setValidations] = useState({
    hasUppercase: false,
    hasLowercase: false,
    hasSpecialChar: false,
    hasNumber: false,
    hasMinLength: false,
    hasMaxLength: true,
  })

  const handleChange = (e) => {
    const { name, value, files } = e.target
    setFormData({
      ...formData,
      [name]: files ? files[0] : value,
    })

    if (name === "password") {
      setValidations({
        hasUppercase: /[A-Z]/.test(value),
        hasLowercase: /[a-z]/.test(value),
        hasSpecialChar: /[@, #, !, *, %, $]/.test(value),
        hasNumber: /\d/.test(value),
        hasMinLength: value.length >= 6,
        hasMaxLength: value.length <= 7,
      })
    }
  }

  const validateStep1 = () => {
    const newErrors = {}
    if (!formData.fullName.trim()) newErrors.fullName = "O nome é obrigatório"
    if (!formData.birthDate)
      newErrors.birthDate = "A data de nascimento é obrigatória"
    if (!formData.cpfCnpj.trim()) newErrors.cpfCnpj = "O CPF/CNPJ é obrigatório"
    if (!formData.phone.trim()) newErrors.phone = "O telefone é obrigatório"
    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const validateStep3 = () => {
    if (!formData.email.trim()) newErrors.email = "O email é obrigatório"
    const isValidPassword = Object.values(validations).every((v) => v)
    const passwordsMatch = formData.password === formData.confirmPassword
    if (!isValidPassword || !passwordsMatch) {
      alert("Verifique os requisitos de senha ou se as senhas coincidem!")
      return false
    }
    return true
  }

  const handleNext = () => {
    if (step === 1 && validateStep1()) setStep(3)
   // else if (step === 2 && validateStep2()) setStep(3)
    else if (step === 3 && validateStep3()) navigate("/CadastroFinalizado")
  }

  const handlePrev = () => {
    if (step > 1) setStep(step - 2)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (validateStep1) {
      register({
        name: formData.fullName,
        email: formData.email,
        documentNumer: formData.cpfCnpj,
        phone: formData.phone,
      })
    }
    if (validateStep3) {
      register({
        password: formData.password,
      })
    }
  }

  const renderStep = () => {
    if (step === 1) {
      return (
        <S.FormBox>
          <h1>1</h1>
          <h2>Dados pessoais</h2>
          <form onSubmit={handleSubmit}>
            <S.InputGroup>
              <label>Nome Completo*</label>
              <input
                type="text"
                name="fullName"
                value={formData.fullName}
                onChange={handleChange}
                placeholder="Nome Completo"
              />
              {errors.fullName && (
                <span className="error">{errors.fullName}</span>
              )}

              <label>Data de Nascimento*</label>
              <input
                type="date"
                name="birthDate"
                value={formData.birthDate}
                onChange={handleChange}
              />
              {errors.birthDate && (
                <span className="error">{errors.birthDate}</span>
              )}

              <label>CPF*</label>
              <input
                type="number"
                name="cpfCnpj"
                placeholder="CPF/CNPJ"
                value={formData.cpfCnpj}
                onChange={handleChange}
              />
              {errors.cpfCnpj && (
                <span className="error">{errors.cpfCnpj}</span>
              )}

             

              <label>Telefone*</label>
              <input
                type="number"
                name="phone"
                placeholder="Número de Telefone"
                value={formData.phone}
                onChange={handleChange}
              />
              {errors.phone && <span className="error">{errors.phone}</span>}

              <S.ButtonContainer type="submit" onClick={handleNext}>
                <S.StyledButton>Avançar</S.StyledButton>
              </S.ButtonContainer>
            </S.InputGroup>
          </form>
        </S.FormBox>
      )
    }

    if (step === 3) {
      return (
        <S.FormBox>
          <h1>3</h1>
          <h2>Dados de Login</h2>
          <S.InputGroup>
          <label>Email*</label>
              <input
                type="email"
                name="email"
                placeholder="E-mail"
                value={formData.email}
                onChange={handleChange}
              />
              {errors.email && <span className="error">{errors.email}</span>}
            <label>Senha*</label>
            <input
              type="password"
              name="password"
              placeholder="Senha"
              value={formData.password}
              onChange={handleChange}
            />
            <label>Confirmar Senha*</label>
            <input
              type="password"
              name="confirmPassword"
              placeholder="Confirmar senha"
              value={formData.confirmPassword}
              onChange={handleChange}
            />
            <S.ButtonGroup>
            <S.ButtonContainer type="button" onClick={handlePrev}>
              <S.StyledButton>Retornar</S.StyledButton>
            </S.ButtonContainer>
            <S.ButtonContainer type="button" onClick={handleNext}>
              <S.StyledButton>Avançar</S.StyledButton>
            </S.ButtonContainer>
            </S.ButtonGroup>
          </S.InputGroup>
        </S.FormBox>
      )
    }
  }

  return (
    <>
      <GlobalStyle />
      <NavCad />
      <S.FormContainer>
        <img src={Logo} alt="Logo" className="logo" />
        {renderStep()}
      </S.FormContainer>
    </>
  )
}

export default CadastroUnificado
