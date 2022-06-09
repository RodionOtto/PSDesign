import React from 'react';
import { Pagination, Navigation } from "swiper";
import { Swiper, SwiperSlide } from 'swiper/react/swiper-react';
import "swiper/swiper.min.css";
import "swiper/modules/pagination/pagination.min.css";
import "swiper/modules/navigation/navigation.min.css";
import './Slider.css';

const Slider = () => {

    return (
            <Swiper
            spaceBetween={30}
            rewind={true}
            pagination={{
                dynamicBullets: true,
            }}
            navigation={true}
            modules={[Pagination, Navigation]}
            className='slider'
            >
                <SwiperSlide><img alt={'image'} src={require('../../images/cases-cover/case1.jpg')} /></SwiperSlide>
                <SwiperSlide><img alt={'image'} src={require('../../images/cases-cover/case2.jpg')} /></SwiperSlide>
                <SwiperSlide><img alt={'image'} src={require('../../images/cases-cover/case3.jpg')} /></SwiperSlide>
            </Swiper>
    )
};

export default Slider;