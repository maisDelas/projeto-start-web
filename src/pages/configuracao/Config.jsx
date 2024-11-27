import * as S from './Config.Styles'
import NavU from 'Components/navbar/Nav.usuario'
import SideBar from 'Components/sidebar/Sidebar'
import { useNavigate } from 'react-router-dom'
import Switch from "react-switch";
import React, { useState } from 'react';

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
                <S.Notification>
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


                </S.Notification>
            </S.PageContent>
        </S.PageWrapper>



    )
}


export default Configuracao