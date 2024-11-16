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


    )
}

export default Card;