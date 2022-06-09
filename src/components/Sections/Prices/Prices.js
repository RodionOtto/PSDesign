import React from 'react';
import './Prices.css';
import ModalWindow from '../../Modal/Modal';
import FeedbackForm from '../../FeedbackForm/Feedback';
import { useState } from 'react';

const Prices = () => {

    const [modalActive, setModalActive] = useState(false);
    const [priceActive, setPriceActive] = useState(false);

    const handlePriceToggle = () => {
        setPriceActive(!priceActive);
    };
    
    return(
        <>
        <section className="prices" id="prices">
            <div className="prices__header">
                <div className="blue-dot"></div>
                <h3 className="section__title">цены</h3>
            </div>
            <div className="prices__list">
                <div className={ priceActive ? "prices__item" : 'prices__item-mobile'}>
                    <div className="prices__name">
                        <h3 className="prices__type">БЮДЖЕТНЫЙ</h3>
                        <button 
                            className='prices__switcher'
                            onClick={handlePriceToggle}
                        ></button>
                        <div className="prices__symbol symbol1"></div>
                    </div>
                    <p className="prices__price">от 1500₽/м²</p>
                    <div className={ priceActive ? 'prices__options' : "isHiddenOptions" }>
                        <div className="prices__option">готовый дизайн проект</div>
                        <div className="prices__option">выезд на проект</div>
                        <div className="prices__option">3D-визуализация</div>
                        <div className="prices__option">обмерный план</div>
                        <div className="prices__option">документация</div>
                    </div>
                    <button 
                        className={ priceActive ? "prices__submit" : 'isHiddenSubmit'}
                        onClick={() => setModalActive(true)}
                        >оформить
                    </button>
                </div>

                <div className={ priceActive ? "prices__item" : 'prices__item-mobile'}>
                    <div className="prices__name">
                        <h3 className="prices__type">ПРЕМИУМ</h3>
                        <button 
                            className='prices__switcher'
                            onClick={handlePriceToggle}
                        ></button>
                        <div className="prices__symbol symbol2"></div>
                    </div>
                    <p className="prices__price">от 2500₽/м²</p>
                    <div className={ priceActive ? 'prices__options' : "isHiddenOptions" }>
                        <div className="prices__option"><b>бюджетный</b></div>
                        <div className="plus-symbol">&nbsp;+&nbsp;</div>
                        <div className="prices__option">разработка ТЗ</div>
                        <div className="prices__option">эскиз-проект</div>
                        <div className="prices__option">подробные чертежи</div>
                        <div className="prices__option">смета</div>
                        <div className="prices__option">поиск мебели и материалов</div>
                    </div>
                    <button 
                        className={ priceActive ? "prices__submit" : 'isHiddenSubmit'}
                        onClick={() => setModalActive(true)}
                        >оформить
                    </button>
                </div>

                <div className={ priceActive ? "prices__item" : 'prices__item-mobile'}>
                    <div className="prices__name">
                        <h3 className="prices__type">ЭЛИТ</h3>
                        <button 
                            className='prices__switcher'
                            onClick={handlePriceToggle}
                        ></button>
                        <div className="prices__symbol symbol3"></div>
                    </div>
                    <p className="prices__price">от 3500₽/м²</p>
                    <div className={ priceActive ? 'prices__options' : "isHiddenOptions" }>
                        <div className="prices__option"><b>премиум</b></div>
                        <div className="plus-symbol">&nbsp;+&nbsp;</div>
                        <div className="prices__option">3 варианта эскиз-проекта</div>
                        <div className="prices__option">авторский надзор на все время</div>
                        <div className="prices__option">управление стройкой</div>
                    </div>
                    <button 
                        className={ priceActive ? "prices__submit" : 'isHiddenSubmit'}
                        onClick={() => setModalActive(true)}
                        >оформить
                    </button>
                </div>
            </div>
            <div className="prices__offer">
                <p className="prices__offer-text">
                    при заказе ремонта концепт проект и клининг в подарок
                </p>
                <p className="prices__offer-text">
                    уложимся в ваш бюджет
                </p>
            </div>
        </section>

        <ModalWindow active={modalActive} setActive={setModalActive}>
            <FeedbackForm />
        </ModalWindow>
        </>
    )
}

export default Prices;
