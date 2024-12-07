import styled from "styled-components";

export const Container = styled.div`
  padding: 20px;
`

export const Box = styled.div`
  max-width: 440px;
  margin: 0 auto;
  padding: 50px;
  background-color: #fff;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  text-align: center;
  
`;


export const Title = styled.h1`
  color: #F2913D;
  font-size: 24px;
  margin-bottom: 16px;
  text-align: left;
  padding: 12px 0;
`;

export const Subtitle = styled.h4`
  font-size: 18px;
  margin-bottom: 12px;
  display: flex; 
  align-items: center; 
  gap: 8px;
  margin-bottom: -20px; 

  h1{
    display: flex;
    align-items: center;
    color: #FFFFFF;
    background-color: #F2913D;
    padding: 20px;
    border-radius: 50%;
    width: 60px;
    height: 60px;
  }
  
`;


export const Paragraph = styled.p`
  color: #8E8B8B;
  font-weight: bold;
  text-align: left;
  font-size: 16px;
  margin-bottom: 4px;
  
`;

export const List = styled.ul`
 text-align: left;
 
 
  color: #8E8B8B;
  font-size: 16px;
  margin: 0 0 24px 0;
  padding: 0;
  list-style-type: none;
  


  li {
  display: flex;

  margin-left: 85px; 
  text-align: left;
  
width: 320px;
}

  
`;
export const LogoContainer = styled.div` 
  align-items: center;
`;

export const StyledButton = styled.button`
  width: 161px;
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


export const Divtitle = styled.li `


`