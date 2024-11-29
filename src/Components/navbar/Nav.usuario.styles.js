import styled from "styled-components"
import { IoIosArrowDown } from "react-icons/io";

export const NavContainer = styled.div`
  background-color: #f6e5d3;
  padding-block:12px;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.2);
`
export const NavContent = styled.div`
  max-width: 1440px;
  margin-inline: auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-inline: var(--container-padding);
`
export const NavLogo = styled.img`
  width: 140px;
`
export const ListLinks = styled.ul`
  display: flex;
  align-items: center;
`
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
  }
`
export const User = styled.div`
  display: flex;
  align-items:center;
  padding-left:45px;

  p {
    font-size: 15.8px;
    color: #544e48;
  }

`
export const  UserName = styled.div`
  display: flex;
  gap: 25px;
`

export const Usericon = styled.div`
  border-radius: 50%;
  background-color: var(--dark-orange);
  width: 60px;
  height: 60px;
  font-size:30.7;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-inline: 25px;
`
export const Arrow = styled(IoIosArrowDown)`
  color: #544e48;
`