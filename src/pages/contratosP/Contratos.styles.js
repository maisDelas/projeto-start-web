import styled from "styled-components";
import { IoIosArrowDown } from "react-icons/io";

export const PageWrapper = styled.div`
    display: flex;
    flex-direction: column;
    
`

export const PageContent = styled.div`
    display: flex;  
    height:100vh;   
`

export const ContractArea = styled.div`
    display: flex;
    flex-direction: column;
    margin: 150px;

h1{
    color: #F2913D;
    

}

`

export const SearchBox = styled.div`
    
        display: flex;
        align-items: center;
        margin-top: 45px;
        border: 1px solid #f4a261; 
        
        
        border-radius: 10px;
        background-color: #fff8f2; 
        padding: 5px 10px;
        width: 400px; 
        height: 35px;

        input{
            border:none;
            border: none;
            outline: none;
            background: transparent;
            width: 100%;
            font-size: 16px;
            
        }
        
        ::placeholder{
                color: #F2913D;
            }
    
`

export const ContractsSection = styled.div`

        table {
            background-color: #fff;
            width: 1000px; 
            height:55px;
            border-collapse: collapse; 
            border-radius: 10px;
            margin-top: 60px;
            box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
            
            }

            .status{
                font-weight: bold;
            }
  
        th, td {
             padding: 44px;
             text-align: left;
             color: #8E8B8B;
             font-weight: bold;
            }
  
        th {
            background-color: #fff8f2;
           color: #F2913D;
           }

        td{
            
            border-bottom: 1px solid rgba(243, 164, 126, 100);   
        }
`


export const DeleteArea = styled.div`
    margin-top: 50px;
    display: flex;
    flex-direction: column;
    align-items: center;
    color: #F2913D;

.buttonDelete{
    margin-top: 50px;
    width: 90px;
    font-size: 16px;
    background-color: #E35D1C;
}


`

export const Arrow = styled(IoIosArrowDown)`
  color:#F2913D;
  
`
