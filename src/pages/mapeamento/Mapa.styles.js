import styled from "styled-components"
import Onda from "assets/Vector.svg"
import { FaChevronRight } from "react-icons/fa"
import { IoIosSearch } from "react-icons/io"
import { IoIosArrowDown } from "react-icons/io"

export const MapSection = styled.div`
  min-height: 115vh;
`

export const Container = styled.div`
  background-image: url(${Onda});
  align-items: center;
  width: 100%;
  height: 550px;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  position: relative;
  z-index: 0;
`
export const Description = styled.div`
  max-width: 1440px;
  margin-inline: auto;
  padding-top:60px;
  padding-inline: var(--container-padding);

  h3 {
    font-size: 30.7px;
    margin-bottom: 7px;
  }

  p {
    font-size: 19.8px;
  }
`

export const Logo = styled.img`
  width: 200px;
  margin-bottom: 50px;
`
export const ContainerMap = styled.div`
  position: absolute;
  width: 100%; /* Faz o mapa ocupar toda a largura */
  top: 470px;
  display: flex;
  justify-content: center;

  div {
    width: 1300px;
    height: 600px;
    border-radius: 10px;
    z-index: 1;
  }
`
export const Buttonarrow = styled.button`
  background-color: var(--dark-orange);
  border: none;
  padding: 1rem;
  border-radius: 10px;
  position: absolute;
  top: 0;
  left: -20px;
  transform: translateX(-100%);
  cursor: pointer;
`

export const IconArrow = styled(FaChevronRight)`
  color: white;
`

export const ContainerSearch = styled.div`
  display: flex;
  /* align-items: center; */
`
export const VerticalSlider = styled.div`
  display: flex;
  flex-direction: column;
  width: ${(props) => (props.isOpen ? "550px" : "0px")};
  max-height: 850px;
  background-color: var(--dark-orange);
  position: absolute;
  top: 70%; /* Centraliza verticalmente */
  right: 30px; /* Encosta na direita */
  transform: translateY(-50%);
  padding-inline: ${(props) =>
    props.isOpen
      ? "20px"
      : "0px"}; /* Ajusta para ficar realmente centralizado */
  padding-block: 50px;
  border-radius: 10px;
  z-index: 2;
`
export const InputContainer = styled.div`
  position: relative;
  width: 100%;
  max-width: 370px;
  border-radius: 10px;
  background-color: #fff6eb;
  display: ${(props) => (props.isOpen ? "flex" : "none")};
  align-items: center;
  padding: 5px 15px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  margin-left: auto;
`

export const Pesquisa = styled.input`
  flex: 1;
  border: none;
  font-size: 16px;
  background: none;
  color: #a59494;
  padding: 5px;
`

export const Lupa = styled(IoIosSearch)`
  font-size: 18px;
  color: var(--dark-orange);
  margin-left: 10px;
`

export const ContainerCards = styled.div`
  max-height: calc(5 * 80px + 5 * 20px + 80px / 2);
  overflow-x: hidden;
  overflow-y: scroll;
  margin-top: 70px;
  display: flex;
  flex-direction: column;
  gap: 20px;

  &::-webkit-scrollbar {
    width: 0;
    height: 0;
  }
`
export const BotaoFiltrar = styled.button`
  background-color: #f29c4a;
  color: white;
  border: none;
  border-radius: 20px;
  padding: 10px 20px;
  margin-left: auto;
  /* margin-top: 19px; */
  font-size: 16px;
  display: ${(props) => (props.isOpen ? "flex" : "none")};
  align-items: center;
  gap: 10px;
  cursor: pointer;
  transition: background-color 0.3s ease; /* Efeito suave no hover */

  &:hover {
    background-color: #e68b35; /* Cor do botão ao passar o mouse */
  }

  &:focus {
    outline: none; /* Remove o contorno padrão ao focar no botão */
  }
`
export const Innertext = styled.p`
  width: max-content;
  white-space: nowrap;
`

export const Arrow2 = styled(IoIosArrowDown)`
  color: #fff;
`
