
import IconPerfil from 'imagesTrilha/iconPerfilT.svg'
import IconTrilha from 'imagesTrilha/iconTrilhaT.svg'
import IconContract from 'imagesTrilha/iconContract.svg'
import IconConfig from 'imagesTrilha/iconConfigT.svg'
import IconOut from 'imagesTrilha/Out.svg'
import {SideBarStyle}  from './Sidebar.styles'

function SideBar() {

    return (

        <SideBarStyle>        
            <ul>
                <li><img src={IconPerfil}></img> <a href="/Perfil">Perfil</a></li>
                <li><img src={IconTrilha}></img> <a href="/Trilha">Trilha de desenvolvimento</a></li>
                <li><img src={IconConfig}></img> <a href="/Configuracao">Configuração</a></li>
                <li><img src={IconContract}></img> <a href="/Contratos">Contratos</a></li>
            </ul>

            <hr class="linha"></hr>

            <ul>               
                <li><img src={IconOut}></img> <a href="/">Sair</a></li>
            </ul>
        </SideBarStyle>
    )
}

export default SideBar;
