import React from 'react';
import { Pagination, Navigation, Keyboard } from "swiper";
import { Swiper, SwiperSlide } from 'swiper/react/swiper-react';
import "swiper/swiper.min.css";
import "swiper/modules/pagination/pagination.min.css";
import "swiper/modules/navigation/navigation.min.css";
import './Slider.css';

const Slider = () => {

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
                <SwiperSlide className='slide'><img className='slide-img' alt={'фото сделанного проекта'} src={require('../../images/cases-cover/case1.jpg')} /></SwiperSlide>
                <SwiperSlide className='slide'><img className='slide-img' alt={'фото сделанного проекта'} src={require('../../images/cases-cover/case2.jpg')} /></SwiperSlide>
                <SwiperSlide className='slide'><img className='slide-img' alt={'фото сделанного проекта'} src={require('../../images/cases-cover/case3.jpg')} /></SwiperSlide>
            </Swiper>
    )
};

export default Slider;