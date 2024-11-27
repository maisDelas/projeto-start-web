import  ImagemLogoTipo from 'assets/Logobranca.svg'
import mulheres_imagens from 'assets/imagem_mulheres.svg'

import {GlobalStyle, HomeCont, WhiteLogotipo, Title, Subtitle, HomeImages, ImageMulheres} from './HomeContainer.styles'



function HomeContainer() {
    return (
        <>
        <GlobalStyle/>
        <HomeCont/>
        <WhiteLogotipo>
            <img src={ImagemLogoTipo} alt="foto do logotipo +delas" />
            </WhiteLogotipo>
            <Title>Junte-se à nossa comunidade!</Title>
                <Subtitle>Desenvolva suas habilidades empreendedoras e</Subtitle>
                <Subtitle>transforme sua trajetória!</Subtitle>
        <HomeImages>
            <ImageMulheres src={mulheres_imagens} alt="mulheres sorrindo" />
        </HomeImages>
        </>
);
}

export default HomeContainer;   