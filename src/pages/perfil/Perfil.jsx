import { useState, useEffect } from "react";
import * as S from "./Perfil.styles";
import facebook from "../../assets/facebook.svg";
import instagram from "../../assets/instagram.svg";
import mulherIcon from "../../assets/mulher.svg";
import linkedin from "../../assets/linkedin.svg";
import canetaIcon from "../../assets/caneta.svg";
import { useNavigate } from "react-router-dom";
import SideBar from "Components/sidebar/Sidebar";
import NavU from "Components/navbar/Nav.usuario";




function Perfil2() {
  const navigation = useNavigate()

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState(null);
  const [profile, setProfile] = useState([]);
  const [editing, setEditing] = useState(null);

  useEffect(() => {
    fetchProfile();
  }, []);

  const fetchProfile = async () => {
    try {
      const response = await api.get();
      const { name, email, phone } = response.data;
      setProfile(response.data);
      setName(name);
      setEmail(email);
      setPhone(phone);

    } catch (error) {
      console.error(`Erro ao buscar dados: ${error}`);
    }
  }

  async function handleSubmit(e) {
    e.preventDefault();

    try {
      if (editing) {

        const updates = {};
        if (name !== profile.name) updates.name = name;
        if (email !== profile.email) updates.email = email;
        if (phone !== profile.phone) updates.phone = phone;

        if (Object.keys(updates).length === 0) {
          console.log("Nenhum campo foi editado");
          return;
        }

        await api.put(`updateItem/${editing.id}`, updates);

        console.log("Perfil atualizado com sucesso!")
        setEditing(false);
        fetchProfile();

      } else {
        console.error("Nenhum item está sendo editado.");
      }

    } catch (error) {
      console.error('Erro ao atualizar item: ', error);
    }
  }

  const handleEdit = () => {
    setEditing(profile);
  };



  return (
    <S.Perfil>
      <NavU />
      <S.Container>
        <SideBar />
        <S.PerfilPrincipal>
          <S.SegundoPerfil>
            <h2>Editar Perfil</h2>
            <S.Foto>
              
              <img className="perfil-img" src={mulherIcon} alt="mulherIcon" />
              <S.ButtonGrupo>
                <div>
                  <label htmlFor="files">Upload de foto</label>
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
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  disabled={!editing}
                />
              </div>

              <div className="coluna">
                <p>E-mail</p>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  disabled={!editing}
                />
              </div>

              <div className="coluna">
                <p>Telefone</p>
                <input
                  type="tel"
                  value={phone || ''}
                  onChange={(e) => setPhone(e.target.value)}
                  disabled={!editing}
                />
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

export default Perfil2;
