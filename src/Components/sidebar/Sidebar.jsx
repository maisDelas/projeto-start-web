
import IconPerfil from 'imagesTrilha/iconPerfilT.svg'
import IconTrilha from 'imagesTrilha/iconTrilhaT.svg'
import IconConfig from 'imagesTrilha/iconConfigT.svg'
import {SideBarStyle}  from './Sidebar.styles'

function SideBar() {

    return (

        <SideBarStyle>        
            <ul>
                <li><img src={IconPerfil}></img> <a href="/Perfil">Perfil</a></li>
                <li><img src={IconTrilha}></img> <a href="/Trilha">Trilha de desenvolvimento</a></li>
                <li><img src={IconConfig}></img> <a href="#configuracao">Configuração</a></li>
            </ul>

            <hr class="linha"></hr>
        </SideBarStyle>
    )
}

export default SideBar;
