import styled from "styled-components";

export const Container = styled.div`
    max-width: 500px;
  margin: 0 auto;

  background-color: #fff;
  border-radius: 8px;
  // box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  text-align: center;
`;

export const Box = styled.div`
  // background: white;
  
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  
  text-align: center;
`;

export const Title = styled.h1`
  color: #4caf50;
  font-size: 1.5rem;
  margin-bottom: 20px;
  color:#E35D1C;
`;

export const Text = styled.p`
  font-size: 1rem;
  color: #333;
  margin: 10px 0;
`;

export const Button = styled.button`
  margin-top: 15px;
  padding: 10px 15px;
  border: none;
  border-radius: 5px;
  font-size: 1rem;
  cursor: pointer;
  background: #4caf50;
  color: #fff;
  background-color:#E35D1C;
  

  
`;

export const Link = styled.a`
  display: block;
  margin-top: 10px;
  font-size: 0.9rem;
  color: #007bff;
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
`;
