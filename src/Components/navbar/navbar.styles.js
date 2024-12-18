import styled from "styled-components"
import { FaRegUserCircle } from "react-icons/fa"
import GlobalButton from "Components/botaoglobal/Button"

export const Container = styled.div`
  background-color:  #f6e5d3;
  width: 100%;
  margin: 0;
  display: flex;
  height: 90px;
  

  


  @media screen and (max-width:1440px) {

width: 100%;
}

@media screen and (max-width:1024px) {

width: 135%;
}

@media screen and (max-width:768px) {

width: 188%;
}

@media screen and (max-width:375px) {

width: 370%;
font-size: 35px;

}

`
export const Content = styled.div`
  max-width: 1440px;
  margin-inline: auto;
  display: flex;
  align-items: center;
 
  
  
  
`
export const Logo = styled.img`
  width: 140px;
  margin-right: 600px;
`
export const ListLinks = styled.ul`

  display:flex; 
  align-items:center; 
 
  
`

export const Link = styled.li`
  list-style-type: none;
  padding: 15px;
  display: flex;
  align-items: center;
  text-decoration: none;

  
     &:hover {
        color:#544e48; 
       }

  & + & { 
    margin-left: 1rem;
  }
    
     

  a {
    color: #544e48;
    text-decoration: none;
  }
`

export const Button = styled(GlobalButton)`
  display: inline-flex;
  font-size: 15px;
  align-items: center;
  background-color: #e35d1c;
  color: #f6e5d3;
  border: none;
  border-radius: 10px;
  padding: 9px;
  cursor: pointer;
  transition: background-color 0.3s;
  width: 100px;
  gap: 10px;
  margin-left:88px;
`

export const IconUser = styled(FaRegUserCircle)`
  color: white;
  width: 20px;
  height: 20px;
`
