import styled from "styled-components";

export const Container = styled.div`

padding: 20px;
  
`;

export const Box = styled.div` 
  max-width: 500px;
  margin: 0 auto;
  background-color: #fff;
  border-radius: 10px;
  text-align: center;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1); 
  padding: 20px;
  
  

`;

export const Title = styled.h1`
  color: #FD8722;
  font-size: 25px;
  margin-bottom: 30px;
`;

export const Text = styled.p`
  color: #706D6D;
  margin-top:30px;
`;


export const Link = styled.a`
  display: block;
  margin-top: 10px;
  color: #007bff;
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
`;
