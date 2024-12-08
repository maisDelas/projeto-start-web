import styled from "styled-components"
import {
  FaStar,
  FaInstagramSquare,
  FaFacebookSquare,
  FaLinkedin,
} from "react-icons/fa"
import Button from '../botaoglobal/Button'
import { MdEmail, MdClose } from "react-icons/md"
import { BsFillTelephoneInboundFill } from "react-icons/bs"

export const BackGround = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: rgb(0, 0, 0, 0.7);
  z-index: 1000;
`
export const Container = styled.dialog`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 750px;
  height: 600px;
  background-color: #f2f2f2;
  border-radius: 10px;
`
export const Logo = styled.img`
  width: 140px;
`
export const Porfile = styled.img`
  width: 240px;
  padding-inline: 20px;
  margin-left: 20px;
`
export const Section = styled.div`
  width: 100%;
  display: flex;
  margin-top: 25px;
`
export const InfoContainer = styled.div`
  display: flex;
  flex-direction: column;
`
export const Description = styled.div`
  margin-left: 60px;
  display: flex;
  gap: 50px;
`
export const DescriptionContent = styled.div`
  display: flex;
  flex-direction: column;
`
export const Name = styled.h3`
  font-size: 30.7px;
  color: #F2913D;
`
export const Profession = styled.p`
  font-size: 19.8px;
  color: #F2913D;
`
export const Locality = styled.div`
  display: flex;
  gap: 5px;
  margin-top: 5px;
`
export const Pin = styled.img`
  width: 26px;
`
export const Distance = styled.p`
  font-size: 15.8px;
  color: #F2913D;
`
export const IconStar = styled(FaStar)`
  width: 20px;
  color: #fabc03;
`
export const ContainerIcon = styled.div`
  display: flex;
`
export const Summarire = styled.div`
  width: 370px;
  margin-left: 60px;
  margin-top: 30px;
`
export const Information = styled.p`
  font-size: 15.8px;
  color: #706D6D;
  font-weight: bold;
`
export const Contract = styled(Button)`
  margin-left: 0;
  margin-top: 25px;
`
export const ContactsContainer = styled.div`
  width: 100%;
  margin-top: 30px;
`
export const ContactsConatent = styled.div`
  margin-top: 20px;
  display: flex;
  gap: 100px;
`

export const Title = styled.h3`
  font-size: 30.7px;
  color: #F2913D;
  margin-left: 40px;
`
export const Email = styled.div`
  display: flex;
  gap: 10px;
  margin-left: 40px;
`
export const IconEmail = styled(MdEmail)`
  color: #F2913D;
`
export const Telephone = styled.div`
  display: flex;
  gap: 10px;
  margin-left: 40px;
  margin-top: 10px;
`
export const IconTelephone = styled(BsFillTelephoneInboundFill)`
  color: #F2913D;
`
export const Text = styled.a`
  color: #706D6D;
`
export const PessoalContent = styled.div`
  /* display: flex; */
`
export const SocialContent = styled.div`
  display: flex;
  gap: 30px;
`
export const Division = styled.div``

export const IconInstagram = styled(FaInstagramSquare)`
  color: #F2913D;
  font-size: 40px;
`
export const IconFacebook = styled(FaFacebookSquare)`
  color: #F2913D;
  font-size: 40px;
`
export const IconLinkedin = styled(FaLinkedin)`
  color:#F2913D;
  font-size: 40px;
`
export const ContainerClose = styled.div`
  background-color: #F2913D;
  position: absolute;
  top: 0;
  right: -39px;
  border-radius: 10px;
  padding: 15px;
  transform: translateX(100%);
  aspect-ratio: 1/1;
  display: flex;
  place-content: center;
  cursor: pointer;
`
export const Close = styled(MdClose)`
  color: white;
  font-size: 25px;
  aspect-ratio: 1/1;
`
