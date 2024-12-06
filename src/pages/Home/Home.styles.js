import styled from "styled-components";
import BgOnda from 'assets/BgOnda.png'


export const Hero = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    background-image:url(${BgOnda});
    box-shadow: inset 0px 4px 6px rgba(0, 0, 0, 0.2);
    background-repeat:no-repeat;
    background-size: cover;
    width:100%;
    height: 600px;
    padding: 56px;
 
img{
    display: flex;
    margin-top: 25px;
    width: 339px;
    height: 229px;
    
    
}

h1{
    text-align: center;

}
`
export const ImageSection = styled.div`

display: flex;

  
  img{
    margin-top: 100px;
    width:100%;
  } 
  

  
`

export const Container = styled.div`

width: 100%;
margin: 0;

@media screen and (max-width:1440px) {

width: 100%;
}

@media screen and (max-width:1024px) {

width: 135%;
}

@media screen and (max-width:768px) {

width: 190%;
}

@media screen and (max-width:375px) {

width: 370%;

}

`

export const Title = styled.div`
    text-align: center;
    margin-top: 126px;
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

     a{
        font-size: 20px;
 }
`
export const Containervideo = styled.div`
    margin-top: 90px;
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
    padding-bottom: 45px;
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