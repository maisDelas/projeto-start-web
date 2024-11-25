import React from "react";
import * as S from './TrilhaConteudo1.styles'
import logo from '../../imagesTrilha/LogoDelas.svg'
import IconPerfil from '../../imagesTrilha/iconPerfilT.svg'
import IconTrilha from '../../imagesTrilha/iconTrilhaT.svg'
import IconContract from '../../imagesTrilha/iconContract.svg'
import IconCalendar from '../../imagesTrilha/iconCalendarT.svg'
import IconConfig from '../../imagesTrilha/iconConfigT.svg'
import OnGoing from '../../imagesTrilha/OnGoing.svg'
import checked from '../../imagesTrilha/checked.svg'
import { useNavigate } from "react-router-dom";
import Button from "Components/botaoglobal/Button";


const ConteudoTrilha2 = () => {
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

                            <ol>
                                <li> Planejamento e Estruturação
                                    <ul>
                                        <li>Plano de negócios: Crie ou avalie um plano sólido que inclua objetivos, estratégias, projeções financeiras e plano de ação.</li>
                                        <li>Estrutura legal: Escolha o tipo de empresa (MEI, EPP, Ltda., etc.) e registre adequadamente.</li>

                                    </ul>
                                </li>
                                <li>Fontes de Financiamento
                                    <ul>
                                        <li>Capital próprio: Dinheiro pessoal ou economias.</li>
                                        <li>Investidores: Sócios, investidores-anjo ou fundos de venture capital.</li>
                                        <li>Empréstimos: Bancos, fintechs ou linhas de crédito específicas.</li>
                                        <li>Crowdfunding: Financiamento coletivo com apoio do público.</li>
                                    </ul>
                                </li>
                                <li>Riscos e Mitigação
                                    <ul>
                                        <li>Riscos financeiros: Fluxo de caixa negativo ou retorno abaixo do esperado.</li>
                                        <li>Riscos operacionais: Problemas com fornecedores, produção ou equipe.</li>
                                        <li>Riscos de mercado: Mudanças na demanda, concorrência ou crises econômicas.</li>
                                        <li>Mitigação: Diversifique, faça seguros, tenha reservas financeiras e revise constantemente sua estratégia.</li>
                                    </ul>
                                </li>
                                <li>Gestão e Acompanhamento
                                    <ul>
                                        <li>Gestão eficiente: Controle financeiro, operacional e estratégico.</li>
                                        <li>Monitoramento contínuo: Avalie métricas de desempenho, KPIs e feedback do mercado.</li>
                                        <li>Capacitação: Invista no aprimoramento da equipe e em tecnologia.</li>
                                    </ul>
                                </li>
                            </ol>

                        </S.Text>



                    </S.TextContainer>

                    <div className="ButtonStyle">
                        <Button>Próximo</Button>
                        <Button onClick={()=>navigation('/ConteudoTrilha1')}>Voltar</Button>
                    </div>


                </S.MainContent>



            </S.PageContent>
        </S.PageWrapper>

    )
}

export default ConteudoTrilha2;