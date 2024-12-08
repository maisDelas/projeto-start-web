import styled from 'styled-components';
import { createGlobalStyle } from 'styled-components';
import BackGroundIMG from "../../assets/BgOnda.png";


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
    margin-bottom: 25px;
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
    width: 550px;
    background-color: #ffffff;
    padding: 40px;
    border-radius: 8px;
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
    text-align: center;
    position: absolute;

    
    
`;

export const Button = styled.button`
    background-color: white;
    font-size: 27px;
    font-weight: bold;
    display: block;
    margin: 0 auto;
    flex-direction: column;

    margin-top: 18px;
    margin-bottom: 15px;
    width: 402px;
    height: 131px;
    border-radius: 10px;
    padding: 15px ;
    transition: background-color 0.3s;
    cursor: pointer;
    border: 2px solid rgba(169, 169, 169, 0.3);
    box-shadow: 0 4px 8px rgba(0,0,0,0.2);

    &:hover {
        background-color: #f0f0f0; 
    }

    a{
    color: #F2913D;
    }
`;