import cosmetics from '../../assets/cosmetics.svg'
import front_end_programming from '../../assets/front-end-programming.svg'
import image from '../../assets/image.svg'
import gears from '../../assets/gears.svg'
import heartbeat from '../../assets/heartbeat.svg'
import chef_hat from '../../assets/chef-hat.svg'


import styles from './home.module.css'



function Home() {
    return (
        <div>
            {/* Sessão de Titulo e Video */}

            <div className={styles.title}>
                <h2>Conheça um pouco a +Delas:</h2> 
            </div>
            <div className={styles.bgcards}> 

                <div className={styles.videoContainer}>
                    <iframe className={styles.video} width="600" height="360" src="https://www.youtube.com/embed/UXwPz61lxBY?si=kMwtBZjDrElhp0lP" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                </div>

                {/* Sessão Buscando Serviços */}

                <div className={styles.titlee}>
                    <h2>Buscando algum serviço?</h2>
                </div>

                <div className={styles.container}>


                    <div className={styles.fileira}>

                        {/* Card 1 */}
                        <div className={styles.quadrado}>
                            <div className={styles.top}>
                                <img className={styles.imgService} src={cosmetics} alt="cosmetics" />
                                <h3 className={styles.titleService} >Moda e Beleza</h3>
                                <p className={styles.descService}>Consultoria de Estilo,
                                    Maquiagem Profissional,
                                    Cabeleireira, Estilização
                                    Serviços de Estética e muito mais!</p>
                            </div>
                            <div className={styles.bottom}>
                                <button className={styles.buttonService}>Ache uma Profissional</button>
                            </div>
                        </div>

                        {/* Card 2 */}
                        <div className={styles.quadrado}>
                            <div className={styles.top}>
                                <img className={styles.imgService} src={front_end_programming} alt="tecnologia" />
                                <h3 className={styles.titleService} >Design e Tecnologia</h3>
                                <p className={styles.descService}>Soluções em design gráfico,
                                    desenvolvimento de sites e inovação tecnológica,
                                    oferecendo serviços que atende às suas necessidades.</p>
                            </div>
                            <div className={styles.bottom}>
                                <button className={styles.buttonService}>Ache uma Profissional</button>
                            </div>
                        </div>

                        {/* Card 3 */}
                        <div className={styles.quadrado}>
                            <div className={styles.top}>
                                <img className={styles.imgService} src={image} alt="calendario" />
                                <h3 className={styles.titleService} >Eventos</h3>
                                <p className={styles.descService}>Planejamento de Eventos,
                                    decoração e ambientação,
                                    coordenação de festas,
                                    fotografia geral. Deixe o momento ainda mais incrível!</p>
                            </div>
                            <div className={styles.bottom}>
                                <button className={styles.buttonService}>Ache uma Profissional</button>
                            </div>
                        </div>

                    </div>

                    <div className={styles.fileira}>

                        {/* Card 4 */}
                        <div className={styles.quadrado}>
                            <div className={styles.top}>
                                <img className={styles.imgService} src={gears} alt="assistencia" />
                                <h3 className={styles.titleService} >Assistência Técnica</h3>
                                <p className={styles.descService}>Serviços de assistência técnica que você pode confiar.
                                    Reparos precisos para garantir a longevidade dos seus equipamentos!</p>
                            </div>
                            <div className={styles.bottom}>
                                <button className={styles.buttonService}>Ache uma Profissional</button>
                            </div>
                        </div>

                        {/* Card 5 */}
                        <div className={styles.quadrado}>
                            <div className={styles.top}>
                                <img className={styles.imgService} src={heartbeat} alt="coracao" />
                                <h3 className={styles.titleService} >Saúde e Bem-estar</h3>
                                <p className={styles.descService}>Terapias Holísticas,
                                    personal trainer,
                                    nutrição e dietética
                                    aconselhamento psicológico, etc. </p>
                            </div>
                            <div className={styles.bottom}>
                                <button className={styles.buttonService}>Ache uma Profissional</button>
                            </div>
                        </div>

                        {/* Card 6 */}
                        <div className={styles.quadrado}>
                            <div className={styles.top}>
                                <img className={styles.imgService} src={chef_hat} alt="chapeu" />
                                <h3 className={styles.titleService} >Gastronomia</h3>
                                <p className={styles.descService}>Encontre o melhor da gastronomia na sua região: Serviços de Buffet,
                                    cozinheiras e chefs,
                                    aulas de culinária e muito mais.</p>
                            </div>
                            <div className={styles.bottom}>
                                <button className={styles.buttonService}>Ache uma Profissional</button>
                            </div>
                        </div>

                    </div>

                </div>
                {/* Ultimo Botão */}
                <div className={styles.bottomEnd}>
                    <button className={styles.buttonService}>Ir para mapeamento</button>
                </div>
            </div>


        </div>
    )
}

export default Home;




