import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  background-color: #fff;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  width: 400px;

  h2 {
    margin-bottom: 20px;
    color: #e75109;
    text-align: center;
  }

  label {
    color: #706d6d;
    margin-bottom: 5px;
  }
`;

export const Input = styled.input`
  margin-bottom: 20px;
  padding: 10px;
  font-size: 16px;
  border: 1px solid #ccc;
  border-radius: 5px;
`;

export const Button = styled.button`
  padding: 10px 20px;
  font-size: 16px;
  color: #fff;
  background-color: #e35d1c;
  border: none;
  border-radius: 5px;
  cursor: pointer;

  &:hover {
    background-color: #d44d0b;
  }

  &.secondary {
    background-color: #f4ad58;

    &:hover {
      background-color: #e35d1c;
    }
  }
`;

export const ButtonGroup = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 10px;
  margin-top: 20px;
`;

export const Validation = styled.div`
  margin-top: 10px;
  color: ${(props) => (props.valid ? "green" : "red")};
`;
