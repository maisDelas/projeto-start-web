import LogoMarrom from "assets/Logo-nav.svg"
import mule from "assets/imgPersona2.svg"
import Pin from "assets/Pin-mapa.svg"
import * as S from "./Modal.styles"

function Modal({ isOpen, setModalOpen}) {
 
    <S.BackGround>
        
        <S.Container>
       
          <S.Logo src={LogoMarrom} />
          <S.Section>
            <S.Porfile src={mule} />
            <S.InfoContainer>
              <S.Description>
                <S.DescriptionContent>
                  <S.Name>Sueli Almeida</S.Name>
                  <S.Profession>Arquiteta</S.Profession>
                  <S.Locality>
                    <S.Pin src={Pin} />
                    <S.Distance> 3 Km</S.Distance>
                  </S.Locality>
                </S.DescriptionContent>
                <S.ContainerIcon>
                  <S.IconStar />
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

          <S.ContainerClose  onClick={setModalOpen}>
            <S.Close />
          </S.ContainerClose>

        </S.Container>
      </S.BackGround>
 
  
}

export default Modal
