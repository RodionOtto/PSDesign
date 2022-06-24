import React from 'react';
import './Fullscreen.css';

const Fullscreen = () => {
    return(
        <section className='fullscreen'>
            <div className='fullscreen__body'>
                <div className='fullscreen__logo'></div>
                <div className="prices__offer">
                <p className="prices__offer-text">
                    при заказе ремонта концепт проект и клининг в подарок
                </p>
                <p className="prices__offer-text">
                    уложимся в ваш бюджет
                </p>
            </div>
                <span className='fullscreen__scroll'>
                    <span className='fullscreen__scroll-animation'></span>
                </span>
                </div>
        </section>
    )
}

export default Fullscreen;
