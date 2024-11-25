import React from 'react';
import logotipo_branca from '../assets/Logobranca.svg';
import {GlobalStyle,
BodyContainer, 
WhiteLogo, 
CardCenter, 
CardReset, 
Button} from './CadastroTipo.styles.js';
import NavBar from "../Components/navbar/Navbar" 

const CadastroTipo = () => {

 

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
              <Button type='button'>Cadastre-se como Usuário(a)</Button>
              <Button type='button'>Cadastre-se como Prestadora</Button>

          </CardReset>
        </CardCenter>
    </>
  );
}

export default  CadastroTipo;