import styled from "styled-components";

export const QuizWrapper = styled.div`
  
  display: flex;
  flex-direction: column;
  align-items:center;
  gap: 20px;
`;

export const Question = styled.h2`
  width: 500px;
`;

export const Options = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  width: 500px;
`;

export const OptionButton = styled.button`
  display: flex;
  justify-content: center;
 
  padding: 10px;
  font-size: 16px;
  border: 1px solid #ccc;
  border-radius: 10px;
  cursor: pointer;
  background-color: ${({ isSelected, isCorrect }) =>
    isSelected ? (isCorrect ? "#a8e6cf" : "#ff8a80") : "#f9f9f9"};

  &:hover {
    background-color: #e0e0e0;
  }
`;

export const NextButton = styled.button`
  padding: 10px;
  font-size: 18px;
  width: 500px;
  background-color: #F2913D;
  color: white;
  border: none;
  border-radius: 10px;
  cursor: ${({ disabled }) => (disabled ? "not-allowed" : "pointer")};
  opacity: ${({ disabled }) => (disabled ? 0.5 : 1)};

  &:hover {
    background-color: ${({ disabled }) => (disabled ? "#F2913D" : "#FFB371")};
  }
`;

export const Score = styled.p`
  font-size: 1.2rem;
  font-weight: bold;
`;