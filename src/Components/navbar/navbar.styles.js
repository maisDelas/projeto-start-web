import styled from "styled-components"
import { FaRegUserCircle } from "react-icons/fa";

export const NavContainer = styled.div`
    background-color: #F6E5D3;

    div {
        max-width: 1380px;
        display: flex;
        justify-content: space-between;
        margin:auto;
    }

    img {
        width: 130px;
    }
`
// export const NavContent = styled.div`
//     max-width: 1380px;
//     display: flex;
//     justify-content: space-between;
//     margin: auto;
// `

// export const LogoDelas = styled.img`
//     width: 130px;
// `

export const ContainerLinks = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
`


export const Links = styled.ul`
    border: 1px solid black;
    list-style-type: none;
    display:flex;

    li {
        color: #544E48;
        padding: 1.5rem 2rem;
    }
    
    a {
        text-decoration: none;
    }


`

export const ButtonNav = styled.button`
    display: flex;
    align-items: center;
    background-color: #E35D1C;
    color: #F6E5D3;
    border: none;
    border-radius: 10px;
    padding: 5px ; 
    cursor: pointer;
    transition: background-color 0.3s;
    width: 100px;
`

export const IconUser = styled(FaRegUserCircle)`
    color:white;
`












  
