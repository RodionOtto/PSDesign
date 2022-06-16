import React from 'react';
import { Pagination, Navigation, Keyboard } from "swiper";
import { Swiper, SwiperSlide } from 'swiper/react/swiper-react';
import "swiper/swiper.min.css";
import "swiper/modules/pagination/pagination.min.css";
import "swiper/modules/navigation/navigation.min.css";
import './Slider.css';

const Slider1 = () => {

    // const initialCase1 = [
    //     {caseImg: require('../../images/cases/case1/case1-0.jpg'),
    //     id: 1},
    //     {caseImg: require('../../images/cases/case1/case1-1.jpg'),
    //     id: 2},
    //     {caseImg: require('../../images/cases/case1/case1-2.jpg'),
    //     id: 3},
    //     {caseImg: require('../../images/cases/case1/case1-3.jpg'),
    //     id: 4},
    //     {caseImg: require('../../images/cases/case1/case1-4.jpg'),
    //     id: 5},
    // ];

    // const [case1] = useState(initialCase1);

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
                    src={require('../../images/cases/case1/case1-0.jpg')} 
                    alt={'Variant of interior decoration in the apartment'}
                    className='slide-img'
                    />
                </SwiperSlide>
                <SwiperSlide className='slide'>
                    <img
                    src={require('../../images/cases/case1/case1-1.jpg')} 
                    alt={'Variant of interior decoration in the apartment'}
                    className='slide-img'
                    />
                </SwiperSlide>
                <SwiperSlide className='slide'>
                    <img
                    src={require('../../images/cases/case1/case1-2.jpg')} 
                    alt={'Variant of interior decoration in the apartment'}
                    className='slide-img'
                    />
                </SwiperSlide>
                <SwiperSlide className='slide'>
                    <img
                    src={require('../../images/cases/case1/case1-3.jpg')} 
                    alt={'Variant of interior decoration in the apartment'}
                    className='slide-img'
                    />
                </SwiperSlide>
                <SwiperSlide className='slide'>
                    <img
                    src={require('../../images/cases/case1/case1-4.jpg')} 
                    alt={'Variant of interior decoration in the apartment'}
                    className='slide-img'
                    />
                </SwiperSlide>
            </Swiper>
    )
};

export default Slider1;