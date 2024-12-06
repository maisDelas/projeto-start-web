import styled from 'styled-components';

export const Perfil = styled.div`
  height: 100%;
  width: 100%;
`;

export const Container = styled.div`
  display: flex;
`;

export const PerfilPrincipal = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  gap:40px;
  width: 100%;

  &:last-child {
     margin-bottom: 5%;
  }

  button {
    background-color: #E35D1C;
    border-radius: 10px;
    border: 1px solid;
    color: #fff;
    cursor: pointer;
    height: 40px;
    transition: background-color 0.3s ease;
    width: 150px;

    &:hover{
      background-color: #f7692e;
      color: #fff;
      }
    }
`;


export const SegundoPerfil = styled.div`
  display: flex;
  flex-direction: column;
  gap:40px;
  margin-top: 60px;
  width: 80%;

  h2 {
    color:#E75109;
    font-weight: 800;
    font-size: 40px;
    margin-bottom: 20px;
  }

  .separador {
    background-color: #E75109;
    height: 1px;
    width: 100%;
  }
`;

export const Foto = styled.div`
  align-items: center;
  display: flex;
  gap: 10px;

  .perfil-img {
    width: 170px;
  }
`;

export const Card = styled.div`
  border: 1px solid #E6956E;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  padding: 45px;
  gap:20px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
  width: 75%;
`;

export const Editagem = styled.div`
  display: flex;
  align-items:center;
  justify-content: space-between;
 

  .coluna {
    display: flex;
    flex-direction: column;

    div {
      margin-bottom: 30px;

      label {
         margin-bottom: 5px;
        }
      }
    }

    p {
      margin-bottom: 5px;
    }

    .image {
      margin-top: 15px;
      width: 100%;

      img:first-child {
        margin-right: 10%;
      }
    }

    h2 {
      color: #E35D1C;
      font-weight: 800;


    }

    p {
      color: #E75109;
      

    }

    button {
      width: 5%;
      color: #F6E5D3;
      
    }

    input {
      border: 1px solid #D4CACA;
      border-radius: 10px;
      height: 30px;
      padding-left: 5px;
    
      
    }

    label {
      display: flex;
      align-items: center;
      color: #E35D1C;
      justify-content: center;
      width: 150px;
      height: 30px;
      border: 1px solid #E35D1C;
      cursor: pointer;
      transition: background-color 0.3s ease;
      

      &:hover {
       background-color: #f7692e;
       color: #fff;
      }
    }

   

    textarea {
      height: 180px;
      resize: none;
      width: 100%;
      border-color:#D4CACA;
      border-radius: 10px;
    
    }

    .redes-sociais {
      display: flex;
      flex-direction: row;
      gap:55px;

      div {
        align-items: center;
        display: flex;
        margin-bottom: 30px;

        img {
          margin-right: 10px;
        }
      }
    }

    .profissao{
      display: flex;
      width: 100%;

      .coluna {
        width: 100%;

        textarea {
          padding: 5px;
          height: 110px;
          width: 100%;
          }
        }

        .coluna:first-child {
          margin-right: 10%;
        }
      }
`;

export const ButtonEdit  = styled.div`
      display: flex;
      color: #E35D1C;
      background-color: #F6E5D3;
      border-radius: 10px;
      cursor: pointer;     
      gap: 8px;
      padding: 8px 16px;
      transition: background-color 0.3s ease;   
      
       
`;

export const ButtonGrupo = styled.div`
  display: flex;
  gap: 10px;
  flex-direction: column;

  div {
    display: flex;
    width: 100%;

    input[type='file']{
      border: 1px solid #E35D1C;
      visibility: hidden;
      width: 100%;
    }

    label {
      align-items: center;
      border: 1px solid #E35D1C;
      border-radius: 10px;
      color: #E35D1C;
      cursor: pointer;
      display: flex;
      justify-content: center;
      height: 35px;
      transition: background-color 0.3s ease;
      width: 210px;
      box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
      
      &:hover {
      background-color: #f7692e;
      color: #fff;
      }
    }
}

`;
