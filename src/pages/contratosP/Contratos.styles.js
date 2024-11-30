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
    color: var(--dark-orange);
    

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
            color:#f4a261;
            
        }
        
        ::placeholder{
                color: #f4a261;
            }
    
`

export const ContractsSection = styled.div`

        table {
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
             color: var(--dark-orange);
            }
  
        th {
            background-color: #fff8f2;
           color: var(--dark-orange);
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
    color: var(--dark-orange);

.buttonDelete{
    margin-top: 50px;
    width: 90px;
}


`

      
    /* display: flex;
        flex-direction: column;
        align-items:center;
        margin: 50px;
        width: auto;
        height: 500px;
        box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
        border-radius:10px;

        .contractTitle{
            display: flex;
            flex-direction: row;
            align-items: center;
            color: var(--dark-orange);
            gap: 35px;
            background-color: #FFF6EB;
            padding: 25px;
            
        }

        .spacing{
            margin-right: 68px;
        } */

    


export const Arrow = styled(IoIosArrowDown)`
  color: var(--dark-orange);
  
`
