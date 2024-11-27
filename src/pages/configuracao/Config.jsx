import * as S from './Config.Styles'
import NavU from 'Components/navbar/Nav.usuario'
import SideBar from 'Components/sidebar/Sidebar'
import { useNavigate } from 'react-router-dom'
import Switch from "react-switch";
import React, { useState } from 'react';
import Button from 'Components/botaoGlobal/Button';

const Configuracao = () => {
    const navigation = useNavigate()
    const [emailSwitch, setEmailSwitch] = useState(false);
    const [whatsAppSwitch, setWhatsAppSwitch] = useState(false);

    const handleEmailSwitch = (checked) => {
        setEmailSwitch(checked);
    };

    const handleWhatsAppSwitch = (checked) => {
        setWhatsAppSwitch(checked);
    };


    return (

        <S.PageWrapper>
            <NavU />
            <S.PageContent>
                <SideBar />
                <S.Config>
                    <div>
                        <h2>Notificação via:</h2>
                        <div className='boxContent'>
                            <div className='option'>
                                <h2>E-mail</h2>
                                <Switch
                                    onChange={handleEmailSwitch}
                                    checked={emailSwitch}
                                    offColor="#FAAD88"
                                    onColor="#E35D1C"
                                    uncheckedIcon={false}
                                    checkedIcon={false}
                                />
                            </div>
                            <div className='option'>
                                <h2>WhatsApp</h2>
                                <Switch
                                    onChange={handleWhatsAppSwitch}
                                    checked={whatsAppSwitch}
                                    offColor="#FAAD88"
                                    onColor="#E35D1C"
                                    uncheckedIcon={false}
                                    checkedIcon={false}
                                />
                            </div>
                        </div>
                    </div>

                    <div>
                        <h2>Segurança</h2>
                        <div className='boxContent'>

                            <div className='input'>
                                <h3>Alterar Senha</h3>
                                <input type="text" placeholder='Senha Atual' />
                                <input type="text" placeholder='Nova Senha' />
                                <input type="text" placeholder='Confirmar Senha' />
                                <Button>Salvar Alterações</Button>
                            </div>

                        </div>
                    </div>

                    <div>
                        <h2>Controle de conta</h2>
                        <div className='boxContent'>
                            <Button>Desativar Conta</Button>
                            <Button>Excluir Conta</Button>

                        </div>
                    </div>



                </S.Config>
            </S.PageContent>
        </S.PageWrapper>



    )
}


export default Configuracao