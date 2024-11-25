import React, {useState} from 'react';
import InputForm from 'Components/inputForm/InputForm';
import logotipo_branca from 'assets/Logobranca.svg';
import {GlobalStyle,
BodyContainer, 
WhiteLogo, 
CardCenter, 
CardReset, 
HeaderTitle, 
Description, 
ErrorMsg,
Button, 
BackLoginLink, ContainerNav} from './ResetPassword.styles.js';
import NavBar from "Components/navbar/navbar.jsx" 

const ResetPassword = () => {

  const [email, setEmail] = useState('');
    const [error, setError] = useState('');
  
    const handleChange = (event) => {
      setEmail(event.target.value);
    };
  
    const handleSubmit = (event) => {
      event.preventDefault();
  
      if (!email.trim()) {
        setError('Preencha este campo')
        return;
      }
  
      const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
      if (!emailRegex.test(email)) {
        setError('Por favor, insira um e-mail válido');
        return;
      }
  
      console.log('E-mail enviado:', email);
      setError(''); 
      alert('Link para redefinir a senha enviado com sucesso!');
    };

  return (
    <>
    <NavBar/>
      <GlobalStyle/>
        <BodyContainer />
        <WhiteLogo>
          <img src={logotipo_branca} alt='Logotipo +delas' />
        </WhiteLogo>
        <CardCenter>
          <CardReset>
            <HeaderTitle>
              Redefinir Senha
              <Description>Após inserir seu endereço de 
                e-mail você receberá um link para criar
                uma nova senha. Certifique-se de verificar
                sua caixa de entrada (ou na pasta de spam, caso não encontre).
              </Description>
            </HeaderTitle>
            <form onSubmit={handleSubmit}>
              <InputForm
                name="email"
                id="email"
                placeholder="Digite seu e-mail"
                value={email} 
                onChange={handleChange}
                style={{
                  borderColor: error ? 'red' : '',
                  borderWidth: error ? '2px' : '2px', 
                }}
              />
               {error && <ErrorMsg>{error}</ErrorMsg>}
              <Button type='submit'>Receber link</Button>
            </form>

            <ContainerNav>
              Redefinição feita? <BackLoginLink href="">Login</BackLoginLink>
            </ContainerNav>
          </CardReset>
        </CardCenter>
    </>
  );
}

export default ResetPassword;