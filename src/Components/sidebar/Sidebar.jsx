
import IconPerfil from 'imagesTrilha/iconPerfilT.svg'
import IconTrilha from 'imagesTrilha/iconTrilhaT.svg'
import IconContract from 'imagesTrilha/iconContract.svg'
import IconCalendar from 'imagesTrilha/iconCalendarT.svg'
import IconConfig from 'imagesTrilha/iconConfigT.svg'
import {SideBarStyle}  from './Sidebar.styles'

function SideBar() {

    return (

        <SideBarStyle>        
            <ul>
                <li><img src={IconPerfil}></img> <a href="/Perfil">Perfil</a></li>
                <li><img src={IconTrilha}></img> <a href="/Trilha">Trilha de desenvolvimento</a></li>
                <li><img src={IconContract}></img> <a href="#contrato">Contratos</a></li>
                <li><img src={IconCalendar}></img> <a href="#calendario">Calendário</a></li>
                <li><img src={IconConfig}></img> <a href="#configuracao">Configuração</a></li>
            </ul>

            <hr class="linha"></hr>
        </SideBarStyle>
    )
}

export default SideBar;
