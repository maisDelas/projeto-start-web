import styled from "styled-components";

export const Stylequadrado = styled.div`
    width: 296px;
    height: 311px;
    background-color: #F4AD58;
    border-radius: 10px;
    padding: 23px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    gap: 16px;

`
export const Iconservice = styled.img`
    width: 48px;
`

export const Titleservice = styled.h3`
    font-family: "Poppins", sans-serif;
    color: white;
    font-weight: bold;
    padding:5px 0px;
    font-size: 18px;
`

export const Descservice = styled.p`
    font-family: "Poppins", sans-serif;
    font-style: normal;
    font-size: 15.75px;
    color: white;
`

export const Stylebutton = styled.button`
    background-color: #E75109;
    font-family: "Poppins", sans-serif;
    font-style: normal;
    color: white;
    border: none;
    padding: 8px;
    border-radius: 10px;
    display: block; 
    margin-inline: auto;
    cursor: pointer;

    &:hover {
        background-color: #FF7431;
    }
`

