import styled from "styled-components"


export const footer = styled.footer`
  width: 100%;
  background-color: #f2f2f2;
  display: flex;
  color: #F2913D;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: auto;
`

export const FooterContatos = styled.div`
  display: flex;
  flex-direction: column;

  h3 {
    font-size: 25px;
    font-weight: 500;
    color: #F2913D;
    margin-bottom: 5px;
  }
`

export const FooterImg = styled.div`
  display: flex;
  flex-direction: column;

  div {
    display: flex;
    margin: 5px 0;

    img {
      margin-right: 10px;
    }
  }
`

export const FooterSobre = styled.div`
  margin: 0 5%;

  h3 {
    font-size: 25px;
    color: #F2913D;
    font-weight: 500;
    margin-bottom: 5px;
  }

  p {
    color: #F2913D;
    font-size: 16px;
    word-wrap: break-word;
    width: 230px;
  }
`

export const FooterInfor = styled.div`
  margin: 0 5%;
  display: flex;
  flex-direction: column;

  h3 {
    font-size: 25px;
    color: #F2913D;
    font-weight: 500;
    margin-bottom: 5px;
  }

  li {
    list-style-type: none;
    margin: 5px 0;
  }

  a {
    font-size: 15px;
    color: #F2913D;
  }

  a:hover {
   text-decoration: underline;
  }
`

export const FooterLink = styled.div`
  margin: 0 5%;

  h3 {
    white-space: nowrap;
    font-size: 25px;
    font-weight: 500;
    color: #F2913D;
  }


  li {
    list-style-type: none;
    margin: 5px 0;
  }

  a {
    font-size: 15px;
    color: #F2913D;
    text-decoration: none;
  }

  a:hover {
    text-decoration: underline;
  }
`

export const FooterInscreva = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: -5%;

  input {
    padding-left: 10px;
    width: 200px;
    height: 40px;
    border-radius: 10px;
    border: 1px solid #F2913D;
    margin-top: 8px;
    margin-bottom: 8px;
  }

  button {
    width: 100px;
    background-color: #F2913D;
    color: white;
    padding: 7px;
    border: none;
    border-radius: 10px;
    cursor: pointer;
    font-size: 15px;
  }

  p {
    color: #F2913D;
    font-weight:bold;
  }

  button:hover {
    background-color: #FFA85C;
  }
`

export const FooterMidias = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  justify-content: center;
  align-items: center;
  
` 

export const SocialIcons = styled.div`
  display: flex;
  justify-content: center;
  margin-left: 45%;
  gap: 15px;
  margin-top: 5px;
  

  img {
    border: none;
    height: 30px;
  }
`

export const FooterCopyright = styled.div`
  p {
    margin-left: 40px;
    text-align: right;
    color:  #F2913D;
    font-size: 20px;
    margin-top: 5px;
  }
`

export const FooterPai = styled.div`
  border-top: 1px solid  #F2913D;
  width: 90%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-top: 40px;
`

export const FooterContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  justify-content: center;
  align-items: center;
  margin-top: 70px;

  .teste {
    display: flex;
    width: 85%;
    justify-content: space-between;
  }

  .logoContainer {
    width: 85%;
  }

  .goToTopContainer {
    width: 85%;
    display: flex;
    justify-content: end;
    margin-top: 10px;

    button {
      display: flex;
      justify-content: center;
      border-radius: 5px;
      border: none;
      cursor: pointer;
      align-items: center;
      background-color:  #F2913D;
      color: #ffff;
      height: 24px;
      width: 24px;
    }

    button:hover {
      background-color: #FFA85C;
    }
  }
`
