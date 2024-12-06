import styled from "styled-components";

export const PageWrapper = styled.div`
  display: flex;
  height: 100vh;
  flex-direction: column;
`;

export const PageContent = styled.div`
  display: flex;  
`;


export const ContentWrapper = styled.div`
 
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 150px;

`;

export const Header = styled.div`

  background-color: #E35D1C;
  display: flex;
  flex-direction: row-reverse;
  justify-content: space-between;
  align-items: center;
  margin-top:300px;
  height: 348px;
  max-width: 100%;

  img{
    padding-bottom: 112px;
  }
`;

export const Section = styled.div`
 padding-left: 200px;

`;

export const SectionTitle = styled.div`
  color: #FFFFFF; 
  font-family: "Poppins", sans-serif;
  padding-bottom:20px;

 p{
    font-family: "Poppins", sans-serif;
    font-size: 18px;
    line-height:25px;
 }
  
`;

export const iconSection = styled.div`
    margin-top:182px;
`
export const ContainerText = styled.div`
    display: flex;
    align-items: center;
`;


export const iconText = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    color:#D24400;
    align-content:center; 
    font-family: "Poppins", sans-serif; 
    
h3{
  padding-top: 16px;
  font-weight:500;

}

p{
    padding-top: 10px;
    font-size: 12px;
    text-align:center;
    
}
`;

export const line = styled.div`
 height: 2px;
 width: 177px;
 background-color:#F6E5D3;

`;

export const CardGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 139px;
  margin-top: 156px;
  margin-bottom: 45px;

  
`;

export const Card = styled.div`
 position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  background-color: #E35D1C;
  width: 220px;
  height: 210px;
  color: white;
  padding: 20px;
  border-radius: 8px;
  text-align: center;
  font-family: "Poppins", sans-serif;

  .circleNumber{
    position: absolute;
    left: 35%;
    top: -16px;
    width: 60px;
    height: 60px; 
    background-color: #F4A261;
    color: #E75A1A; 
    font-size: 24px; 
    font-weight: bold; 
    align-content:center; 
    border-radius: 50%;
    border: 3px solid white; 
    margin: -25px auto 15px;
  
  }
  

  h3{
    
    padding-bottom: 12px;
    
  }

  p{
    
    text-align: left;
    font-size: 12px;
  }

  &:hover {
    transform: translateY(-5px);
    transition: all 0.3s ease-in-out; 

  }
`;