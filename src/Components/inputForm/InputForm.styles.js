import styled from 'styled-components';

export const InputContainer = styled.div`
  margin: auto;
  width: 412px;
  height: 30px;
  margin-top: 30px;
`;

export const StyledInput = styled.input`
  margin-top: 20px;
  width: 100%;
  padding: 5px;
  color: #A59494;
  border: 1px solid #ddd;
  border-radius: 5px;
  outline: none;
  transition: border-color 0.3s ease;
  font-family: "Poppins", sans-serif;

  &::placeholder {
    font-family: "Poppins", sans-serif;
    color: #A59494;
    font-size: 15px;
  }
`;

export const StyledLabel = styled.label`
  position: absolute;
  color: #6C5F5F;
`;