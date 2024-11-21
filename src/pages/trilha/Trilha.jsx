import React from 'react';
import * as S from './Trilha.styles';
import IconPerfil from '../../imagesTrilha/iconPerfilT.svg'
import IconTrilha from '../../imagesTrilha/iconTrilhaT.svg'
import IconContract from '../../imagesTrilha/iconContract.svg'
import IconCalendar from '../../imagesTrilha/iconCalendarT.svg'
import IconConfig from '../../imagesTrilha/iconConfigT.svg'
import logo from '../../imagesTrilha/LogoDelas.svg'
import imgHeader from '../../imagesTrilha/imgHeader.svg'
import laptop from '../../imagesTrilha/laptop.svg'
import grafic from '../../imagesTrilha/grafic.svg'
import grow from '../../imagesTrilha/grow.svg'



const Trilha = () => {
    return (
        <S.PageWrapper>

            <S.Nav>
                <div>
                    <img className="Logo" src={logo} alt="logoIcon" />
                </div>
                <S.LinksNav>
                    <a href="home">Página inicial</a>
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
                        <li><img src={IconTrilha}></img> <a href="#trilha">Trilha</a></li>
                        <li><img src={IconContract}></img> <a href="#contrato">Contratos</a></li>
                        <li><img src={IconCalendar}></img> <a href="#calendario">Calendário</a></li>
                        <li><img src={IconConfig}></img> <a href="#configuracao">Configuração</a></li>
                    </ul>

                    <hr class="linha"></hr>

                </S.Sidebar>

                <S.ContentWrapper>

                    <S.Header>
                        <img src={imgHeader}></img>

                        <S.Section>

                            <S.SectionTitle>
                                <h1>O que nossa trilha oferece?</h1>
                                <p>Nossa trilha de educação financeira é projetada para capacitar prestadoras com conhecimentos essenciais sobre gestão financeira, planejamento e investimento. Através de conteúdos práticos e acessíveis, buscamos ajudar mulheres a alcançar maior segurança financeira em suas vidas pessoais e profissionais.</p>
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

                        <S.Card>
                            <div class="circleNumber">7</div>
                            <h3>Revisão e  Ajustes</h3>
                            <p>Ensinamos a importância da revisão periódica das suas finanças. Para manter o caminho de uma saúde financeira.</p>
                        </S.Card>

                        <S.Card>
                            <div class="circleNumber">8</div>
                            <h3>Quiz Final</h3>
                            <p>Aqui você vai testar suas novas habilidades e provar ser uma profissional capacitada!</p>
                        </S.Card>
                    </S.CardGrid>

                    <S.Button>Inicie sua Trilha</S.Button>

                </S.ContentWrapper>

            </S.PageContent>
        </S.PageWrapper>
    );
};

export default Trilha;