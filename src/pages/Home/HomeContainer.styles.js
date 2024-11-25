import styled from 'styled-components';
import BackGroundIMG from 'assets/backgroundOnda.svg';
import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
     * { margin: 0;
      padding: 0;
      box-sizing: border-box;
}   

    body { 
    font-family: "Poppins", sans-serif;
    background-image: url(${BackGroundIMG});
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
}

`;

export const HomeCont = styled.div`
    width: 100%;
  max-width: 500px;
  padding: 20px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const WhiteLogotipo = styled.div`
    margin-bottom: 30px;
    display: flex;         
    justify-content: center;
`;

export const Title = styled.h1`
    font-family: "Poppins", sans-serif;
    font-weight: 500;
    font-size: 40px;
    color: white;
    margin-top: 20px; 
    text-align: center; 
`;

export const Subtitle = styled.h3`
    font-weight: 700;
    color: white;
    font-size: 20px;
    margin-top: 10px;
    display: flex;
    flex-direction: column;
    text-align: center;
`;

export const HomeImages = styled.div`
    position: absolute;
    margin-top: 300px;
    width: 100%;
    display: flex;
    justify-content: center;
`;



export const ImageMulheres = styled.img`
  width: 100%;
  height: auto;
  object-fit: contain;
  max-width: 100%;
`;