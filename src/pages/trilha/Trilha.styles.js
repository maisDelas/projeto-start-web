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

  background-color: #F2913D;
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
  padding-bottom:20px;

 p{
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
    color:#F2913D;
    align-content:center; 
    

    
h3{
  font-size: 25px;
  padding-top: 16px;
  font-weight:bold;

}

p{
    padding-top: 10px;
    font-size: 16px;
    font-weight: bold;
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
  background-color: #DDDDDD;
  width: 250px;
  height: 250px;
  border-radius: 10px;
  color: #8E8B8B;
  font-weight: bold;
  

  .number{
    margin-right: 190px;
    margin-bottom:10px;
    
    img{
      width: 40px;
    }
  }
  
  h3{
    padding:0 20px;
    font-size: 21px;
    
  }

  p{
    padding: 20px;
    text-align: left;
    font-size: 16px;
  }

  &:hover {
    transform: translateY(-5px);
    transition: all 0.3s ease-in-out; 

  }
`;