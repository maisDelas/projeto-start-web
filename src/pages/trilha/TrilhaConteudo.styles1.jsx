import styled from "styled-components";



export const PageWrapper = styled.div`
  display: flex;
  flex-direction: column; 
  height: 100vh;
  
`;

export const PageContent = styled.div`
  display: flex;  
`;


export const MainContent = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 50px; 
    width: 100%;
    padding-top: 130px; 
    padding-bottom: 150px;

`

export const ProcessContainer = styled.div`
    
    display: flex;
    margin-top: 20px;
    gap: 45px;
`

export const Process = styled.div`
    background-color: #FFFFFF;
    display: flex;
    flex-direction:column ;
    align-items: center;
    justify-content: center;
    gap: 20px;
    box-shadow: 0 1px 5px rgba(0, 0, 0, 0.5);
    width: 239px;
    height: 185px;
    border-radius:10px;
    color: #F2913D;
    font-size: 20px;
   

img{
  width: 35px;
}

.title{
  display: flex;
  align-items: center;
  gap: 10px;
  
}

p{
 font-weight:bold;
 padding-left: 14px;

}
`

export const ProcessTitle = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  
.title1{
    color: #F2913D;
    padding-top: 50px;
}

.title2{
    display: flex;
    flex-direction: column;
    justify-content: center;
    text-align: center;
    margin-top: 25px;
    border-radius: 10px;
    background-color:#F2913D;
    width:317px;
    height:80px;
    color: #FFFFFF;
}
`

export const TextContainer = styled.div`
  
  border: 0.1px solid #8E8B8B;
  background-color:#FFFFFF;
  width: auto;
  height: auto;
  padding: 20px;
  margin: 0 180px ;
  border-radius: 10px;
  box-shadow: 0 2px 4px rgba(53, 52, 52, 0.5);
  

 
`

export const Text = styled.div`
 color:  #8E8B8B;
 margin: 36px;
 font-size: 18px;
 line-height: 38px;

h2{
  font-size: 32px;
  margin-bottom: 15px;

}
p{
  font-size: 20px;
  margin-bottom: 50px;
}

  ol {
    
    padding-left: 20px;
  }


  li {
    margin-bottom: 15px; 
    color: #706D6D;
  }

  span{
    font-weight:bold;
  }
`;








