import styled from "styled-components"


export const footer = styled.footer`
  width: 100%;
  background-color: #f6e5d3;
  display: flex;
  flex-direction: column;
`

export const FooterContatos = styled.div`
  display: flex;
  flex-direction: column;
  justify-content:space-between;
  align-items: space-between;

  p {
    font-size: 19.8px;
    font-weight: 500;
    color: #e35d1c;
    margin-bottom: 5px;
  }
`
export const Logo = styled.img`
  width: 140px;
  margin-bottom:5px;
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

  p {
    font-size: 12.6px;
  }
`

export const FooterSobre = styled.div`
  margin-inline:5%;

  h3 {
    font-size: 19.8px;
    color: #e35d1c;
    font-weight: 500;
    margin-bottom: 5px;
  }

  p {
    color: #c76938;
    font-size: 15.8px;
    word-wrap: break-word;
    width: 200px;
  }
`

export const FooterInfor = styled.div`
  margin-inline:5%;
  display: flex;
  flex-direction: column;

  h3 {
    font-size: 19.8px;
    color: #c76938;
    font-weight: 500;
    color: #e35d1c;
    margin-bottom: 5px;
  }

  li {
    list-style-type: none;
    margin: 5px 0;
    transition: transform 0.3s ease;
  }

  a {
    font-size: 15.8px;
    color: #c76938;
    text-decoration: none;
  }

  a:hover {
    transform: scale(1.2);
  }
`

export const FooterLink = styled.div`
  margin-inline:5%;

  h3 {
    white-space: nowrap;
    font-size: 19.8px;
    font-weight: 500;
    color: #e35d1c;
  }

  ul {
    color: #d9974d;
  }

  li {
    list-style-type: none;
    margin: 5px 0;
  }

  a {
    font-size: 15.8px;
    color: #c76938;
    text-decoration: none;
  }

  a:hover {
    text-decoration: underline;
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
    color: #c76938;
    font-size: 15.8px;
    margin-top: 5px;
  }
`

export const FooterPai = styled.div`
  border-top: 1px solid #d3a484;
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
    width: 80%;
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
      align-items: center;
      background-color: #e35d1c;
      color: #ffff;
      height: 24px;
      width: 24px;
    }

    button:hover {
      background-color: #c4511a;
    }
  }
`
