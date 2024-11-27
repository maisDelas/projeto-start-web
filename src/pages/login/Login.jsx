import React, { useState, useEffect } from 'react';
import InputForm from '../Components/InputForm/InputForm.jsx';
import logotipo_branca from '../assets/Logotipo_branca.svg';
import {
  GlobalStyle,
  BodyContainer,
  WhiteLogo,
  CardCenter,
  CardReset,
  HeaderTitle,
  ErrorMsg,
  Button,
  Remember,
  RememberLabel,
  ForgotPassword,
  CadastroLink,
  ContainerNav
} from './Login.styles.js';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');

  useEffect(() => {
    const storedEmail = localStorage.getItem('email');
    const storedPassword = localStorage.getItem('password');
    if (storedEmail && storedPassword) {
      setEmail(storedEmail);
      setPassword(storedPassword);
      setRememberMe(true);
    }
  }, []);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    if (type === 'checkbox') {
      setRememberMe(checked);
    } else {
      if (name === 'email') {
        setEmail(value);
      } else if (name === 'password') {
        setPassword(value);
      }
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    let valid = true;

    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;


    if (!email.trim()) {
      setEmailError('O e-mail não pode estar vazio.');
      valid = false;
    }
 
    else if (!emailRegex.test(email)) {
      setEmailError('E-mail inválido! Tente novamente.');
      valid = false;
    } else {
      setEmailError(''); 
    }

    if (password.length < 6) {
      setPasswordError('A senha deve ter pelo menos 6 caracteres.');
      valid = false;
    } else {
      setPasswordError('');
    }

    if (valid) {
      if (rememberMe) {
        localStorage.setItem('email', email);
        localStorage.setItem('password', password);
      } else {
        localStorage.removeItem('email');
        localStorage.removeItem('password');
      }

      console.log('Login bem-sucedido', { email, password });

      setEmailError('');
      setPasswordError('');
    }
  };

  return (
    <>
      <GlobalStyle />
      <BodyContainer />
      <WhiteLogo>
        <img src={logotipo_branca} alt='Logotipo +delas' />
      </WhiteLogo>
      <CardCenter>
        <CardReset>
          <HeaderTitle>Entre com a sua conta</HeaderTitle>
          <form onSubmit={handleSubmit}>

            <InputForm
              htmlFor="email"
              textValue="E-mail"
              name="email"
              id="email"
              placeholder="Digite seu e-mail"
              value={email}
              onChange={handleChange}
              style={{
                borderColor: emailError ? 'red' : '',
                borderWidth: emailError ? '2px' : '1px',
              }}
            />
            {emailError && <ErrorMsg>{emailError}</ErrorMsg>}


            <InputForm
              htmlFor="password"
              textValue="Senha"
              type="password"
              name="password"
              id="password"
              placeholder="Digite sua senha"
              value={password}
              onChange={handleChange}
              style={{
                borderColor: passwordError ? 'red' : '',
                borderWidth: passwordError ? '2px' : '1px',
              }}
            />
            {passwordError && <ErrorMsg>{passwordError}</ErrorMsg>}


            <div>
              <Remember
                type="checkbox"
                name="rememberMe"
                checked={rememberMe}
                onChange={handleChange}
              />
              <RememberLabel>Lembrar de mim</RememberLabel>
            </div>
              
            <ForgotPassword href="#">Esqueceu sua senha?</ForgotPassword>
            <Button type="submit">Entrar</Button>
          </form>

          <ContainerNav>
            Ainda não tem uma conta?
            <CadastroLink href="#"><p>Cadastre-se</p></CadastroLink>
          </ContainerNav>
        </CardReset>
      </CardCenter>
    </>
  );
}

export default Login;