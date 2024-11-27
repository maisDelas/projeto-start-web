import * as S from "./Cards.style";
import Pin from 'assets/Pin-mapa.svg'
import Modal from "Components/modal/Modal"
import { useState } from "react";





function Cards ({photo, name, profession, distance, classification}){

  const [openModal, setOpenModal] = useState(false) 

  return (
   <S.Minicard onClick={() => setOpenModal(true)}>
    <S.Mulherimg src={photo}/>
      <S.CardDescription>
        <h3>{name}</h3>
        <p>{profession}</p>
        <S.Distance>
          <img src={Pin}/>
          <p>{distance}</p>
        </S.Distance>
      </S.CardDescription>
      <S.ContainerIcon>
       {Array.from({length:classification}).map(() => (
          <S.StarIcon/>
        ))}
       </S.ContainerIcon>
       <Modal isOpen={openModal}/>
   </S.Minicard>
  )
}

export default Cards;