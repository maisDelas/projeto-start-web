import styled from "styled-components";



export const FormContainer = styled.div`
  width: 500%;
  max-width: 500px;
  padding: 20px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const LogoContainer = styled.div`  max-width: 1300px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 40px;
  
   

  img {
    margin: 0; 
    
  }
`;
export const FormBox = styled.div`
  background-color: #ffffff;
  width: 500px;
  padding: 50px;
  border-radius: 8px;
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
  text-align: center;
  position: relative;

  h2 {
    color: #e75109;
    margin-bottom: 40px;
    
  }
`;

export const InputGroup = styled.div`
  margin-bottom: 20px;
  text-align: left;

  label {
    display: block;
    color: #706d6d;
    margin-bottom: 5px;
  }

  input {
     
        margin-right: auto;
        margin-left: auto;
        border: 1px solid #D4CACA;
        border-radius: 5px;
        height: 35px;
        width: 412px;
        padding: 5px;
    }

  .error {
    color: red;
    font-size: 12px;
    margin-top: 5px;
    display: block;
  }
`;

export const ButtonContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-top: 20px;

`;

export const StyledButton = styled.button`
  width: 30%;
  padding: 10px;
  background-color: #e35d1c;
  border: none;
  border-radius: 5px;
  color: #fff;
  font-size: 16px;
  cursor: pointer;
  transition: background-color 0.3s ease;


`;

export const Swapper = styled.div`
  position: absolute;
  bottom: 20px;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  gap: 4px;

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
