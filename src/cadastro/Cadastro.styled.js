
import styled from "styled-components";


export const Container = styled.div`

  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  


`;


export const Logo = styled.div`

  display: flex;
  position: relative;
  top: 240px; 
  

 
`;

export const Onda = styled.img`

 width: 100%;
`;

export const Card = styled.div`

  display: flex;
  background-color: #ffffff;
  padding: 90px 80px;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.4);
  margin-top: -300px;
  flex-direction: column;
  gap: 25px;
  text-align: center;
  
`;

export const Button = styled.button`
  background-color: white;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.3);
  border: 1px solid #f5a623;
  color: #f5a623;
  font-size: 24px;
  font-weight: bold;
  padding: 60px 40px;
  border-radius: 8px;
  cursor: pointer;
  transition: 0.3s;
  color:#E35D1C;


  &:hover {
    background-color: #f5a623;
    color: white;
  }
`;