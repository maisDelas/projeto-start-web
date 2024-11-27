import styled from "styled-components"
import mule from "assets/imgPersona2.svg"


export const BackGround = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: rgb(0, 0, 0, 0.7);
  z-index: 1000;
`
export const Container = styled.dialog`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 40vw;
  height: 70vh;
  background-color: white;
`
export const Logo = styled.img`
  width: 140px;
`
export const Porfile = styled.img`
  width: 240px;
`
export const Apresetation = styled.div`

`