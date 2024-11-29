
import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  

   * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    
    color: rgb(36, 12, 12);
    background-image: url('src/pages/cadastroP/Imagem/Fundo_completo.svg');
    background-size: cover; 
    font-size: 18px;
    background-repeat: no-repeat; 
    background-position: center; 

    
  }

  .logo {
    display: block;
    margin: 0 auto; 
    max-width: 200px; 
  }

 .nn2 {
    display: block;
    margin: 10px auto; 
    max-width: 200px; 
  }

  .Icons {
   color: #E35D1C;
 
  }
::placeholder{
  font-size: 15px;
}
 
`;

export default GlobalStyle;