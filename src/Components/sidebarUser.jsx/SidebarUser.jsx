
import IconPerfil from 'assets/iconPerfil.svg'
import IconContract from 'assets/iconContract.svg'
import IconConfig from 'assets/iconConfig.svg'
import IconOut from 'assets/iconOut.svg'
import {SideBarStyle}  from 'Components/sidebar/Sidebar.styles.js'

function SideBar2() {

    return (

        <SideBarStyle>        
            <ul>
                <li><img src={IconPerfil}></img> <a href="/PerfilUser">Perfil</a></li>
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

export default SideBar2;
