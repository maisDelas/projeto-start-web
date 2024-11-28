import styled from "styled-components";
import background from "../../assets/Onda.svg"

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  min-height: 100vh; 
  flex-direction: column;

  
  img { 
  width: 250px;
  margin-top: 5%;
  margin-bottom: 4%;

  }

  
  
`;

export const Onda = styled.div`
  width: 100%;
  z-index: -1;
  background-image: url(${background});
  height: 100vh;
  position: absolute;
  background-size: contain;
  background-repeat: no-repeat;


`;

export const Logo = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;  

  

`;

export const NomeImg = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  align-items: center;
  


  .circulo { 
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 50px;
    background-color:#E75109;
    margin-bottom: 20px;
    border-radius: 100%;
    max-width: 50px;
   
  }

`;


export const Form = styled.form`
  width: 570px; 
  border-radius: 10px;
  background-color: #ffff;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
  position: relative;
  top: -50px;
  
 
 

   div { 
    margin:10px 0;
    width: 80%;
   
   }

   h3{ 
    color:#f15a24;
    
   }
`;


export const Label = styled.label`
  text-align: left;
  color: #706D6D;
  display: block;
  margin-bottom: 5px;
`;

export const Input = styled.input`

  display: block;
  padding: 10px;
  font-size: 16px;
  border: 1px solid #ddd;
  border-radius: 5px;
  width: 100%;
`;

export const HelperLink = styled.a`
  
  color: #f15a24;
  font-size: 12px;
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
`;

export const ButtonGroup = styled.div`
  display: flex;
  justify-content: space-between;

 
 
`;




export const Button = styled.button`
  width: 20%;
  padding: 7px;
  font-size: 16px;
  border: none;
  border-radius: 10px;
  cursor: pointer;
  background-color:${(props) => (props.primary ? "#f15a24" : "#f5a623")};; 
  color: #fff;
  margin-bottom: 20px;

    

`;
export const IndicadorG = styled.div`
  
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  
  

  div:nth-child(2) {
    margin: 0 7px;
    

  }

 
`;

export const Indicador = styled.div `
  max-width: 10px;
  width: 100%;
  height: 10px;
  border-radius: 100%; 
  background-color: ${(props) => (props.active ? "#f15a24" : "#ddd")}; 
  transition: background-color 0.3s ease;
  
  &:hover {
    background-color: #f5a623; 
  }
`;

