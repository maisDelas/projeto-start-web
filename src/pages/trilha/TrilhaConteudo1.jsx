
import * as S from './TrilhaConteudo.styles1';
import OnGoing from 'imagesTrilha/OnGoing.svg';
import checked from 'imagesTrilha/checked.svg';
import { useNavigate } from "react-router-dom";
import Button from "Components/botaoglobal/Button";
import NavU from "Components/navbar/Nav.usuario";
import SideBarStyle from 'Components/sidebar/Sidebar';


const ConteudoTrilha1 = () => {
    const navigation = useNavigate()

    return (

        <S.PageWrapper>
            <NavU />
            <S.PageContent>
                <SideBarStyle />
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
                    <Button className='Buttom' onClick={() => navigation('/ConteudoTrilha2')}>Próximo</Button>

                </S.MainContent>
            </S.PageContent>
        </S.PageWrapper>

    )}

export default ConteudoTrilha1;