import * as S from "./Cards.style";
import Pin from 'assets/Pin-mapa.svg'




function Cards ({photo, name, profession, distance}){
  return (
   <S.Minicard>
    <S.Mulherimg src={photo}/>
      <S.CardDescription>
        <h3>{name}</h3>
        <p>{profession}</p>
        <S.Distance>
          <img src={Pin}/>
          <p>{distance}</p>
        </S.Distance>
        <S.StarIcon/>
      </S.CardDescription>
   </S.Minicard>
  )
}

export default Cards;




{/* <S.Minicard>
    <S.Mulherimg src={Mulher1}/>
      <S.CardDescription>
        <h3>Vitoria Santos</h3>
        <p>Designer</p>
        <S.Distance>
          <img src={Pin}/>
          <p>2.5 km</p>
        </S.Distance>
        <S.StarIcon/>
      </S.CardDescription>
   </S.Minicard> */}