import * as S from "./Cards.style";
import Mulher1 from 'assets/imgPersona1.svg'

function Cards (){
  return (
   <S.Minicard>
    <S.Mulherimg src={Mulher1}/>
      <S.CardDescription>
        <h3>Vitoria Santos</h3>
        <p>Designer</p>
      </S.CardDescription>
   </S.Minicard>
  )
}

export default Cards;