import Button from '../botaoglobal/Button';
import { TitleService, Stylequadrado, IconService, Descricao } from './CardService.styles';

function Card({title, description, iconUrl, altName}) {
    return (
        <Stylequadrado>
            <div>
            <IconService src={iconUrl} alt={altName}/>
            <TitleService>{title}</TitleService>
            <Descricao>{description}</Descricao>
            </div>
            <Button data-button> Ache uma profissional </Button>
        </Stylequadrado>
    )
}

export default Card;