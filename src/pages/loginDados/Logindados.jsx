import React, { useState } from "react";
import { 
  Container, 
  Form, 
  Input, 
  Button, 
  Validation, 
  ButtonGroup 
} from "./LoginDadosstyles";

import Logo from "../../assets/Logobranca.svg"
import NavCad from "../cadastroP/Header";
import GlobalStyle from "../cadastroP/globalstyle";

const LoginDados = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [validations, setValidations] = useState({
    hasUppercase: false,
    hasLowercase: false,
    hasSpecialChar: false,
    hasNumber: false,
    hasMinLength: false,
    hasMaxLength: true,
  });

  const handlePasswordChange = (e) => {
    const value = e.target.value;
    setPassword(value);

   
    setValidations({
      hasUppercase: /[A-Z]/.test(value),
      hasLowercase: /[a-z]/.test(value),
      hasSpecialChar: /[@, #, !, *, %, $]/.test(value),
      hasNumber: /\d/.test(value),
      hasMinLength: value.length >= 6,
      hasMaxLength: value.length <= 7,
    });
  };

  const handleSubmit = () => {
    if (Object.values(validations).every((v) => v) && password === confirmPassword) {
      alert("Dados enviados com sucesso!");
    } else {
      alert("Verifique os requisitos de senha ou se as senhas coincidem!");
    }
  };

  return (
    <>
      <GlobalStyle />
      <NavCad />
      <img src={Logo} alt="Logo" className="logo" />
      <Container>
        <Form>
          <h1>3</h1>
          <h2>Dados do Login</h2>
          <label>Email</label>
          <Input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="E-mail"
          />
          <label>Senha</label>
          <Input
            type="password"
            value={password}
            onChange={handlePasswordChange}
            placeholder="Senha"
          />
          <label>Confirmar Senha</label>
          <Input
            type="password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            placeholder="Confirmar Senha"
          />
          
       
          <Validation valid={validations.hasUppercase}>
            ✔ Pelo menos 1 caractere maiúsculo
          </Validation>
          <Validation valid={validations.hasLowercase}>
            ✔ Pelo menos 1 caractere minúsculo
          </Validation>
          <Validation valid={validations.hasSpecialChar}>
            ✔ Pelo menos 1 caractere especial (@, #, !, *, %, $)
          </Validation>
          <Validation valid={validations.hasNumber}>
            ✔ Pelo menos 1 número
          </Validation>
          <Validation valid={validations.hasMinLength}>
            ✔ Pelo menos 6 caracteres
          </Validation>
          <Validation valid={validations.hasMaxLength}>
            ✔ No máximo 7 caracteres
          </Validation>

         
          <ButtonGroup>
            <Button
              type="button"
              onClick={() => alert("Retornar ao início")}
              className="secondary"
            >
              Retornar
            </Button>
            <Button
              type="button"
              onClick={handleSubmit}
              disabled={
                !(
                  Object.values(validations).every((v) => v) &&
                  password === confirmPassword
                )
              }
            >
              Finalizar
            </Button>
          </ButtonGroup>
        </Form>
      </Container>
    </>
  );
};

export default LoginDados;