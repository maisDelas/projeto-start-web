import styled from 'styled-components';
import { createGlobalStyle } from 'styled-components';
import BackGroundIMG from "assets/BgOnda.png";


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

export const BodyContainer = styled.div`
     width: 100%;
  max-width: 500px;
  padding: 20px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
`;


export const WhiteLogo = styled.div`
    margin-bottom: 10px;
    display: flex;         
    justify-content: center;
`;


export const CardCenter = styled.div`
    position: absolute;
    margin-top: 200px;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;


export const CardReset = styled.div`
    width: 580px;
    background-color: #ffffff;
    padding: 40px;
    border-radius: 8px;
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
    text-align: center;
    position: absolute;
`;





export const HeaderTitle = styled.h1`
    text-align: center;
    font-weight: bold;
    font-size: 24.6px;
    margin-top: 15px;
    margin-bottom: 15px;
    color: #E35D1C; 
`;


export const InputContrato = styled.textarea`
  height: 80px;
  margin-top: 20px;
  width: 100%;
  padding: 10px;                
  color: #A59494;
  border: 1px solid #ddd;
  border-radius: 5px;
  outline: none;
  transition: border-color 0.3s ease;
  font-family: "Poppins", sans-serif;
  font-size: 15px;
    resize: none;           
      overflow-wrap: break-word;
  
  &::placeholder {
    font-family: "Poppins", sans-serif;
    color: #A59494;
    
  }
`;


export const InfoSubtitle = styled.h2`
    font-size: 15px;
    color: #E35D1C;
    font-family: "Poppins", sans-serif;
    margin-top: 15px;
    margin-bottom:15px;

`



export const Button = styled.button`
    background-color: #E35D1C;
    font-family: "Poppins", sans-serif;
    color: white;
    white-space: nowrap;
    font-size: 16px;
    font-weight: 500;
    display: inline-flex;
    justify-content: center;
    align-items: center;

    margin-top: 30px;
    width: 150px;
    height: 35px;
    border-radius: 10px;
    padding: 15px ;
    transition: background-color 0.3s;
    cursor: pointer;
    border: none;
    box-shadow: 0 4px 8px rgba(0,0,0,0.2);

    &:hover {
        background-color: #FF7431; 
    }
`;


