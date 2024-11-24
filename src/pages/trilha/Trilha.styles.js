import styled from "styled-components";

export const PageWrapper = styled.div`
  display: flex;
  height: 100vh;
  flex-direction: column;
`;

export const PageContent = styled.div`
  display: flex;  
`;

export const Nav = styled.div`

  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 88px;
  padding: 10px 20px;
  background-color: #f8e6d5;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);

  img{
    width: 169px;
    margin-left:36px;

  }

`;


export const LinksNav = styled.div`

  display: flex;
  gap: 40px;

  margin-left: 800px;

  a {
    font-family: "Poppins", sans-serif;
    text-decoration: none;
    color: #544E48;
    font-size: 20px;
    font-weight: 500;
    margin-top: 6px;
  }
`;

export const PerfilNav = styled.div`

  display: flex;
  gap: 20px;

  .Circulo {

    position: relative;
    margin-left: 10px;
    background-color: #E75109;
    border-radius: 70%;
    color: aliceblue;
    display: grid;
    justify-content: center;
    align-items: center;
    font-size: 50px;
    overflow: hidden;
    font-weight: bold;
    height: 37px;
  }
  
  .nome {
    
    margin-top: 10px;
  }

  .seta {

    margin-top: 10px;
  }
`;

export const Sidebar = styled.div`
  width: 30%;
  background-color: #F4AD58;
  display: flex;
  flex-direction: column;
  padding:20px;
  height: 2313px;
  

  img{
  margin: 24px 0;
  height: 50px;
  
  }

  a{
    font-family: "Poppins", sans-serif;
    text-decoration:none;
    color:#FFFFFF;
    padding:16px;
    font-size: 19.75px;  
  }

  ul{
    display: flex;
    flex-direction:column;
    margin-top: 145px; 
    gap:30px; 
  }


  li{
    display: flex;
    align-items: center;
    border-radius:10px;
    transition: background-color 0.3s ease;
    height: 50px;


    &:hover {
    background-color: #FDCCA1;
    
  }

  }

  .linha{
    
    border: 1px solid #E75109;
    filter: opacity(50%);
    margin: 80px 0;
  }

`;



export const ContentWrapper = styled.div`
 
  display: flex;
  flex-direction: column;
  align-items: center;

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

export const Button = styled.button`
  margin-top: 54px;
  padding: 16px;
  background-color: #E35D1C;
  color: white;
  border: none;
  border-radius: 10px;
  cursor: pointer;
  font-size: 18px;
  

  &:hover {
    background-color: #FF7431;
  }
`;
