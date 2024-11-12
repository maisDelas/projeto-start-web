import cosmetics from '../../assets/cosmetics.svg'
import front_end_programming from '../../assets/front-end-programming.svg'
import image from '../../assets/image.svg'
import gears from '../../assets/gears.svg'
import heartbeat from '../../assets/heartbeat.svg'
import chef_hat from '../../assets/chef-hat.svg'

import styles from './home.module.css' 


function Home () {
    return(
        <div>
      <div className={styles.title}>
        <h2>Buscando algum serviço?</h2>
      </div>

      <div className={styles.container}> 

        <div className={styles.fileira}>

          <div className={styles.quadrado}>
            <img className={styles.imgService} src={cosmetics} alt="cosmetics" />
            <h3 className={styles.titleService} >Moda e Beleza</h3>
            <p className={styles.descService}>Consultoria de Estilo,
              Maquiagem Profissional,
              Cabeleireira, Estilização
              Serviços de Estética e muito mais</p>
              <button className={styles.buttonService}>Ache uma Profissional</button>
          </div>

          <div className={styles.quadrado}>
            <img className={styles.imgService} src={front_end_programming} alt="tecnologia" />
            <h3 className={styles.titleService} >Design e Tecnologia</h3>
            <p className={styles.descService}>Soluções em design gráfico,
              desenvolvimento de sites e inovação tecnológica,
              oferecendo serviços que atende às suas necessidades.</p>
              <button className={styles.buttonService}>Ache uma Profissional</button>
          </div>

          <div className={styles.quadrado}>
            <img className={styles.imgService} src={image} alt="calendario" />
            <h3 className={styles.titleService} >Eventos</h3>
            <p className={styles.descService}>Planejamento de Eventos,
              decoração e ambientação,
              coordenação de festas,
              fotografia geral. Tudo para deixar o momento mais incrível!</p>
              <button className={styles.buttonService}>Ache uma Profissional</button>
          </div>

        </div>

        <div className={styles.fileira}>

          <div className={styles.quadrado}>
            <img className={styles.imgService} src={gears} alt="assistencia" />
            <h3 className={styles.titleService} >Assistência Técnica</h3>
            <p className={styles.descService}>Serviços de assistência técnica que você pode confiar.
              Reparos precisos para garantir a longevidade dos seus equipamentos!  </p>
              <button className={styles.buttonService}>Ache uma Profissional</button>
          </div>

          <div className={styles.quadrado}>
            <img className={styles.imgService} src={heartbeat} alt="coracao" />
            <h3 className={styles.titleService} >Saúde e Bem-estar</h3>
            <p className={styles.descService}>Terapias Holísticas,
              personal trainer,
              nutrição e dietética
              aconselhamento psicológico, etc. </p>
              <button className={styles.buttonService}>Ache uma Profissional</button>
          </div>

          <div className={styles.quadrado}>
            <img className={styles.imgService} src={chef_hat} alt="chapeu" />
            <h3 className={styles.titleService} >Gastronomia</h3>
            <p className={styles.descService}>Encontre o melhor da gastronomia na sua região: Serviços de Buffet,
              cozinheiras e chefs,
              aulas de culinária e muito mais</p>
              <button className={styles.buttonService}>Ache uma Profissional</button>
          </div>

        </div>
        
      </div>

    </div>
    )
}

export default Home;