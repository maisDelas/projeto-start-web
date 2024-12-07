
import * as S from './TrilhaConteudo.styles1';
import OnGoing from 'assets/OnGoing.svg';
import checked from 'assets/checked.svg';
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
                            <p>Gestão Financeira</p>
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
                        <h1 className="title1">Etapa 1: Gestão Financeira</h1>
                        <h1 className="title2">Conteúdo</h1>
                    </S.ProcessTitle>

                    <S.TextContainer>

                        <S.Text>
                            <h2>Como gerir um negócio?</h2>
                            <p>A gestão financeira é essencial para o sucesso de qualquer negócio, pois ajuda a garantir que os recursos sejam usados de forma eficiente. Aqui estão algumas práticas simples e eficazes para manter suas finanças sob controle:</p>
                            <ol>
                                <li><span>Controle de Fluxo de Caixa</span> <br />
                                    Monitore as entradas e saídas de dinheiro regularmente. Isso garante que você tenha dinheiro disponível para cobrir as despesas e realizar investimentos. Utilize ferramentas simples, como planilhas ou aplicativos financeiros, para registrar cada movimento.
                                </li>

                                <li><span>Planejamento Financeiro:</span> <br />
                                    Estabeleça metas claras para sua receita e despesas. Divida-as por períodos (mensais, trimestrais) para acompanhar o progresso e ajustar os planos quando necessário. Isso ajuda a evitar surpresas e a tomar decisões mais informadas.
                                </li>

                                <li><span>Análise de Custo e Despesa:</span><br />
                                    Revise regularmente seus custos e veja onde é possível reduzir gastos. Isso pode ser feito renegociando fornecedores ou ajustando processos internos. Entender o que está consumindo mais recursos permite melhorar a rentabilidade.
                                </li>

                                <li><span>Ultilize a Tecnologia:</span><br />
                                Ferramentas como sistemas de gestão financeira e aplicativos de fluxo de caixa podem automatizar processos e reduzir erros. Isso facilita a tomada de decisões rápidas e precisas.
                                </li>

                                <li><span>Tenha uma Reserva de Emergência:</span><br />
                                Planeje ter uma reserva financeira para cobrir períodos de baixa nas vendas ou despesas inesperadas. Isso ajuda a manter o negócio funcionando sem precisar recorrer a crédito ou empréstimos.
                                </li>
                            </ol>

                            <p>Com essas ações simples, você pode melhorar o controle financeiro do seu negócio, garantindo mais estabilidade e possibilidades de crescimento.</p>

                        </S.Text>
                    </S.TextContainer>
                    <Button className='Buttom' onClick={() => navigation('/ConteudoTrilha2')}>Próximo</Button>

                </S.MainContent>
            </S.PageContent>
        </S.PageWrapper>

    )
}

export default ConteudoTrilha1;