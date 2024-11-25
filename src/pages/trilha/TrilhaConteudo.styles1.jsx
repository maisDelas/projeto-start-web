import styled from "styled-components";



export const PageWrapper = styled.div`
  display: flex;
  flex-direction: column; 
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

export const PageContent = styled.div`
  display: flex;  
`;

export const Sidebar = styled.div`
  width: 20%;
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
    cursor: pointer; 
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

export const MainContent = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 50px; 
    width: 100%;
    padding-top: 130px; 

`

export const ProcessContainer = styled.div`
    display: flex;
    flex-direction: row;
    margin-top: 20px;
    gap: 45px;
`

export const Process = styled.div`
    display: flex;
    flex-direction:column ;
    align-items: center;
    justify-content: center;
    gap: 20px;
    border:transparent;
    box-shadow: 0 1px 5px rgba(0, 0, 0, 0.5);
    width: 239px;
    height: 185px;
    border-radius:10px;
    font-family: "Poppins", sans-serif;
    color: #E75109;
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
 font-weight:600;
 padding-left: 14px;

}
`

export const ProcessTitle = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  font-family: "Poppins", sans-serif;
  
.title1{
    color: #E75109;
    padding-top: 50px;
}

.title2{
    display: flex;
    flex-direction: column;
    justify-content: center;
    text-align: center;
    margin-top: 25px;
    border-radius: 10px;
    background-color:#E75109;
    width:317px;
    height:80px;
    color: #FFFFFF;
}
`

export const TextContainer = styled.div`
  border: 0.1px solid #E75109;
  width: 1015px;
  height: 1238px;
  border-radius: 10px;
  box-shadow: 0 2px 4px rgba(53, 52, 52, 0.5);
  margin-top: 50px;

 
`

export const Text = styled.div`
 color:  #E75109;
 margin: 36px;
 font-size: 20px;
 line-height: 38px;

h2{
  font-size: 32px;
  margin-bottom: 15px;

}
p{
  font-size: 20px;
  margin-bottom: 50px;
}


  color:  #E75109;
  margin: 36px;


  ol {
    
    padding-left: 20px;
  }


  li {
    margin-bottom: 15px; 
  }
`;






