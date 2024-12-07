import * as S from './Trilha.styles';
import imgHeader from 'assets/imgHeader.svg'
import laptop from 'assets/laptop.svg'
import grafic from 'assets/grafic.svg'
import grow from 'assets/grow.svg'
import Button from 'Components/botaoglobal/Button';
import { useNavigate } from 'react-router-dom';
import NavU from 'Components/navbar/Nav.usuario';
import SideBarStyle from 'Components/sidebar/Sidebar';
import num1 from 'assets/num1.svg'
import num2 from 'assets/num2.svg'
import num3 from 'assets/num3.svg'
import num4 from 'assets/num4.svg'
import num5 from 'assets/num5.svg'
import num6 from 'assets/num6.svg'

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
                                <p>Aprenda sobre Autoconfiança, <br />Planejamento,
                                    Investimento e muito mais.</p>
                            </S.iconText>

                            <S.line></S.line>

                            <S.iconText>
                                <img src={grafic}></img>
                                <h3>Pratique</h3>
                                <p>Ao final de cada conteúdo, realize nosso quiz <br />e teste seus conhecimentos.</p>
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
                            <div className='number'><img src={num1} alt="" /></div>
                            <h3>Gestão Financeira</h3>
                            <p>Aprenda estratégias para organizar e controlar as finanças do negócio, garantindo sustentabilidade e crescimento.</p>
                        </S.Card>

                        <S.Card>
                            <div className='number'><img src={num2} alt="" /></div>
                            <h3>Registro de  Gastos</h3>
                            <p>Aprenda a controlar seus gastos mensais para identificar áreas de economia e melhorar sua gestão financeira.</p>
                        </S.Card>

                        <S.Card>
                            <div className='number'><img src={num3} alt="" /></div>
                            <h3>Planejamento e Investimentos</h3>
                            <p>Como planejar e investir estrategicamente para impulsionar o crescimento do negócio.</p>
                        </S.Card>

                        <S.Card>
                            <div className='number'><img src={num4} alt="" /></div>
                            <h3>Desenvolvimento de Habilidades</h3>
                            <p>Aprenda a importância de adquirir e aprimorar habilidades essenciais para o sucesso profissional.</p>
                        </S.Card>

                        <S.Card>
                            <div className='number'><img src={num5} alt="" /></div>
                            <h3>Marca Pessoal e Networking</h3>
                            <p>Estratégias para fortalecer sua marca pessoal e construir conexões profissionais valiosas.</p>
                        </S.Card>

                        <S.Card>
                            <div className='number'><img src={num6} alt="" /></div>
                            <h3>Identidade e Confiança</h3>
                            <p>Como fortalecer a autoconfiança e construir uma identidade profissional sólida para destacar-se no mercado de trabalho.</p>
                        </S.Card>

                        
                    </S.CardGrid>

                    <Button > <a href="/ConteudoTrilha1">Inicie sua Trilha</a></Button>

                </S.ContentWrapper>
            </S.PageContent>
        </S.PageWrapper>
    )};

export default Trilha;