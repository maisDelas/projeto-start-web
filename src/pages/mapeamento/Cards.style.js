import styled from "styled-components"
import { FaStar } from "react-icons/fa";


export const Minicard = styled.div`
  background: white;
  border-radius: 10px;
  padding: 15px;
  display: flex;
  justify-content: space-between;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  cursor: pointer;
`
export const Mulherimg = styled.img`
  background: #ddd;
  border-radius: 50%;
  width: 50px;
  height: 50px;
  margin-right: 10px;
`
export const CardDescription = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  color:var(--dark-orange) ;
  line-height:16px;

  h3{
    font-size: 18px;
    padding-bottom:3px;
  }

  p {
    font-size: 15px;
    padding-bottom: 3px;
  }

`
export const Distance = styled.div`
  display: flex;

  img {
    width: 20px;
  }
`
export const StarIcon = styled(FaStar)`
  width: 16px;
  color: #FABC03;

`
export const ContainerIcon = styled.div`
  display:flex;
  align-items: flex-start;
`