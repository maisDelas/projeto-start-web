import React from "react";
import * as S from './TrilhaConteudo.styles1';
import logo from 'imagesTrilha/LogoDelas.svg';
import IconPerfil from 'imagesTrilha/iconPerfilT.svg';
import IconTrilha from 'imagesTrilha/iconTrilhaT.svg';
import IconContract from 'imagesTrilha/iconContract.svg';
import IconCalendar from 'imagesTrilha/iconCalendarT.svg';
import IconConfig from 'imagesTrilha/iconConfigT.svg';
import OnGoing from 'imagesTrilha/OnGoing.svg';
import checked from 'imagesTrilha/checked.svg';
import { useNavigate } from "react-router-dom";
import Button from "Components/botaoglobal/Button";


const ConteudoTrilha1 = () => {
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
                        <li><img src={IconPerfil}></img> <a onClick={() => navigation('/Perfil')}>Perfil</a></li>
                        <li><img src={IconTrilha}></img> <a href="#trilha">Trilha Financeira</a></li>
                        <li><img src={IconContract}></img> <a href="#contrato">Contratos</a></li>
                        <li><img src={IconCalendar}></img> <a href="#calendario">Calendário</a></li>
                        <li><img src={IconConfig}></img> <a href="#configuracao">Configuração</a></li>
                    </ul>

                    <hr className="linha"></hr>
                </S.Sidebar>

                <S.MainContent>

                    <S.ProcessContainer>
                        <S.Process>
                            <div className="title">
                                <img src={OnGoing} alt="OnGoingImage" />
                                <h3>Em andamento:</h3>
                            </div>
                            <p>Investindo no <br /> seu Negócio</p>
                        </S.Process>
                        <S.Process>
                            <div className="title">
                                <img src={checked} alt="CheckedImage" />
                                <h3>Completo:</h3>
                            </div>
                            <h1>1/6</h1>
                        </S.Process>
                    </S.ProcessContainer>

                    <S.ProcessTitle>
                        <h1 className="title1">Etapa 1: Investindo no seu negócio</h1>
                        <h1 className="title2">Conteúdo</h1>
                    </S.ProcessTitle>

                    <S.TextContainer>

                        <S.Text>
                            <h2>Como investir em um negócio?</h2>
                            <p>Investir no próprio negócio é uma decisão estratégica que requer planejamento, organização e análise de riscos. Abaixo estão 7 passos e considerações que podem te ajudar a estruturar o investimento no seu próprio negócio:</p>
                            
                            <ol>
                                <li>Definição do Objetivo do Investimento
                                    <ul>
                                        <li>Por que investir? Determine se o objetivo é geração de renda, diversificação de portfólio, impacto social ou outro motivo.</li>
                                        <li>Horizonte de tempo: Avalie se o investimento é de curto, médio ou longo prazo.</li>
                                        
                                    </ul>
                                </li>
                                <li>Pesquisa e Análise
                                    <ul>
                                        <li>Estudo de mercado: Entenda o setor de atuação, tamanho do mercado, concorrência, tendências e oportunidades.</li>
                                        <li>Modelo de negócios: Avalie a proposta de valor, estrutura de custos, fontes de receita e escalabilidade do negócio.</li>
                                        <li>Análise financeira: Verifique a saúde financeira do negócio, incluindo faturamento, lucro, margens e fluxo de caixa.</li>
                                    </ul>
                                </li>
                                <li>Tipos de Investimento em Negócios
                                    <ul>
                                        <li>Negócios estabelecidos: Menor risco, mas requer maior capital inicial.</li>
                                        <li>Negócio próprio: Maior controle e liberdade, mas alta dedicação e risco.</li>               
                                    </ul>
                                </li>
                            </ol>
                            
                        </S.Text>

            

                    </S.TextContainer>

                    <Button onClick={() => navigation('/ConteudoTrilha2')}>Próximo</Button> 


                </S.MainContent>



            </S.PageContent>
        </S.PageWrapper>

    )
}

export default ConteudoTrilha1;