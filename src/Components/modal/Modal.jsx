import LogoMarrom from "assets/Logomarron.svg"
import mule from "assets/imgPersona2.svg"
import Pin from "assets/Pin-mapa.svg"
import * as S from "./Modal.styles"
import useModal from "pages/mapeamento/hooks/useModal"
import InfoCards from "pages/mapeamento/InfoCards"
import { StarIcon } from "lucide-react"


function Modal() {
  console.log("Modal")

  const  { closeModal, setCard, card} = useModal()
  const {photo, name, profession, distance, classification} = card
  function handleOnCloseModal(e) {
    e.stopPropagation()
    setCard(null)
    closeModal()
    // setIsModalOpen(false)
  }
 console.log(card)

  return (
    <S.BackGround>
      <S.Container>
        <S.Logo src={LogoMarrom} />
        <S.Section>
          <S.Porfile src={photo} />
          <S.InfoContainer>
            <S.Description>
              <S.DescriptionContent>
                <S.Name>{name}</S.Name>
                <S.Profession>{profession}</S.Profession>
                <S.Locality>
                  <S.Pin src={Pin} />
                  <S.Distance>{distance}</S.Distance>
                </S.Locality>
              </S.DescriptionContent>
              <S.ContainerIcon>
              {Array.from({ length: classification }, ()=> <S.IconStar/>)}
                {/* <S.IconStar /> */}
              </S.ContainerIcon>
            </S.Description>

            <S.Summarire>
              <S.Information>
                Me chamo Sueli, sou Arquiteta e apaixonada pelo design
                sustentável, com experiência em projetos residenciais e
                comerciais. Formada pela UFPE, desenvolvi habilidades em
                software de modelagem 3D e gestão de projetos. Busco uma
                oportunidade para contribuir com minha visão inovadora e
                colaborar em equipes dinâmicas.
              </S.Information>
              <S.Contract>Contrate</S.Contract>
            </S.Summarire>
          </S.InfoContainer>
        </S.Section>

        <S.ContactsContainer>
          <S.Title>Contatos:</S.Title>

          <S.ContactsConatent>
            <S.PessoalContent>
              <S.Email>
                <S.IconEmail />
                <S.Text>sueliAS@gmail.com</S.Text>
              </S.Email>

              <S.Telephone>
                <S.IconTelephone />
                <S.Text>(81) 9 9999-9999</S.Text>
              </S.Telephone>
            </S.PessoalContent>

            <S.SocialContent>
              <S.IconInstagram />
              <S.IconFacebook />
              <S.IconLinkedin />
            </S.SocialContent>
          </S.ContactsConatent>
        </S.ContactsContainer>

        <S.ContainerClose onClick={handleOnCloseModal}>
          <S.Close />
        </S.ContainerClose>
      </S.Container>
    </S.BackGround>
  )
}

export default Modal
