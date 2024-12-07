import React, { useState, useEffect } from 'react';
import logotipo_branca from 'assets/LogoBranca.svg'
import {
  GlobalStyle,
  BodyContainer,
  WhiteLogo,
  CardCenter,
  CardReset,
  HeaderTitle,
  InfoSubtitle,
  Button,
  InputContrato
} from './Contratar.styles.js';

const Contratar = () => {
  const [descricao, setDescricao] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault(); // Impede o envio padrão do formulário
    alert('Enviado com sucesso! ' + descricao);
  };

  // Função para lidar com a mudança no valor do input
  const handleChange = (event) => {
    setDescricao(event.target.value);
  };

  // Função para impedir o envio ao pressionar "Enter"
  const handleKeyDown = (event) => {
    if (event.key === 'Enter') {
      event.preventDefault();  // Impede que o formulário seja enviado ao pressionar Enter
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
          <HeaderTitle>Detalhes do pedido</HeaderTitle>
          <InfoSubtitle>As informações abaixo serão enviadas diretamente para a prestadora. Por favor, seja mais detalhista na descrição para facilitar este processo!</InfoSubtitle>
          <InfoSubtitle>A equipe do Mais Delas agradece a sua confiança e apoio na nossa plataforma.</InfoSubtitle>
          <form onSubmit={handleSubmit}>
      <InputContrato
            id="descricao"
            value={descricao}         // O valor do textarea é controlado pelo estado
            onChange={handleChange} 
            onKeyDown={handleKeyDown} 
            placeholder="Digite sua descrição aqui..."
      />

            <Button type="submit">Enviar</Button>
          </form>

        </CardReset>
      </CardCenter>
    </>
  );
}

export default Contratar;