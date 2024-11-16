import { Descservice, Iconservice, Stylebutton, Stylequadrado, Titleservice } from './cardService.styles';


function Card({title, description, iconUrl, altName}) {
    return (
        <Stylequadrado>
            <div>
                <Iconservice src={iconUrl} alt={altName}/>
                <Titleservice>{title}</Titleservice>
                <Descservice>{description}</Descservice>
            </div>
            <div>
                <Stylebutton>Ache uma proficional</Stylebutton>
            </div>
        </Stylequadrado>







        // <div className={styles.quadrado}>
        //     <div className={styles.top}>
        //         <img className={styles.imgService} src={iconUrl} alt={altName} />
        //         <h3 className={styles.titleService} >{title}</h3>
        //         <p className={styles.descService}>{description}</p>
        //     </div>
        //     <div className={styles.bottom}>
        //         <button className={styles.buttonService}>Ache uma Profissional</button>
        //     </div>
        // </div>

    )
}

export default Card;