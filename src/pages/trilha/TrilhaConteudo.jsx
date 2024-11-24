import React from "react";
import * as S from './TrilhaConteudo.styles'
import logo from '../../imagesTrilha/LogoDelas.svg'
import IconPerfil from '../../imagesTrilha/iconPerfilT.svg'
import IconTrilha from '../../imagesTrilha/iconTrilhaT.svg'
import IconContract from '../../imagesTrilha/iconContract.svg'
import IconCalendar from '../../imagesTrilha/iconCalendarT.svg'
import IconConfig from '../../imagesTrilha/iconConfigT.svg'
import OnGoing from '../../imagesTrilha/OnGoing.svg'
import checked from '../../imagesTrilha/checked.svg'
import { useNavigate } from "react-router-dom";


const ConteudoTrilha = () => {
    const navigation = useNavigate()

    return (

        <S.PageWrapper>
            <S.Nav>
                <div>
                    <img className="Logo" src={logo} alt="logoIcon" />
                </div>
                <S.LinksNav>
                    <a onClick={() => navigation('/')}>Página inicial</a>
                    <a href="contato">Fale Conosco</a>
                </S.LinksNav>
                <S.PerfilNav>
                    <div className="Circulo">U</div>
                    <div className="nome">Sueli123</div>
                    <div className="seta">▼</div>
                </S.PerfilNav>
            </S.Nav>

            <S.PageContent>
                <S.Sidebar>
                    <ul>
                        <li><img src={IconPerfil}></img> <a href="#perfil">Perfil</a></li>
                        <li><img src={IconTrilha}></img> <a href="#trilha">Trilha Financeira</a></li>
                        <li><img src={IconContract}></img> <a href="#contrato">Contratos</a></li>
                        <li><img src={IconCalendar}></img> <a href="#calendario">Calendário</a></li>
                        <li><img src={IconConfig}></img> <a href="#configuracao">Configuração</a></li>
                    </ul>

                    <hr className="linha"></hr>
                </S.Sidebar>

                <S.MainContent>

                    {/* <S.Header>
                        <S.HeaderText>
                            <h1>Olá, Sueli!</h1>
                            <h2>Bem vinda a trilha de desenvolvimento!</h2>
                            <p>Este é o seu espaço de aprendizado.
                                Cada etapa terá o conteúdo e um quiz para testar suas habilidades,<br /> estabeleça sua meta e inicie essa jornada! </p>
                        </S.HeaderText>
                    </S.Header> */}

                    <S.ProcessContainer>
                        <S.Process>
                            <img src={OnGoing} alt="OnGoingImage" />
                            <h3>Em andamento:</h3>
                            <p>Investindo no seu Negócio</p>
                        </S.Process>
                        <S.Process>
                            <img src={checked} alt="CheckedImage" />
                            <h3>Completo:</h3>
                            <h1>1/6</h1>
                        </S.Process>
                    </S.ProcessContainer>

                    <S.ProcessTitle>
                        <h1 className="title1">Etapa 1: Investindo no seu negócio</h1>
                        <h1 className="title2">Conteúdo</h1>
                    </S.ProcessTitle>

                </S.MainContent>


            </S.PageContent>
        </S.PageWrapper>

    )
}

export default ConteudoTrilha; 