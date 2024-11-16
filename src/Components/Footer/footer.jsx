import React from 'react';
import * as S from './footerStyle'
import facebookIcon from "../../assets/facebook.svg";
import linkedinIcon from "../../assets/linkedin.svg";
import instagramIcon from "../../assets/instagram.svg";
import emailIcon from "../../assets/email.svg";
import telefoneIcon from "../../assets/telefone.svg";
import logoIcon from "../../assets/logo.svg";

const Footer = () => {
    return (
        <S.footer>
           <S.FooterContatos>
           <p>
          <img src={logoIcon} alt="logoIcon" /> 
        </p>
            <h3>Contatos</h3>                        
           <p>
          <img src={emailIcon} alt="emailIcon" /> delas@maisdelas.com
        </p>
        <p>
          <img src={telefoneIcon} alt="telefoneIcon" /> 81-9999-9999
        </p>
            </S.FooterContatos>
            <S.FooterSobre>
                <h3>Sobre nós</h3>
                <p>Nosso objetivo é promover uma comunidade onde às mulheres têm esse acesso a oportunidades de emprego
                    e desenvolvimento profissional</p>
            </S.FooterSobre>
            <S.FooterInfor>
                <h3>Informações</h3>
                <ul>
                    <li><a href="#">Sobre nós</a></li>
                    <li><a href="#">Serviços</a></li>
                    <li><a href="#">Depoimentos</a></li>
                    <li><a href="#">Junta-se a nós</a></li>
                </ul>
            </S.FooterInfor>
            <S.FooterLink>
                <h3>Links uteis</h3>
                <ul>
                    <li><a href="#">Termos e condições</a></li>
                    <li><a href="#">Política de privaidade</a></li>
                    <li><a href="#">Mapeamento de serviços</a></li>
                    <li><a href="#">Suporte</a></li>
                </ul>
            </S.FooterLink>
            <S.FooterInscreva>
                <p>Inscreva-se para mais informações</p>
                <input type="Email" placeholder="Digite seu email" />
                <button>Se inscreva</button>
            </S.FooterInscreva>
<<<<<<< HEAD
            
=======
>>>>>>> 53f6ebbc0df2c3d68c7ead934b8cbfd04b580915
            <S.FooterCopyRight>Copyright 2024 @ delas. Todos os direitos reservados</S.FooterCopyRight>
            <S.FooterMidias>
            
                <S.Copyright>
                <p>Copyright 2024 @ delas. Todos os direitos reservados</p>  
                </S.Copyright>                     
                <S.SocialIcons>
            <a href="#">
            <img src={instagramIcon} alt="Instagram" /> 
            </a>                            
            <a href="#">
                <img  src= {facebookIcon} alt="Facebook"></img></a>
                <a href="#">
                <img  src= {linkedinIcon} alt="Facebook"></img></a>
                </S.SocialIcons>
            </S.FooterMidias>

            
        </S.footer>

    );
};

export default Footer;