// GlobalStyle.js
import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  

   * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    // font-family: "Poppins", Regular;
    color: rgb(36, 12, 12);
    background-image: url('src/pages/cadastroP/Imagem/Fundo_completo.svg');
    background-size: cover; 
    
    background-repeat: no-repeat; /
    background-position: center; 

    
  }

  .logo {
    display: block;
    margin: 0 auto; /* Centraliza horizontalmente */
    max-width: 200px; /* Define o tamanho máximo */
  }

 .nn2 {
    display: block;
    margin: 10px auto; /* Centraliza horizontalmente e adiciona espaço acima/abaixo */
    max-width: 200px; /* Define o tamanho máximo */
  }
 
`;

export default GlobalStyle;