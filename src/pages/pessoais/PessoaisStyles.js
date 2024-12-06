import styled from "styled-components";
import background from "../../assets/Onda.svg"


export const Container = styled.div`
   display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  min-height: 100vh; 
  flex-direction: column;
  margin-top: 60px;


  img {
  
  margin-bottom: 20px;
  height: auto;
  width: 13%;
  
  
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

export const NomeImg = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  align-items: center; 
  margin-top: 10px;
  margin-bottom: 30px;
  
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
  h3{ 
    color:#f15a24;
    
   }
  
  `;

export const Form = styled.form`
  display: flex;
  width: 580px; 
  height: 650px;
  border-radius: 10px;
  background-color: #ffff;
  flex-direction: column;
  align-items: center;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.2);
 
  #telefone {
   width: 40%;
}
  .buttonContainer {
    width: 80%;
    display: flex;
    align-items: end;
    justify-content: end;

  }
 

   .formfield { 
    margin:10px 0;
    width: 80%;
    margin-bottom: 8px;
    display: flex;
    flex-direction: column;
   
   }

   h3{ 
    color:#f15a24;
    
   }

   input {
    height: 35px;
    border: 1px solid #ddd;
    border-radius: 5px;
    padding: 0 10px;
    font-size: 14px;
    color: #aaa;
  
  }


  input::placeholder {
    color: #aaa;
  
  }

  label {
    font-size: 14px;
    color: #666;
    margin-bottom: 5px;
  }
`;

 export const inputs = styled.div`
 
    display: flex;
    justify-content: space-between;
    gap: 60px;
    width: 80%;
    

    div {
      display: flex;
      flex-direction: column;
    }

 `;

export const Botao = styled.button`
  width: 25%;
  height: 30px;
  border: none;
  border-radius: 5px;
  background-color: #f15a24;
  color: #fff;
  font-size: 16px;
  cursor: pointer;
  transition: background-color 0.3s;
  margin-top: 90px;


  &:hover {
    background-color: #e75109;
  }
`;


