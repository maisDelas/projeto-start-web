import React from 'react';
import logotipo_branca from '../../assets/Logobranca.svg';
import {GlobalStyle,
BodyContainer, 
WhiteLogo, 
CardCenter, 
CardReset, 
Button} from './CadastroTipo.styles.js';
import NavCad from '../cadastroP/Header'; 
 

const CadastroTipo = () => {

 

  return (
    <>
    <NavCad/>
      <GlobalStyle/>
        <BodyContainer />
        <WhiteLogo>
          <img src={logotipo_branca} alt='Logotipo +delas' />
        </WhiteLogo>
        <CardCenter>
          <CardReset>
              <Button type='button' > <a href="/DadosPessoais">Cadastre-se como Usuário(a)</a></Button>
              <Button type='button'> <a href="/CadastroPrestadora0">Cadastre-se como Prestadora</a></Button>
          </CardReset>
        </CardCenter>
    </>
  );
}

export default  CadastroTipo;