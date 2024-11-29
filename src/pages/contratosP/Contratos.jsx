import * as S from './Contratos.styles'
import NavU from 'Components/navbar/Nav.usuario'
import SideBar from 'Components/sidebar/Sidebar'
import { useNavigate } from 'react-router-dom'


const Contratos = () => {

    return (

        <S.PageWrapper>
            <NavU />
            <S.PageContent>
                <SideBar />
                <S.Contract>
                    <>
                    <h1>Seus Contratos: </h1>
                    
                    
                    
                    </>
                </S.Contract>
            </S.PageContent>
        </S.PageWrapper>
    )
}

export default Contratos;

