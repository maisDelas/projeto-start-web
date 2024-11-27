import styled from "styled-components";


export const PageWrapper = styled.div`
    display: flex;
    flex-direction: column;

`

export const PageContent = styled.div`
    display: flex; 
    height: 100vh;
    
`

export const Notification = styled.div`
    display: flex;
    padding: 150px;

    h2{
        color: #E35D1C;
        margin-bottom: 35px;
    }

    .boxContent{
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: center;
        gap: 250px;
        border: 1px solid #E35D1C;
        box-shadow: 0 5px 10px rgba(85, 85, 85, 0.3);
        width: auto;
        padding: 55px;
        border-radius: 10px;
    }


`

