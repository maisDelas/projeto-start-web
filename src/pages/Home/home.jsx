import styles from './home.module.css'
import Footer from '../../Components/footer/Footer.jsx'
import staticService from '../../Components/cardsService/staticService';
import { Stylebutton } from '../../Components/botaoglobal/Button.style';
import Card from '../../Components/cardsService/cardService';





function Home() {
    return (

         <div>
            {/* Sessão de Titulo e Video */}
            <div className={styles.title}>
                <h2>Conheça um pouco a +Delas:</h2>
            </div>


            <div className={styles.bgcards}>

                <div className={styles.videoContainer}>
                    <iframe className={styles.video} width="600" height="360" src="https://www.youtube.com/embed/UXwPz61lxBY?si=kMwtBZjDrElhp0lP" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
                </div>

                {/* Sessão Buscando Serviços */}
                <div className={styles.titlee}>
                    <h2>Buscando algum serviço?</h2>
                </div>

                <div className={styles.container}>

                    <div className={styles.fileira}>

                        {staticService.map( (x,i) => <Card key={`Card_${i}`} {...x} />)}

                    </div>

                </div>
                {/* Ultimo Botão */}
                <div className={styles.bottomEnd}>
                    <Stylebutton>Ir para o mapeamento</Stylebutton>
                </div>
            </div>
            <Footer />
        </div>
      
    )
}

export default Home;




 // <div>
        //     <Title>
        //         <h2>Conheça um pouco a +Delas:</h2>
        //     </Title>
        //     <Containervideo><iframe className={styles.video} width="600" height="360" src="https://www.youtube.com/embed/UXwPz61lxBY?si=kMwtBZjDrElhp0lP" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe></Containervideo>
        //     <Bgcard></Bgcard> 
            
        //     <Card></Card>

        // </div>
