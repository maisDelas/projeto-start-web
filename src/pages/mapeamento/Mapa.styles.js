import styled from "styled-components"
import Onda from "assets/Vector.jpg"
import { FaChevronRight } from "react-icons/fa"

export const Container = styled.div`
  background-image: url(${Onda});
  display:flex;
  align-items: center;
  width: 100%;
  height: 400px;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
`
export const Description = styled.div`
  margin-left:60px;
  h3 {
    font-size: 18px;
  }

  p {
  }
`

export const Logo = styled.img`
  width: 200px;
  margin-bottom:50px;
`
export const ContainerMap = styled.div`
  border: 5px solid black;
  height: 700px;
  display: flex;
  justify-content: center;
  align-items: center;

  div {
    width: 1300px;
    height: 600px;
  }
`
export const Buttonarrow = styled.button`
  background-color: var(--dark-orange);
  border: none;
`

export const IconArrow = styled(FaChevronRight)`
  color: white;
`

export const ContainerCarrossel = styled.div`
  
`
export const VerticalSlider= styled.div`
  width: 550px;
  height: 850px;
  background-color: var(--dark-orange);
  position: absolute;
  top: 50%; /* Centraliza verticalmente */
  right: 30px; /* Encosta na direita */
  transform: translateY(-50%);
  padding-inline:20px; /* Ajusta para ficar realmente centralizado */
`
export const BarraPesquisa = styled.div`
`
