
import {TitleService,Stylequadrado,IconService,Descricao} from "./cardService.styles";

function Card({ title, description, iconUrl, altName }) {
  return (
    <Stylequadrado>
      <div>
        <IconService src={iconUrl} alt={altName} />
        <TitleService>{title}</TitleService>
        <Descricao>{description}</Descricao>
      </div>
    </Stylequadrado>
  );
}

export default Card;
