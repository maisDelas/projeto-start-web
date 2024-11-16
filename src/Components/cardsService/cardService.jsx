import styles from './service.module.css'

function Card({title, description, iconUrl, altName}) {
    return (
        <div className={styles.quadrado}>
            <div className={styles.top}>
                <img className={styles.imgService} src={iconUrl} alt={altName} />
                <h3 className={styles.titleService} >{title}</h3>
                <p className={styles.descService}>{description}</p>
            </div>
            <div className={styles.bottom}>
                <button className={styles.buttonService}>Ache uma Profissional</button>
            </div>
        </div>

    )
}

export default Card;