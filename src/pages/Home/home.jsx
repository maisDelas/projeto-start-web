import Carrossel from "./Carrossel"
<<<<<<< HEAD
import Footer from "Components/footer/footer"
import staticService from "../../Components/cardsService/StaticService"
import { StyleButton } from "../../Components/botaoglobal/Button.style"
import Card from "Components/cardsService/CardService"
import * as S from "./Home.styles.js"
import NavBar from "Components/navbar/Navbar" 
=======
import Footer from "../../Components/footer/footer"
import staticService from "../../Components/cardsService/StaticService"
import { StyleButton } from "../../Components/botaoglobal/Button.style"
import Card from "../../Components/cardsService/CardService"
import * as S from "./Home.styles.js"
import NavBar from "../../Components/navbar/Navbar" 

>>>>>>> d82469c41623ffc2caad1f8103e80ee03e87f969

function Home() {
  return (
    <div>
      <NavBar />
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
