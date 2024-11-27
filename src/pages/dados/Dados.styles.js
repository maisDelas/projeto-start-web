import styled from "styled-components";


export const Container = styled.div`
  position: relative; 
  width: 100%;
  height: 100vh; 
  overflow: hidden; 
`;


export const Onda = styled.img`
  position: absolute; 
  width: 100%;
  height: 100%; 
  object-fit: cover; 
  z-index: -1;
 
`;


export const Logo = styled.div`
  display: flex;
  justify-content: center;
  position: absolute;
  top: 10px; 
  left: 50%;
  transform: translateX(-50%); 
  width: 30%; 
`;
export const NomeImg = styled.div`
  display: block;
  margin-bottom: 40px;
  margin-left: 70px;

  img { 
  margin-left: 45px;
  margin-bottom: 15px;

  }

        
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 15px;
  width: 100%;
  max-width: 650px; 
  margin: 150px auto 0; 
  padding: 90px 90px;
  background-color: #ffff;
  border-radius: 10px;
  

   h1{ 
    color:#f15a24;
    font-size: 19px;
    margin-right: 20px;
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
  margin-top: 20px;
 
`;

export const Button = styled.button`
  width: 30%;
  padding: 7px;
  font-size: 16px;
  border: none;
  border-radius: 10px;
  cursor: pointer;
  background-color:${(props) => (props.primary ? "#f15a24" : "#f5a623")};; 
  color: #fff;

    

`;
export const IndicadorG = styled.div`

  display: flex;
  position: relative;
  justify-content: center;
  align-items: center;
  top: 30px;
  gap: 10px;
`;

export const Indicador = styled.div `

  width: 10px;
  height: 10px;
  border-radius: 50%; 
  background-color: ${(props) => (props.active ? "#f15a24" : "#ddd")}; /* Cor diferenciada para o ativo */
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #f5a623; 
  }
`;

