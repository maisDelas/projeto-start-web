import Button from "../botaoglobal/Button";
import {TitleService,Stylequadrado,IconService,Descricao, CardButton} from "./CardService.styles";

function Card({ title, description, iconUrl, altName }) {
  return (
    <Stylequadrado>
      <div>
        <IconService src={iconUrl} alt={altName} />
        <TitleService>{title}</TitleService>
        <Descricao>{description}</Descricao>
      </div>
      <CardButton data-button> Ache uma profissional </CardButton>
    </Stylequadrado>
  );
}

export default Card;
