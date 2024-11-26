import Carrossel from "./Carrossel"
import Footer from "Components/footer/Footer"
import staticService from "Components/cardsService/StaticService"
import { StyleButton } from "../../Components/botaoglobal/Button.style"
import Card from "Components/cardsService/cardService"
import * as S from "./Home.styles"
import NavBar from "Components/navbar/Navbar" 
import HomeContainer from "./HomeContainer"


function Home() {
  return (
    <div>
      <NavBar />
      <HomeContainer/>
      {/* Sessão de Titulo e Video */}
      <S.Title>
        {" "}
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
          {staticService.map((x, i) => (
            <Card key={`Card_${i}`} {...x} />
          ))}
        </S.Cardcontainer>
        {/* Botão para o mapeamento */}
        <StyleButton><a href="/Map">Ir para o mapeamento</a></StyleButton>
      </S.Bgcard>

      <Carrossel />

      <Footer />
    </div>
  )
}

export default Home;
