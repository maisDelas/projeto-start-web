import Navbar from "Components/navbar/Navbar";
import * as S from "./Perfil.styles";
import { Link } from "Components/navbar/Navbar.styles";
import IconPerfil from "../../imagesTrilha/IconPerfilT.svg";
import IconTrilha from "../../imagesTrilha/iconTrilhaT.svg";
import IconContrato from "../../imagesTrilha/iconContract.svg";
import IconCalendar from "../../imagesTrilha/iconCalendarT.svg";
import IconConfig from "../../imagesTrilha/iconconfigT.svg";
import lixeira from "../../imagesTrilha/lixeira.svg";
import facebook from "../../assets/facebook.svg";
import instagram from "../../assets/instagram.svg";
import mulherIcon from "../../assets/mulher.svg";
import linkedin from "../../assets/linkedin.svg";
import canetaIcon from "../../assets/caneta.svg";
import city from "../../assets/city.svg";
import planning from "../../assets/planning.svg";
import  NavbarItem from "Components/navbaritem/NavbarItem";
import bola from "../../assets/bola.svg";




function Perfil() {
  return (
        <S.Perfil>
      <Navbar>
        <Link>
          <a href="">Página Inicial </a>
        </Link>
        <Link>
          <a href="">Fale Conosco</a>
        </Link>
        <Link>
         <img src={bola}/>
         <p>Suelen</p>
         <p>▼</p>
        </Link>
      </Navbar>
      <S.Container>
        <S.Sidebar>

          <NavbarItem src={IconPerfil} alt="Perfil" href="perfil" label="Perfil" />

          <NavbarItem src={IconTrilha} alt="Trilha" href="trilha" label="Trilha" />

          <NavbarItem src={IconContrato} alt="Contrato" href="contrato" label="Contratos" />

          <NavbarItem src={IconCalendar} alt="Calendário" href="calendario" label="Calendário" />

          <NavbarItem src={IconConfig} alt="Configuração" href="configuracao" label="Configuraçãos" />

          <div className="separador"></div>

          <div className="navbar-item">
            <img src={lixeira} alt="" />
            <button>Excluir conta</button>
          </div>
        </S.Sidebar>
        <S.PerfilPrincipal>
          <S.SegundoPerfil>
            <h2>Editar Perfil</h2>
            <S.Foto>
              <img className="perfil-img" src={mulherIcon} alt="mulherIcon" />
              <S.ButtonGrupo>
                <div>
                  <label htmlFor="files">Upload da foto</label>
                  <input id="files" type="file" />
                </div>
                <button type="submit">
                  Remover foto
                </button>
              </S.ButtonGrupo>
            </S.Foto>
            <div className="separador"></div>
          </S.SegundoPerfil>

          <S.Card>
            <S.Editagem>
              <h2>Informações Pessoais</h2>
              <S.ButtonEdit>
                <img src={canetaIcon} alt="caneta" />
                Editar
              </S.ButtonEdit>
            </S.Editagem>
            <S.Editagem>
              <div className="coluna">
                <p>Nome</p>
                <input type="text" />
              </div>
              <div className="coluna">
                <p>E-mail</p>
                <input type="email" />
              </div>
              <div className="coluna">
                <p>Telefone</p>
                <input type="tel" />
              </div>
            </S.Editagem>
          </S.Card>

          <S.Card>
            <S.Editagem>
              <h2>Endereço</h2>
              <S.ButtonEdit>
                <img src={canetaIcon} alt="caneta" />
                Editar
              </S.ButtonEdit>
            </S.Editagem>
            <S.Editagem>
              <div className="coluna">
                <div>
                  <p>Cep</p>
                  <input type="text" />
                </div>
                <div>
                  <p>Bairro</p>
                  <input type="text" />
                </div>
              </div>

              <div className="coluna">
                <div>
                  <p>Cidade</p>
                  <input type="text" />
                </div>
                <div>
                  <p>Número</p>
                  <input />
                </div>
              </div>

              <div className="coluna">
                <div>
                  <p>Rua</p>
                  <input type="text" />
                </div>
                <div>
                  <p>Complemento</p>
                  <input type="text" />
                </div>
              </div>
            </S.Editagem>
          </S.Card>

          <S.Card>
            <S.Editagem>
              <h2>Biografia</h2>
              <S.ButtonEdit>
                <img src={canetaIcon} alt="caneta" />
                Editar
              </S.ButtonEdit>
            </S.Editagem>
            <S.Editagem>
              <textarea></textarea>
            </S.Editagem>
          </S.Card>

          <S.Card>
            <S.Editagem>
              <h2>Profissão</h2>
              <S.ButtonEdit>
                <img src={canetaIcon} alt="caneta" />
                Editar
              </S.ButtonEdit>
            </S.Editagem>
            <S.Editagem>
              <div className="profissao">
                <div className="coluna">
                  <div>
                    <p>Nome da profissão</p>
                    <input type="text" />
                  </div>
                  <div>
                    <p>Descrição</p>
                    <textarea></textarea>
                  </div>
                </div>

                <div className="coluna">
                  <div>
                    <p>Áreas de especialização</p>
                    <input type="text" />
                  </div>
                  <div>
                    <p>Experiência profissional</p>
                    <textarea></textarea>
                  </div>
                </div>
              </div>
            </S.Editagem>
          </S.Card>

          <S.Card>
            <S.Editagem>
              <h2>Meus trabalhos</h2>
              <label htmlFor="files">Upload de nova foto</label>
              <input id="files" type="file" />

              <S.ButtonEdit>
                <img src={canetaIcon} alt="caneta" />
                Editar
              </S.ButtonEdit>
            </S.Editagem>
            <S.Editagem>
              <div className="image">
                <img src={city} />
                <img src={planning} />
              </div>
            </S.Editagem>
          </S.Card>

          <S.Card>
            <S.Editagem>
              <h2>Redes sociais</h2>
              <S.ButtonEdit>
                <img src={canetaIcon} alt="caneta" />
                Editar
              </S.ButtonEdit>
            </S.Editagem>
            <S.Editagem>
              <div className="redes-sociais">
                <div>
                  <img src={instagram} />
                  <input type="text" />
                </div>
                <div>
                  <img src={facebook} />
                  <input type="text" />
                </div>
                <div>
                  <img src={linkedin} />
                  <input type="text" />
                </div>
              </div>
            </S.Editagem>
          </S.Card>

          <button type="submit">Salvar alterações</button>
        </S.PerfilPrincipal>

      </S.Container >
    </S.Perfil >
   
  );
}

export default Perfil;
