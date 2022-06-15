import React from 'react';
import { SwiperSlide } from 'swiper/react/swiper-react';
import "swiper/swiper.min.css";
import "swiper/modules/pagination/pagination.min.css";
import "swiper/modules/navigation/navigation.min.css";
import './Slide.css';

const Slide = ({case1}) => {
    return (
        <>
        {case1.map(
            slideItem => (
                <SwiperSlide 
                    // className='slide'
                    key={slideItem.id}
                    // style={{backgroundImage: `url(${slideItem.caseImg})`}}
                    >
                        <img 
                        src={slideItem.caseImg} 
                        alt={'pic of example'}
                        className='slide-img'
                        key={slideItem.id}
                        />
                </SwiperSlide>)
        )}
        </>
    );
};

export default Slide;