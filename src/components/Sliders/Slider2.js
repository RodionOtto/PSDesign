import React from 'react';
import { Pagination, Navigation, Keyboard } from "swiper";
import { Swiper, SwiperSlide } from 'swiper/react/swiper-react';
import "swiper/swiper.min.css";
import "swiper/modules/pagination/pagination.min.css";
import "swiper/modules/navigation/navigation.min.css";
import './Slider.css';

const Slider2 = () => {

    return (
            <Swiper
            cssMode={true}
            keyboard={{enabled: true}}
            style={{
                "--swiper-navigation-color": "#0081CA",
                "--swiper-pagination-color": "#0081CA",
            }}
            slidesPerView={1}
            spaceBetween={40}
            rewind={true}
            pagination={{
                dynamicBullets: true,
                clickable: true,
            }}
            navigation={true}
            modules={[Pagination, Navigation, Keyboard]}
            className='slider'
            >
                <SwiperSlide className='slide'>
                    <img
                    src={require('../../images/cases/case2/case2-0.jpg')} 
                    alt={'Variant of interior decoration in the apartment'}
                    className='slide-img'
                    />
                </SwiperSlide>
                <SwiperSlide className='slide'>
                    <img
                    src={require('../../images/cases/case2/case2-1.jpg')} 
                    alt={'Variant of interior decoration in the apartment'}
                    className='slide-img'
                    />
                </SwiperSlide>
                <SwiperSlide className='slide'>
                    <img
                    src={require('../../images/cases/case2/case2-2.jpg')} 
                    alt={'Variant of interior decoration in the apartment'}
                    className='slide-img'
                    />
                </SwiperSlide>
                <SwiperSlide className='slide'>
                    <img
                    src={require('../../images/cases/case2/case2-3.jpg')} 
                    alt={'Variant of interior decoration in the apartment'}
                    className='slide-img'
                    />
                </SwiperSlide>
                <SwiperSlide className='slide'>
                    <img
                    src={require('../../images/cases/case2/case2-4.jpg')} 
                    alt={'Variant of interior decoration in the apartment'}
                    className='slide-img'
                    />
                </SwiperSlide>
                <SwiperSlide className='slide'>
                    <img
                    src={require('../../images/cases/case2/case2-5.jpg')} 
                    alt={'Variant of interior decoration in the apartment'}
                    className='slide-img'
                    />
                </SwiperSlide>
                <SwiperSlide className='slide'>
                    <img
                    src={require('../../images/cases/case2/case2-6.jpg')} 
                    alt={'Variant of interior decoration in the apartment'}
                    className='slide-img'
                    />
                </SwiperSlide>
            </Swiper>
    )
};

export default Slider2;