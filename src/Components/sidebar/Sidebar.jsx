import * as S from './Sidebar.styles'
import IconPerfil from '../../imagesTrilha/iconPerfilT.svg'
import IconTrilha from '../../imagesTrilha/iconTrilhaT.svg'
import IconContract from '../../imagesTrilha/iconContract.svg'
import IconCalendar from '../../imagesTrilha/iconCalendarT.svg'
import IconConfig from '../../imagesTrilha/iconConfigT.svg'



<S.Sidebar>
    <ul>
        <li><img src={IconPerfil}></img> <a href="#perfil">Perfil</a></li>
        <li><img src={IconTrilha}></img> <a href="#trilha">Trilha Financeira</a></li>
        <li><img src={IconContract}></img> <a href="#contrato">Contratos</a></li>
        <li><img src={IconCalendar}></img> <a href="#calendario">Calendário</a></li>
        <li><img src={IconConfig}></img> <a href="#configuracao">Configuração</a></li>
    </ul>

    <hr class="linha"></hr>

</S.Sidebar>
