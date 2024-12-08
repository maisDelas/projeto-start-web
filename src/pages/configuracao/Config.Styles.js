import styled from "styled-components";

export const PageWrapper = styled.div`
    display: flex;
    flex-direction: column;
`

export const PageContent = styled.div`
    display: flex;      
`
export const Config = styled.div`
    display: flex;
    flex-direction:column;
    gap: 35px;
    padding: 100px;
    color: #E35D1C;
    margin: auto;

    h2{    
        margin-bottom: 45px;
    }

    h3{
        text-align: center;
        font-weight:normal;
        margin-bottom: 12px;
    }

    .boxContent{
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 250px;
        margin-bottom: 50px;
        border: 1px solid #E35D1C;
        box-shadow: 0 5px 10px rgba(85, 85, 85, 0.3);
        width: auto;
        padding: 55px;
        border-radius: 10px;
    }

    input {
        display: block;
        margin-right: auto;
        margin-left: auto;
        gap: 25px;
        border: 1px solid #D4CACA;
        border-radius: 5px;
        height: 30px;
        margin-bottom:25px;
    }

::placeholder{
    text-align: center;

}

`

export const FormBox = styled.div`

`
