import * as S from './Trilha.styles';
import imgHeader from '../../imagesTrilha/imgHeader.svg'
import laptop from '../../imagesTrilha/laptop.svg'
import grafic from '../../imagesTrilha/grafic.svg'
import grow from '../../imagesTrilha/grow.svg'
import Button from 'Components/botaoglobal/Button';
import { useNavigate } from 'react-router-dom';
import NavU from 'Components/navbar/Nav.usuario';
import SideBarStyle from 'Components/sidebar/Sidebar';

const Trilha = () => {
    const navigation = useNavigate()

    return (
        <S.PageWrapper>
            <NavU />
            <S.PageContent>
                <SideBarStyle />
                <S.ContentWrapper>

                    <S.Header>
                        <img src={imgHeader}></img>
                        <S.Section>
                            <S.SectionTitle>
                                <h1>Olá, Sueli!</h1>
                                <h2>Bem vinda a trilha de desenvolvimento!</h2>
                                <p>Este é o um espaço de aprendizado projetado para capacitar mulheres em conhecimentos essenciais sobre gestão financeira, planejamento, investimento e muito mais.
                                    Cada etapa terá o conteúdo e um quiz para testar suas habilidades, estabeleça sua meta e inicie essa jornada! </p>
                            </S.SectionTitle>
                        </S.Section>
                    </S.Header>

                    <S.iconSection>
                        <S.ContainerText>
                            <S.iconText>
                                <img src={laptop}></img>
                                <h3>Aprenda</h3>
                                <p>Aprenda sobre gestão financeira, <br />planejamento e
                                    investimento para o seu negócio.</p>
                            </S.iconText>

                            <S.line></S.line>

                            <S.iconText>
                                <img src={grafic}></img>
                                <h3>Pratique</h3>
                                <p>Ao final da trilha, realize nosso quiz <br />e teste seus conhecimentos.</p>
                            </S.iconText>

                            <S.line></S.line>

                            <S.iconText>
                                <img src={grow}></img>
                                <h3>Cresça</h3>
                                <p>Amadureça sua relação com o dinheiro<br /> e alcance a segurança financeira</p>
                            </S.iconText>
                        </S.ContainerText>
                    </S.iconSection>

                    <S.CardGrid>
                        <S.Card>
                            <div class="circleNumber">1</div>
                            <h3>Fundamentos Financeiros</h3>
                            <p>Aprenda os conceitos básicos de
                                finanças, como ativos, passivos e juros,
                                para entender como o dinheiro funciona.</p>
                        </S.Card>

                        <S.Card>
                            <div class="circleNumber">2</div>
                            <h3>Registro de  Gastos</h3>
                            <p>Aprenda a controlar seus gastos mensais para identificar áreas de economia e melhorar sua gestão financeira.</p>
                        </S.Card>

                        <S.Card>
                            <div class="circleNumber">3</div>
                            <h3>Criação de Orçamento</h3>
                            <p>Descubra como montar um orçamento pessoal equilibrado, garantindo uma gestão financeira sustentável</p>
                        </S.Card>

                        <S.Card>
                            <div class="circleNumber">4</div>
                            <h3>Fundo de Emergência</h3>
                            <p>Compreenda a importância de ter uma reserva financeira para imprevistos.</p>
                        </S.Card>

                        <S.Card>
                            <div class="circleNumber">5</div>
                            <h3>Poupança e
                                Investimentos</h3>
                            <p>Vamos ajudá-la a estabelecer objetivos realistas, sejam eles para investimentos ou aposentadoria.</p>
                        </S.Card>

                        <S.Card>
                            <div class="circleNumber">6</div>
                            <h3>Planejamento de Metas</h3>
                            <p>Compreenda a importância de ter uma reserva financeira para imprevistos.</p>
                        </S.Card>

                        
                    </S.CardGrid>

                    <Button href='/ConteudoTrilha1'> Inicie sua Trilha</Button>

                </S.ContentWrapper>
            </S.PageContent>
        </S.PageWrapper>
    )};

export default Trilha;