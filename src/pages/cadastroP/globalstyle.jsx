
import { createGlobalStyle } from "styled-components";
import BackGroundIMG from "assets/BgOnda.png";

const GlobalStyle = createGlobalStyle`

body { 
    background-image: url(${BackGroundIMG});
    background-repeat: no-repeat;
    background-size: 100vw;
    height: 100vh;    
}

  .logo {
    display: block;
    margin: 0 auto; 
    max-width: 200px; 
  }

 

  .Icons {
   color: #F2913D;
   
 
  }
::placeholder{
  font-size: 15px;
}
 
   


`;

export default GlobalStyle;