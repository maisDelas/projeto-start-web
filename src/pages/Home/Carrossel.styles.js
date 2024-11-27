import styled from 'styled-components';
import cardCarrossel from '../../assets/cardCarrossel.svg';
import bgcarrossel from '../../assets/BgCarrossel.svg';


export const BcCa = styled.div`
  background-image: url(${bgcarrossel});
  width:100%;
  background-repeat:no-repeat;
  background-size:cover;
  height:700px;
  display: flex;
  align-items:center;

`

export const CarrosselContainer = styled.div`
  width: 65%;
  margin: 0 auto;
  text-align: center;
  
  @media screen and (max-width:1440px) {

    width: 88%;
  }

  @media screen and (max-width:1024px) {

width: 92%;
}

@media screen and (max-width:768px) {

width: 120%;
}


`;

export const Slide = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 300px;
  width: 240px;
  background-image: url(${cardCarrossel});
  border-radius: 10px;
  color: #ffffff;
  font-size: 18px;
  font-weight: bold;
  margin :0 ;


  img{
    margin-bottom:15px;
    
  }

  p{
    font-size: 14px;
    font-family: "Poppins", sans-serif;
    font-weight:200;
    color: #FFFFFF;
    text-align: left;
    margin:0 10px 15px;  
  }

  h3{
    font-family: "Poppins", sans-serif; 
    margin-bottom:5px;
  }

`;



export const Title = styled.h2`
  font-family: "Poppins", sans-serif;
  font-style: normal;
  color: #FFFFFF;
  font-size: 40px;
  margin-bottom: 20px;
  text-align: center;
  padding-bottom: 30px;
  height: 5vh;
`;

export const SlideContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`



export const SwiperButtonPrev = styled.div`

  left: -80px !important;
  cursor: pointer;
  background-repeat:no-repeat;
  

  `;

export const SwiperButtonNext = styled.div`
  right: -80px !important;
  cursor: pointer;
  background-repeat:no-repeat;
 
  `;

