import * as S from './Config.Styles'
import NavU from 'Components/navbar/Nav.usuario'
import SideBar from 'Components/sidebar/Sidebar'
import { useNavigate } from 'react-router-dom'
import Switch from "react-switch";
import React, { useState } from 'react';
import Button from 'Components/botaoGlobal/Button';
import { MdMargin } from 'react-icons/md';

const Configuracao = () => {
    const navigation = useNavigate()
    const [emailSwitch, setEmailSwitch] = useState(false);
    const [whatsAppSwitch, setWhatsAppSwitch] = useState(false);
    const [currentPassword, setCurrentPassword] = useState('');
    const [newPassword, setNewPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [errors, setErrors] = useState({});



    const handleCurrentPassword = (password) => {
        setCurrentPassword(password);
    };

    const handleNewPassword = (password) => {
        setNewPassword(password);

    };

    const handleConfirmPassword = (password) => {
        setConfirmPassword(password);
    };

    const handleEmailSwitch = (checked) => {
        setEmailSwitch(checked);
    };

    const handleWhatsAppSwitch = (checked) => {
        setWhatsAppSwitch(checked);
    };

    const handleSubmit = (e) => {
        console.log(currentPassword, newPassword, confirmPassword)
        e.preventDefault();

        validateForm();

    };

    const validateForm = () => {
        const errors = {}
        if (newPassword != confirmPassword) {
            errors.passwordError = "Senha de confirmação deve ser igual a nova senha.";
        }


        setErrors(errors);
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
                        <S.FormBox>
                            <form onSubmit={handleSubmit}>
                                <h2>Segurança</h2>
                                <div className='boxContent'>

                                    <div className='input'>
                                        <h3>Alterar Senha</h3>
                                        <input type="text" onChange={(e) => handleCurrentPassword(e.target.value)} placeholder='Senha Atual' />
                                        <input type="text" onChange={(e) => handleNewPassword(e.target.value)} placeholder='Nova Senha' />
                                        <input type="text" onChange={(e) => handleConfirmPassword(e.target.value)} placeholder='Confirmar Senha' />

                                        {errors.passwordError && <span>{errors.passwordError}</span>}

                                        <Button>
                                            Salvar Alterações
                                        </Button>
                                    </div>




                                </div>
                            </form>
                        </S.FormBox>
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