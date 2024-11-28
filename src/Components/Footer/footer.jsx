import * as S from "Components/footer/Footer.styles";
import facebookIcon from "../../assets/facebook.svg";
import linkedinIcon from "../../assets/linkedin.svg";
import instagramIcon from "../../assets/instagram.svg";
import emailIcon from "../../assets/email.svg";
import telefoneIcon from "../../assets/telefone.svg";
import logoIcon from "../../assets/logo.svg";
import arrowTop from "../../assets/arrowTop.svg";

const Footer = () => {
  function scrollToTop() { window.scrollTo({ top: 0, behavior: "smooth" }) }
  return (
    <S.footer>
      <S.FooterContainer>
        <div className="logoContainer">
          <img className="logo" src={logoIcon} alt="logoIcon" />
        </div>
        <div className="teste">
          <S.FooterContatos>
            <h3>Contatos</h3>
            <S.FooterImg>
              <div>
                <img src={emailIcon} alt="emailIcon" />
                <p>delas@maisdelas.com</p>
              </div>
              <div>
                <img src={telefoneIcon} alt="telefoneIcon" />
                <p>81-9999-9999</p>
              </div>
            </S.FooterImg>
          </S.FooterContatos>
          <S.FooterSobre>
            <h3>Sobre nós</h3>
            <p>
              Nosso objetivo é promover uma comunidade onde às mulheres têm esse
              acesso a oportunidades de emprego e desenvolvimento profissional.
            </p>
          </S.FooterSobre>
          <S.FooterInfor>
            <h3>Informações</h3>
            <ul>
              <li>
                <a href="#">Sobre nós</a>
              </li>
              <li>
                <a href="#">Serviços</a>
              </li>
              <li>
                <a href="#">Depoimentos</a>
              </li>
              <li>
                <a href="CadastroPrestadora0">Junte-se a nós</a>
              </li>
            </ul>
          </S.FooterInfor>
          <S.FooterLink>
            <h3>Links uteis</h3>
            <ul>
              <li>
                <a href="#">Termos e condições</a>
              </li>
              <li>
                <a href="#">Política de privacidade</a>
              </li>
              <li>
                <a href="/Map">Mapeamento de serviços</a>
              </li>
              
            </ul>
          </S.FooterLink>
          <S.FooterInscreva>
            <p>Inscreva-se para mais informações</p>
            <input type="Email" placeholder="Digite seu email" />
            <button>Se inscreva</button>
          </S.FooterInscreva>
        </div>
        <div className="goToTopContainer">
          <button onClick={scrollToTop}>
            <img src={arrowTop} alt="va para o topo" />
          </button>
        </div>
      </S.FooterContainer>
      <S.FooterMidias>
        <S.FooterPai>
          <S.SocialIcons>
            <a href="#">
              <img src={instagramIcon} alt="Instagram" />
            </a>
            <a href="#">
              <img src={facebookIcon} alt="Facebook"></img>
            </a>
            <a href="#">
              <img src={linkedinIcon} alt="linkedin"></img>
            </a>
          </S.SocialIcons>
          <S.FooterCopyright>
            <p>Copyright 2024 @ delas. Todos os direitos reservados</p>
          </S.FooterCopyright>
        </S.FooterPai>
      </S.FooterMidias>
    </S.footer>
  );
};

export default Footer;
