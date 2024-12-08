import * as S from "./Cards.style"
import Pin from "../../assets/Pin-mapa.svg"
// import Modal from "Components/modal/Modal"
import useModal from "./hooks/useModal"
import InfoCards from "./InfoCards"

function Cards({ id, photo, name, profession, distance, classification }) {
  // const [isModalOpen, setIsModalOpen] = useState(false)

  const  { openModal, setCard} = useModal()
  function handlclickCards (){
    openModal()
    setCard(InfoCards.find(x => x.id === id))
  }
 console.log(InfoCards.find(x => x.id === id))
  return (
    <S.Minicard onClick={handlclickCards}>
      <S.Mulherimg src={photo} />
      <S.CardDescription>
        <h3>{name}</h3>
        <p>{profession}</p>
        <S.Distance>
          <img src={Pin} />
          <p>{distance}</p>
        </S.Distance>
      </S.CardDescription>
      <S.ContainerIcon>
        {Array.from({ length: classification }).map(() => (
          <S.StarIcon />
        ))}
      </S.ContainerIcon>

    </S.Minicard>
  )
}

export default Cards
