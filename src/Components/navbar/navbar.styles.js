import styled from "styled-components"
import { FaRegUserCircle } from "react-icons/fa"
import GlobalButton from "Components/botaoglobal/Button"

export const Container = styled.div`
  background-color: #f6e5d3;
`
export const Content = styled.div`
  max-width: 1440px;
  margin-inline: auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-inline: var(--container-padding);
`
export const Logo = styled.img`
  width: 140px;
`
export const ListLinks = styled.ul`

  display:flex; 
  align-items:center; `

export const Link = styled.li`
  list-style-type: none;
  padding: 1.5rem 0;
  display: flex;
  align-items: center;
  
 

  & + & { 
    margin-left: 1rem;
  }
    
  img,p { 

    margin-right: 10px;

   }
     

  a {
    color: #544e48;
    text-decoration: none;
    font-family: "Poppins", sans-serif;
  }
`

export const Button = styled(GlobalButton)`
  display: inline-flex;
  align-items: center;
  background-color: #e35d1c;
  color: #f6e5d3;
  border: none;
  border-radius: 10px;
  padding: 5px;
  cursor: pointer;
  transition: background-color 0.3s;
  width: 100px;
  gap: 10px;
  margin-left:88px;
`

export const IconUser = styled(FaRegUserCircle)`
  color: white;
`
