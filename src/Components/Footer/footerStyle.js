import styled from "styled-components";


export const footer = styled.footer`

    background-color: #F6E5D3;
    display: flex;
    flex-wrap: wrap;
    color: #C76938;
    font-family: Arial, sans-serif;
    padding: 45px 35px;
    

`;

export const FooterContatos = styled.div `
       

       position: relative;
       margin: 0;
       display: flex;
       flex-direction: column;
       top: -50px;

    h3 {
        font-size: 18px;
        color: #C76938;
        margin-bottom: 15px;   
        margin-bottom: -8px;
        
    }

    p {
        margin: 5px 0;
        font-size: 15px;
        margin-top: 10px;
        display: flex;     
    }

     img {
       margin-right: 10px; 
     }




`;

export const FooterSobre= styled.div `

        flex: 1;
        min-width: 150px;
        margin: 5px 10px;
        margin-left: 60px;
        padding: 10px;
        

    h3 {
        font-size: 18px;
        color: #E35D1C;
        margin-bottom: 15px;     
    }

    p {
        color: #C76938;
        font-size: 15px;    
    }
     
`;
export const FooterLink = styled.div ` 
       flex: 0 1 200px;
       margin: 5px 10px;
       border: solid red;

    h3 {
        font-size: 18px;
        margin-bottom: 15px;
        color: #E35D1C;  
    }

    ul {        
        padding: 0;
        margin: 0;  
        color: #D9974D       
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
        flex: 0 1 200px;
        min-width: 150px;
        margin: 5px 10px;
        margin-left: 40px;

    h3 {
        font-size: 18px;
        color: #C76938;
        margin-bottom: 15px;
        color: #E35D1C
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
       position: relative;
       margin: 0;
       display: flex;
       flex-direction: column;
       top: -35px;
       margin-left: 40px;

    input[type="email"] {

        
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
       
        position: relative;
        display: flex;
        margin: 20px;
        gap: 15px;
        top: -53px;
      
        img {         
        font-size: 40px;
        padding: 0;    
       }        
`;

export const FooterCopyRight = styled.div`    
       width: 100%;
       text-align: right;
       color: #C76938;
       font-size: 15px;
        flex-direction: column;
        width: 100%;
        margin-top: 50px;
        margin-left: -30px;
        
        

`;

export const SocialIcons = styled.div`
     

     position: relative;
     display: flex;
     margin-right: 500px;
     margin-top: 20px;
     margin-left: 650px;
     top: -50px;


img { 
      margin-left: 30px; 
      border: none;
      height: 20px;

}

`
export const Copyright = styled.div`

       border-top: 1px solid #D3A484;
       margin-top: 15px;
       padding-top: 10px;
       width: 100%;

       

p {    text-align: right; 
       color: #C76938; 
       font-size: 15px; 
       
}

`
