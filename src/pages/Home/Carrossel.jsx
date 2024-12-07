import React, { useRef, useEffect } from 'react';
import { Navigation } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import * as S from './Carrossel.styles';
import arrowLeft from 'assets/arrowLeft.svg';
import arrowRight from 'assets/arrowRight.svg'; 
import persona1 from 'assets/imgPersona1.svg';
import persona2 from 'assets/imgPersona2.svg'; 
import persona3 from 'assets/imgPersona3.svg';
import persona4 from 'assets/imgPersona4.svg';


function Carrossel() {
    const prevRef = useRef(null);
    const nextRef = useRef(null);
    const swiperInstance = useRef(null);

    useEffect(() => {
        if (swiperInstance.current && prevRef.current && nextRef.current) {
            swiperInstance.current.params.navigation.prevEl = prevRef.current;
            swiperInstance.current.params.navigation.nextEl = nextRef.current
            swiperInstance.current.navigation.init();
            swiperInstance.current.navigation.update();
        }
    }, [prevRef, nextRef]);

    return (
        <S.BcCa>
            <S.CarrosselContainer>
                <S.Title>Veja o que nossas Colaboradoras dizem:</S.Title>

                <S.SlideContainer>

                    <S.SwiperButtonPrev ref={prevRef}><img src={arrowLeft} /></S.SwiperButtonPrev>

                    <Swiper
                        spaceBetween={40} 
                        slidesPerView={3}
                        loop={true}
                        modules={[Navigation]} 
                        navigation={{
                            prevEl: prevRef.current,
                            nextEl: nextRef.current,
                        }}
                        onSwiper={(swiper) => {
                            swiperInstance.current = swiper;
                        }}
                    >
                        <SwiperSlide>
                            <S.Slide> 
                                <img src={persona1}></img>
                                <p>Encantada com a qualidade e o carinho dos produtos, é gratificante apoiar mulheres empreendedoras a cada compra!</p> 
                                <h3>- Maria Souza</h3>

                            </S.Slide>

                        </SwiperSlide>
                        <SwiperSlide>
                            <S.Slide>
                                <img src={persona2}></img> 
                                <p>O contato é feito de forma muito rápida, além de que posso descrever exatamente como quero meu serviço. Recomendo demais!</p>
                                <h3>- Ana Costa</h3>

                            </S.Slide>
                        </SwiperSlide>

                        <SwiperSlide>
                            <S.Slide>
                                <img src={persona3}></img>
                                <p>Minhas vendas cresceram muito desde que comecei. Muito gratificante fazer parte dessa rede de mulheres.</p>
                                <h3>- Carol Silva</h3>

                            </S.Slide>
                        </SwiperSlide>

                        <SwiperSlide>
                            <S.Slide>
                                <img src={persona4}></img> 
                                <p>A trilha de desenvolvimento profissional e pessoal foi um divisor de águas na minha trajetória de empreendedora.</p>
                                <h3>- Sofia Almeida</h3>
                            </S.Slide>
                        </SwiperSlide>

                    </Swiper>

                    <S.SwiperButtonNext ref={nextRef}><img src={arrowRight} /></S.SwiperButtonNext>

                </S.SlideContainer>

            </S.CarrosselContainer>
        </S.BcCa>
    );
}

export default Carrossel;