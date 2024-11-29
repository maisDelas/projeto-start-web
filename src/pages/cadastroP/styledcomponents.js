import styled from "styled-components";

export const Container = styled.div`
  max-width: 500px;
  margin: 0 auto;
  padding: 20px;
  display: flex;
  flex-direction: column;
  gap: 20px;
  background-color: #fff;
  border-radius: 8px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
`;

export const Title = styled.h1`
  font-size: 24px;
  color: #E75109;
  text-align: center;
  
  
`;

export const Section = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  align-items: center; 
  

  label {
    font-size: 16px;
    font-weight: bold;
    color: #706D6D;
    width: 330px;
   
  }

  input {
        display: block;
        margin-right: auto;
        margin-left: auto;
        gap: 25px;
        border: 1px solid #D4CACA;
        border-radius: 5px;
        height: 30px;
        margin-bottom:25px;
    }

  input {
        display: block;
        margin-right: auto;
        margin-left: auto;
        gap: 25px;
        border: 1px solid #D4CACA;
        border-radius: 5px;
        height: 30px;
        margin-bottom:25px;
    }
`;

export const TextArea = styled.textarea`
  width: 330px; 
  height: 100px;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  font-size: 14px;
  resize: none;
  background-color: #fff;
  
`;

export const ButtonGroup = styled.div`
  display: flex;
  justify-content: space-around; 
  align-items: center; 
  margin-top: 20px; 
`;

export const Button = styled.button`
  min-width: 100px; 
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  font-size: 16px;
  cursor: pointer;
  background-color: ${({ primary }) => (primary ? "#E35D1C" : "#F4AD58")};
   color:#fff;


  // &:hover {
  //   background-color: ${({ primary }) => (primary ? "#c44a17" : "#d89d4e")}; 
  // }
`;
export const Swapper = styled.div`
  display: flex;
  gap: 4px;
  margin-top: 20px; 
  justify-content: center; 
  
  .circle {
    border-radius: 50%;
    width: 12px;
    height: 12px;
    background-color: #888;
    cursor: pointer;

    &.active {
      background-color: #e35d1c;
    }
  }
`;

