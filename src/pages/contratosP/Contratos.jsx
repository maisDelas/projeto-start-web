import * as S from './Contratos.styles';
import NavU from 'Components/navbar/Nav.usuario';
import SideBar from 'Components/sidebar/Sidebar';
import { useNavigate } from 'react-router-dom';
import { IoSearch } from "react-icons/io5";
import Button from 'Components/botaoglobal/Button';




const Contratos = () => {

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
                                    <th>ID Pedido<S.Arrow/></th>
                                    <th>Cliente<S.Arrow/></th>
                                    <th>Contato<S.Arrow/></th>
                                    <th>Data do pedido<S.Arrow/></th> 
                                    <th>Status<S.Arrow/></th>               
                                </tr>
                            </thead>
                            <tbody> 
                                <tr>
                                    <td>#6254</td>
                                    <td>Fulano da silva </td>
                                    <td>fulano65@gmail.com</td>
                                    <td>30/10/2024</td>
                                    <td className='status'>Ativo</td>
                                </tr>
                                <tr>
                                    <td>#6254</td>
                                    <td>Ciclano de Silva</td>
                                    <td>(81)88888-8888</td>
                                    <td>28/11/2024</td>
                                    <td className='status'>Ativo</td>
                                </tr>
                            </tbody>
                            
                        </table>

                        <S.DeleteArea>
                        <h3>Deletar contratos finalizados: </h3>
                        <Button className='buttonDelete'>Deletar</Button>
                        </S.DeleteArea>




                        {/* <div className='contractTitle'>
                        <h3>ID Pedido </h3><S.Arrow/>
                        <h3 className='spacing'>Cliente</h3><S.Arrow/>
                        <h3>Contato</h3><S.Arrow/>
                        <h3>Dados do pedido</h3><S.Arrow/>
                        <h3>Status</h3><S.Arrow/>
                        </div>
                        <div className='contractInfo'>
                        </div> */}
                    </S.ContractsSection>
                </S.ContractArea>
            </S.PageContent>
        </S.PageWrapper>
    )
}

export default Contratos;

