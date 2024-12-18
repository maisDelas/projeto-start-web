import * as S from 'pages/trilha/TrilhaConteudo.styles1'
import OnGoing from 'imagesTrilha/OnGoing.svg'
import checked from 'imagesTrilha/checked.svg'
import { useNavigate } from "react-router-dom";
import Button from "Components/botaoglobal/Button";
import NavU from "Components/navbar/Nav.usuario";
import SideBarStyle from 'Components/sidebar/Sidebar';
import QuizComponent from 'Components/quiz/quiz';


const ConteudoTrilha2 = () => {
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
                            <QuizComponent/>
                        </S.Text>
                    </S.TextContainer>
                    <Button>Próximo</Button>
                    <Button onClick={() => navigation('/ConteudoTrilha1')}>Voltar</Button>

                </S.MainContent>
            </S.PageContent>
        </S.PageWrapper>
    )}

export default ConteudoTrilha2;