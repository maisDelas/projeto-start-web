import styled from "styled-components";

export const footer = styled.footer`

    background-color: #F6E5D3;
    display: flex;
    flex-wrap: wrap;
    padding: 150px 100px;
    padding-bottom: 40px;
    justify-content: space-between;
    color: #C76938;
    font-family: Arial, sans-serif;

`;

export const FooterContatos = styled.div `

       flex: 1;
       min-width: 150px;
       margin: -90px 20px;

    


    h3 {
        font-size: 18px;
        color: #C76938;
        margin-bottom: 15px;
        
    }

    p {

        margin: 5px 0;
        font-size: 15px;
        margin-top: 10px;
        
    }
`;

export const FooterSobre= styled.div `

        flex: 1;
        min-width: 150px;
        margin: 10px 20px;
        margin-left: 45px;
    

    h3 {
        font-size: 18px;
        color: #C76938;
        margin-bottom: 15px;
    }

    p {
        color: #C76938;
        font-size: 15px;
        
    }
     
`;
export const FooterLink = styled.div ` 

    flex: 1;
    min-width: 150px;
    margin: 10px 15px;
   

    

    h3 {
        font-size: 18px;
        margin-bottom: 15px;
    
    
    }

    ul {
        
        padding: 0;
        margin: 0;  
        
       
    }

    li {
        margin: 5px 0;
        list-style-type: none;  
        
        
    }

    a {

        font-size: 15px;
        color: #C76938;
        text-decoration: none;
        
    }

    a:hover {
        text-decoration: underline;
     
    }
`;

export const FooterInfor= styled.div` 


        flex: 1;
        min-width: 150px;
        margin: 10px 20px;
        margin-left: 100px;


    h3 {
        font-size: 18px;
        color: #C76938;
        margin-bottom: 15px;
    
    }

    ul {
        
        padding: 0;
        margin: 0;  
      
       
    }

    li {
        margin: 5px 0;
        list-style-type: none;  
        
        
    }

    a {
        font-size: 15px;
        color: #C76938;
        text-decoration: none;  
        
    }

    a:hover {
        text-decoration: underline;
     
    }
`;

export const FooterInscreva= styled.div`
   
       flex: 1;
       margin: 20px 40px;
       display: flex;
       flex-direction: column;
       margin-bottom: 90px;
       margin-top: -60px;
      
  
    input[type="email"] {


        padding: 10px 5px;
        border-radius: 15px;
        border: 1px solid #D3A484;
        margin-top: 10px;
        margin-bottom: 10px;
        
        


    
    }

    button {
    
        width: 150px;
        background-color: #C76938;
        color: white;
        padding: 7px;
        border: none;
        border-radius: 15px;
        cursor: pointer;
        font-size: 15px;
       

    }

    button:hover {
        background-color: #A7552D;

    }

`;

export const FooterMidias= styled.div`
      
        margin-left: 450px;
        flex-basis: 60%;
        margin-top: -45px;
        height: auto;

        
       
        img { 
        
        font-size: 40px;
        padding: 10px 0;
        margin: 10px 30px;
        margin-right: 50px;
        
       

        
       }        
`;

export const FooterCopyRight = styled.p`
    
    width: 100%;
    text-align: right;
    margin-top: 30px;
    color: #C76938;
    font-size: 20px;
    border-top: 1px solid #D3A484;
    padding-top: 10px;

`;