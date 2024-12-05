import styled from "styled-components";

export const SideBarStyle = styled.div`
  
  background-color: #F8DEBF;
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
    text-decoration:none;
    color:#F4AD58;
    font-size: 20px;
    font-weight:bold; 
    padding:16px;
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
    background-color: #F4AD58;

    a{
      color: #FFFFFF;
    }
  }

  }

  .linha{
    
    border: 1px solid #F4AD58;
    filter: opacity(50%);
    margin:40px 0;
  }

`;
