import styled from 'styled-components';
import { createGlobalStyle } from 'styled-components';
import BackGroundIMG from "assets/BgOnda.png";


export const GlobalStyle = createGlobalStyle`  

    body { 
    background-image: url(${BackGroundIMG});
    background-position: center;
    background-repeat: no-repeat;
    background-size: 100vw;
    height: 500px;    
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
    color: #E35D1C; 
`;


export const InputForm = styled.input`
   margin-top: 20px;
   margin-bottom: 20px; 
   text-align: left; 

   .error {
    color: red;
    font-size: 12px;
    margin-top: 5px;
    display: block;
  }

`;

export const ErrorMsg = styled.span`
    color: red;
    font-family: "Poppins", sans-serif;
    font-size: 12.6px;
    margin-top: 20px;
    position: absolute;
    right: 85px;
  
`;

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

    margin-top: 80px;
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


export const ContainerNav = styled.p`
   margin-top: 20px; 
   color: #6C5F5F; 
`;

export const CadastroLink = styled.a`
    color:#D24400; 
    text-decoration: none;

     &:hover {
        color:#E35D1C; 
        text-decoration: underline; 
       }

`;

export const ErrorMessage = styled.span`
    color: red;

`;


export const ForgotPassword = styled.a`
    color:#D24400; 
    text-decoration: none;
    position: absolute;
    right: 90px;
    font-size: 14px;
    margin-top: 40px;

     &:hover {
        color:#E35D1C; 
        text-decoration: underline; 
       }
`;

export const Remember = styled.input`
    width: 15px;
    height: 15px;
    position: absolute;
    left: 85px;
    font-size: 14px;
    margin-top: 40px;
    cursor: pointer;


  
`;


export const RememberLabel = styled.span`
  font-size: 14px;
  color: #E35D1C;
  padding: 4px;
   position: absolute;
    left: 100px;
    margin-top: 37px;
`;
