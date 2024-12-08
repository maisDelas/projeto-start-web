import * as S from './Config.Styles'
import NavU from '../../Components/navbar/Nav.usuario'
import SideBar from '../../Components/sidebar/Sidebar'
import { useNavigate } from 'react-router-dom'
import Switch from "react-switch";
import React, { useState } from 'react';
import Button from '../../Components/botaoglobal/Button'; 


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

    const handleSubmit = async (e) => {
        e.preventDefault();

        const isValid = validateForm();
        if (!isValid) {
            return;
        }

        try {
            const response = await api.put('/update-password', {
                currentPassword,
                newPassword,
            });


            console.log("Senha atualizada com sucesso!", response.data);
            alert("Senha alterada com sucesso!");

            setErrors({});

        } catch (error){
            console.error("Erro ao alterar senha: ", error);
            setErrors({ apiError: "Erro ao alterar senha. Por favor, tente novamente." });
        }

    };

    const validateForm = () => {
        const errors = {}
        if (!currentPassword) {
            errors.currentPasswordError = "A senha atual é obrigatória.";
        }

        if (!newPassword){
            errors.newPasswordError = "A nova senha é obrigatória.";
        }

        if (newPassword != confirmPassword) {
            errors.passwordError = "A confirmação da senha deve ser igual a nova senha.";
        }
        setErrors(errors);

        return Object.keys(errors).length === 0;
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
                                        <input 
                                        type="text" 
                                        value={currentPassword}
                                        onChange={(e) => handleCurrentPassword(e.target.value)} 
                                        placeholder='Senha Atual' 
                                        />

                                        <input 
                                        type="text" 
                                        value={newPassword} 
                                        onChange={(e) => handleNewPassword(e.target.value)} 
                                        placeholder='Nova Senha' 
                                        />

                                        <input 
                                        type="text" 
                                        value={confirmPassword}
                                        onChange={(e) => handleConfirmPassword(e.target.value)} 
                                        placeholder='Confirmar Senha' 
                                        />

                                        {errors.passwordError && <span>{errors.passwordError}</span>}
                                        {errors.apiError && <span>{errors.apiError}</span>}

                                        <Button type='submit'>
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


export default Configuracao;