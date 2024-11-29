import styled from "styled-components";

export const SideBarStyle = styled.div`
  
  background-color: #F4AD58;
  box-shadow: inset 0px 4px 6px rgba(0, 0, 0, 0.2);
  
  display:flex;
  flex-direction:column;
  padding:20px;
  height: auto;
  

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
    gap:50px; 
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
