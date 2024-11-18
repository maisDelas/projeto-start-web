import styled from "styled-components";

export const footer = styled.footer `

   
    width: 100%;
    background-color: #F6E5D3;
    display: flex;
    color: #C76938;
    font-family: Arial, sans-serif;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    
    

    


`;

export const FooterContatos = styled.div `
       
       
       display: flex;
       flex-direction: column;
       
    h3 {

        font-size: 25px;
        font-weight: 500;
        color:  #E35D1C;
        margin-bottom: 5px;
        
        
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
        margin-bottom: 5px;
        
      
    }

    p {
        color: #C76938;
        font-size: 15px;
        word-wrap: break-word;
        width: 200px;
    }
     
`;

export const FooterInfor= styled.div` 

   
       margin:0 5%;
       display: flex;
       flex-direction: column;
       
    

    h3 {
        font-size: 25px;
        color: #C76938;
        font-weight: 500;
        color: #E35D1C;
        margin-bottom: 5px;
    }

       

    li {
       

        list-style-type: none;  
        margin: 5px 0;
        
        
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
 
         margin: 0 5%;
      

    h3 {

        white-space: nowrap;
        font-size: 25px;
        font-weight: 500;
        color: #E35D1C;
        
        
    
    }

    ul {
       

        color: #D9974D
        
    
       
    }

    li {

        list-style-type: none;  
        margin: 5px 0;
        
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
       margin-top: -5%;
       
    

       input {

        padding-left:  10px;
        width: 200px;
        height: 40px;
        border-radius: 10px;
        border: 1px solid #D3A484;
        margin-top: 8px;
        margin-bottom: 8px;

    
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

    p { 
        color: #E35D1C;
    }


    button:hover {
        background-color: #A7552D;

    }

`;

export const FooterMidias= styled.div`
      
        
        display: flex;
        flex-direction: row;
        width: 100%;
        justify-content: center;
        align-items: center;
        
        
     
`;

export const SocialIcons = styled.div`
     
     
     display: flex;
     justify-content: center;
     margin-left: 48%;
     gap: 15px;
     margin-top: 5px;

    
    
     
img { 
      
      border: none;
      height: 30px;
     
}

`;

export const FooterCopyright = styled.div`
            
 p {
       margin-left: 40px;
       text-align: right; 
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
        margin-top: 40px;
        
`;

export const FooterContainer = styled.div `

      display: flex;
      flex-direction: column;
      width: 100%;
      justify-content: center;
      align-items: center;
      margin-top: 70px;

      .teste { 

        display: flex;
        width: 85%;
        justify-content: center;
        
        
      }
      
      .logoContainer {
        
        width: 85%;

      }

      .goToTopContainer {

          width: 85%;
          display: flex;
          justify-content: end;
          margin-top: 10px;


          button  {
          display: flex;
          justify-content: center;
          border-radius: 5px;
          border: none;
          align-items: center;
          background-color: #E35D1C;
          color:#ffff;
          height: 24px;
          width: 24px;
          }
          

          button:hover { 
            
             background-color: #c4511a;

          }
      }
   
    

      
`;
  

