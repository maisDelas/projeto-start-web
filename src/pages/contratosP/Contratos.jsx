import { useState, useEffect } from "react";
import * as S from './Contratos.styles';
import NavU from 'Components/navbar/Nav.usuario';
import SideBar from 'Components/sidebar/Sidebar';
import { IoSearch } from "react-icons/io5";
import Button from 'Components/botaoglobal/Button';
// import axios from 'axios'

const Contratos = () => {
    const [dados, setDados] = useState([]); 

    
    const carregarDados = async () => {
        try {
            const response = await axios.get("https://sua-api.com/pedidos"); // Trocar pela URL real
            setDados(response.data); 
        } catch (error) {
            console.error("Erro ao carregar os pedidos:", error);
        }
    };

    
    useEffect(() => {
        carregarDados();
    }, []);

    return (
        <S.PageWrapper>
            <NavU />
            <S.PageContent>
                <SideBar />
                <S.ContractArea>
                    <h1>Seus Contratos: </h1>
                    <S.SearchBox>
                        <input type="text" placeholder="Buscar..." />
                        <IoSearch style={{ color: "#e75109", }} />
                    </S.SearchBox>

                    <S.ContractsSection>
                        <table>
                            <thead>
                                <tr>
                                    <th>ID Pedido<S.Arrow /></th>
                                    <th>Cliente<S.Arrow /></th>
                                    <th>Contato<S.Arrow /></th>
                                    <th>Data do pedido<S.Arrow /></th>
                                    <th>Status<S.Arrow /></th>
                                </tr>
                            </thead>
                            <tbody>
                                {dados.length > 0 ? (
                                    dados.map((pedido, index) => (
                                        <tr key={index}>
                                            <td>{pedido.id}</td>
                                            <td>{pedido.cliente}</td>
                                            <td>{pedido.contato}</td>
                                            <td>{pedido.dataPedido}</td>
                                            <td className="status">{pedido.status}</td>
                                        </tr>
                                    ))
                                ) : (
                                    <tr>
                                        <td colSpan="5" style={{ textAlign: "center" }}>Você ainda não possui pedidos</td>
                                    </tr>
                                )}
                            </tbody>
                        </table>

                        <S.DeleteArea>
                            <h3>Deletar contratos finalizados: </h3>
                            <Button className="buttonDelete">Deletar</Button>
                        </S.DeleteArea>
                    </S.ContractsSection>
                </S.ContractArea>
            </S.PageContent>
        </S.PageWrapper>
    );
};

export default Contratos;

