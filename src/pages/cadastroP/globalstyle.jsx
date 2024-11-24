// GlobalStyle.js
import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  // * {
  //   margin: 0;
  //   padding: 0;
  //   box-sizing: border-box;
  // }

 
  // body {
  //   font-family: "Poppins", sans-serif;
  //   color: rgb(36, 12, 12);
  //   background-image: url('src/Imagem/Fundo_completo.svg');
  //   background-size: cover; /* Faz com que a imagem cubra toda a área */
  //   background-repeat: no-repeat; /* Evita repetição */
  //   background-position: center; /* Centraliza a imagem */
  // }

   * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    font-family: "Poppins", sans-serif;
    color: rgb(36, 12, 12);
    background-image: url('src/Imagem/Fundo_completo.svg');
    background-size: cover; /* Faz com que a imagem cubra toda a área */
    background-repeat: no-repeat; /* Evita repetição */
    background-position: center; /* Centraliza a imagem */

    
  }

  .logo {
    display: block;
    margin: 0 auto; /* Centraliza horizontalmente */
    max-width: 200px; /* Define o tamanho máximo */
  }


  button {
    cursor: pointer;
    transition: 0.3s ease;
  }
`;

export default GlobalStyle;