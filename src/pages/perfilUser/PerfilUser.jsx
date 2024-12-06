import * as S from "pages/perfil/Perfil.styles.js";
import mulherIcon from "/src/assets/Sua foto.svg";
import canetaIcon from "../../assets/caneta.svg";
import { useNavigate } from "react-router-dom";
import SideBarStyle from "Components/sidebarUser.jsx/SidebarUser.jsx";
import NavU from "Components/navbar/Nav.usuario";

function PerfilUsuario() {
  const navigation = useNavigate();

  return (
    <S.Perfil>
      <NavU />
      <S.Container>
        <SideBarStyle />
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
                <button type="submit">Remover foto</button>
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
                <input type="text" placeholder="Digite seu nome" />
              </div>
              <div className="coluna">
                <p>E-mail</p>
                <input type="email" placeholder="Digite seu e-mail" />
              </div>
              <div className="coluna">
                <p>Número</p>
                <input type="tel" placeholder="Digite seu telefone" />
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
                  <input type="text" placeholder="Digite seu CEP" />
                </div>
                <div>
                  <p>Bairro</p>
                  <input type="text" placeholder="Digite seu bairro" />
                </div>
              </div>

              <div className="coluna">
                <div>
                  <p>Cidade</p>
                  <input type="text" placeholder="Digite sua cidade" />
                </div>
                <div>
                  <p>Número</p>
                  <input type="text" placeholder="Digite o número" />
                </div>
              </div>

              <div className="coluna">
                <div>
                  <p>Rua</p>
                  <input type="text" placeholder="Digite sua rua" />
                </div>
                <div>
                  <p>Complemento</p>
                  <input type="text" placeholder="Digite o complemento" />
                </div>
              </div>
            </S.Editagem>
          </S.Card>

          <button type="submit">Salvar alterações</button>
        </S.PerfilPrincipal>
      </S.Container>
    </S.Perfil>
  );
}

export default PerfilUsuario;
