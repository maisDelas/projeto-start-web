import styled from "styled-components";

export const Title = styled.div`
     text-align: center;
     padding-bottom: 30px;
     height: 20vh;
     font-weight: 600;

     h2{
        font-family: "Poppins", sans-serif;
        font-style: normal;
        color: #E75109;
        font-size: 40px;
     }

`
export const Bgcard = styled.div`
     background-color: #F6E5D3;
     margin-top: 20px;
     min-height: 100vh;
     flex-direction: column; 
     justify-content: space-between; 
     padding-bottom: 40px;
     margin-bottom:50px;
`
export const Containervideo = styled.div`
    display: flex;
    justify-content: center;
    height: 30vh;
    overflow: hidden;
`

export const Styledifreme = styled.iframe`
    cursor: pointer; 
    position: absolute;  
    margin-top: -150px;
`
export const Styletitle = styled.div`
    text-align: center;
    padding-bottom: 25px;
    font-weight:600; 

    h2 {
        font-family: "Poppins", sans-serif;
        font-style: normal;
        color: #E75109;
        font-size: 40px;
    }
`
export const Cardcontainer = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 300px);
    margin-inline: auto;
    gap: 30px 60px;
    margin-bottom: 50px;
    justify-content: center;

    
`