import LogoMarrom from "assets/Logo-nav.svg"
import * as S from "./Modal.styles"

function Modal({ isOpen }) {
   if (isOpen) {
     return(
      <S.BackGround>
        <S.Container open>
          <S.Logo src={LogoMarrom}/>
          
        </S.Container>
     </S.BackGround>
     )
   }
  return null
  // return (
  //   <S.BackGround>
  //     <S.Container open>
  //       <S.Logo src={LogoMarrom}/>
  //     </S.Container>
  //   </S.BackGround>
  // )
}

export default Modal
