import styled from "styled-components";



export const FormContainer = styled.div`
  padding: 20px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  
`;


export const FormBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #ffffff;
  width: 500px;
  padding: 50px;
  border-radius: 8px;
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
  text-align: center;
  position: relative;


  h1{
    display: flex;
    align-items: center;
    color: #FFFFFF;
    background-color: #F2913D;
    padding: 20px;
    margin-bottom: 20px;
    border-radius: 50%;
    width: 60px;
    height: 60px;
  }

  h2 {
    color: #F2913D;
    margin-bottom: 40px;
    
  }
`;

export const InputGroup = styled.div`
  margin-bottom: 20px;
  text-align: left;

  form {

  }

  label {
    display: block;
    color: #706d6d;
    margin-bottom: 5px;
    font-weight:bold;
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

  textarea{
    width: 100%;
    height: 100px;
  }
`;
export const ButtonGroup = styled.div`
  display: flex;
  justify-content: space-around; 
  align-items: center; 
  margin-top: 20px; 
`;

export const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 20px;

`;

export const StyledButton = styled.button`
   width: 130px;
  padding: 12px;
  background-color: #F2913D;
  border: none;
  border-radius: 10px;
  color: white;
  font-size: 16px;
  font-weight: bold;
  cursor: pointer;

  &:hover {
        background-color: #FFA85C;
    }
 
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

    &.active {
      background-color: #F2913D;
    }
  }
`;
