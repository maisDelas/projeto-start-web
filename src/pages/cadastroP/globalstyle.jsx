
import { createGlobalStyle } from "styled-components";
import BackGroundIMG from "assets/BgOnda.png";

const GlobalStyle = createGlobalStyle`

body { 
    background-image: url(${BackGroundIMG});
    background-position: center;
    background-repeat: no-repeat;
    background-size: 100vw;
    height: 500px;    
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
 
   .nn3 {
    display: block;
    margin: 10px auto; /* Centraliza horizontalmente e adiciona espaço acima/abaixo */
    max-width: 200px; /* Define o tamanho máximo */
  }


`;

export default GlobalStyle;