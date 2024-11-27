import Carrossel from "./Carrossel"
import Footer from "Components/footer/Footer"
import staticService from "Components/cardsService/StaticService"
import { StyleButton } from "../../Components/botaoglobal/Button.style"
import Card from "Components/cardsService/CardService"
import * as S from "./Home.styles"
import NavBar from "Components/navbar/navbar" 
import Card from "Components/cardsService/cardService"
import * as S from "./Home.styles"
import NavBar from "Components/navbar/Navbar" 
import HomeContainer from "./HomeContainer"

import Carrossel from "./Carrossel";
import Footer from "Components/Footer/Footer";
import Card from "Components/cardsService/cardService";
import * as S from "pages/home/Home.styles";
import NavBar from "Components/navbar/navbar";
import StaticService from "Components/cardsService/StaticService";
import { StyleButton } from "Components/botaoglobal/Button.style";
import Logowhite from 'assets/Logobranca.svg'
import imgMulheres from 'assets/imgMulheres.svg'

function Home() {
  return (
    <>
      <NavBar />
      <S.Hero>

        <img src={Logowhite} alt="" />
        <h1>Junte-se à nossa comunidade <br />
          e transforme sua trajetória! </h1>
      </S.Hero>
     

      <S.ImageSection>
        <img src={imgMulheres} alt="imgMulheres" />
      </S.ImageSection>
      <S.Title>

        <h2>Conheça um pouco a +Delas:</h2>
      </S.Title>
      <S.Bgcard>
        <S.Containervideo>
          <S.Styledifreme
            width="600"
            height="360"
            src={`https://www.youtube.com/embed/UXwPz61lxBY?si=kMwtBZjDrElhp0lP`}
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </S.Containervideo>

        {/* Sessão Buscando Serviços */}

        <S.Styletitle>
          {" "}
          <h2>Buscando algum serviço?</h2>
        </S.Styletitle>
        <S.Cardcontainer>
          {StaticService.map((x, i) => (<Card key={`Card_${i}`} {...x} />))}
        </S.Cardcontainer>
        {/* Botão para o mapeamento */}

        <StyleButton><a href="/Map">Ir para o mapeamento</a></StyleButton>
      </S.Bgcard>

      <Carrossel />

      <Footer />
    </>
  )
}

export default Home;
