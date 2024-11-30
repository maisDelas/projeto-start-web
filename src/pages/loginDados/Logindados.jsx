import React, { useState } from "react";
import { Container, Form, Input, Button, Validation, ButtonGroup } from "./LoginDadosstyles";

import Logo from "./Imagem/Logo branca 4.svg";

import Logo3 from './Imagem/N3.svg'

import NavCad from "pages/cadastroP/Header";


import GlobalStyle from "pages/cadastroP/globalstyle";

const LoginDados = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const validatePassword = (password) => {
    return {
      hasUppercase: /[A-Z]/.test(password),
      hasLowercase: /[a-z]/.test(password),
      hasSpecialChar: /[@*]/.test(password),
      hasNumber: /\d/.test(password),
      hasMinLength: password.length >= 6,
      hasMaxLength: password.length <= 7,
    };
  };

  const validations = validatePassword(password);

  const handleSubmit = () => {
    if (password === confirmPassword) {
      alert("Dados enviados com sucesso!");
    } else {
      alert("As senhas não coincidem!");
    }
  };

  return (

   <>
    <GlobalStyle/>

    <NavCad/>
   
    <img src={Logo} alt="Logo" className="logo" />
    <Container>
      <Form>
        <img src={Logo3} alt="" className="nn3" />
        <h2>Dados do Login</h2>
        <label>Email</label>
        <Input
          type="E-mail"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="E-mail"
        />
        <label>Senha</label>
        <Input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          pha
          placeholder=" Senha"
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
          ✔ Pelo menos 1 caractere especial (@, *)
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
