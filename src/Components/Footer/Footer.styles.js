import styled from "styled-components";

export const footer = styled.footer `

    padding-bottom: 5px;
    width: 100%;
    background-color: #F6E5D3;
    display: flex;
    color: #C76938;
    font-family: Arial, sans-serif;
    padding: 35px;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 370px;
    

`;

export const FooterContatos = styled.div `
       
   
       display: flex;
       flex-direction: column;
       position: relative;
       top: -40px;
       
       
      


       
    h3 {

        font-size: 25px;
        font-weight: 500;
        color: #C76938;
        margin-top: 5px;
        
    }

    
`;

export const FooterImg= styled.div`
     
     display: flex;
     flex-direction: column;
     


    div { 

       display: flex; 
       margin: 5px 0;
       img {
         
         margin-right: 10px;

       }
    }
     
`;

export const FooterSobre= styled.div `
       
    margin:0 5%;

  
    h3 {

        font-size: 25px;
        color: #E35D1C;
        font-weight: 500;
        
      
    }

    p {
        color: #C76938;
        font-size: 15px;
        word-wrap: break-word;
        width: 200px;
    }
     
`;

export const FooterInfor= styled.div` 
     
       margin: 0 5%;
       display: flex;
       flex-direction: column;
       margin-left: 10px;
       
    

    h3 {
        font-size: 25px;
        color: #C76938;
        font-weight: 500;
        color: #E35D1C
    }

       

    li {
       

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


export const FooterLink = styled.div ` 
       
      

      

    h3 {
        font-size: 25px;
        font-weight: 500;
        color: #E35D1C;
        
    
    }

    ul {
       

        color: #D9974D
    
       
    }

    li {

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
       

       display: flex;
       flex-direction: column;
       margin-left: 40px;
       margin-top: -100px;

       input {

        
        width: 35vh;
        padding: 10px 5px;
        border-radius: 15px;
        border: 1px solid #D3A484;
        margin-top: 10px;
        margin-bottom: 5px;

    
    }

    button {
    
        width: 100px;
        background-color: #E35D1C;
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
      
        
        display: flex;
        margin: 20px;
        flex-direction: row;
        width: 100%;
        justify-content: center;
        align-items: center;
        margin-left: -30px;
        
     
`;

export const SocialIcons = styled.div`
     

     display: flex;
     justify-content: center;
     margin-left: 45%;
     gap: 15px;
     margin-top: 5px;
    
    
     
img { 
      
      border: none;
      height: 30px;
     
}

`;

export const FooterCopyright = styled.div`
       

       
       
       margin-left: 40px;

       

p {    text-align: right; 
       color: #C76938; 
       font-size: 20px;
       margin-top: 5px;
       
}

`;

export const FooterPai = styled.div `
        

        border-top: 1px solid #D3A484;
        width: 90%;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
      

        
`;

export const FooterContainer = styled.div `

      display: flex;
      width: 100%;
      justify-content: center;
      align-items: center;
      


`;