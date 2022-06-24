import React, {useRef} from 'react';
import './Prices.css';
import ModalWindow from '../../Modal/Modal';
import FeedbackForm from '../../FeedbackForm/Feedback';
import { useState } from 'react';

const Prices = () => {
    const ref = useRef(null);

    const [modalActive, setModalActive] = useState(false);
    const [priceActive1, setPriceActive1] = useState(false);
    const [priceActive2, setPriceActive2] = useState(false);
    const [priceActive3, setPriceActive3] = useState(false);

    const handlePriceToggleOne = event => {
        if (event.currentTarget.classList.contains('one')) {
            setPriceActive1(!priceActive1);
            event.currentTarget.classList.toggle('prices__switcher-background-default');
            event.currentTarget.classList.toggle('prices__switcher-background1');
        }
    };

    const handlePriceToggleTwo = event => {
        if (event.currentTarget.classList.contains('two')) {
            setPriceActive2(!priceActive2);
            event.currentTarget.classList.toggle('prices__switcher-background-default');
            event.currentTarget.classList.toggle('prices__switcher-background2');
        }
    };

    const handlePriceToggleThree = event => {
        if (event.currentTarget.classList.contains('three')) {
            setPriceActive3(!priceActive3);
            event.currentTarget.classList.toggle('prices__switcher-background-default');
            event.currentTarget.classList.toggle('prices__switcher-background3');
        }
    };
    
    return(
        <>
        <section className="prices" id="prices">
            <div className="prices__header">
                <div className="blue-dot"></div>
                <h3 className="section__title">цены</h3>
            </div>
            <div className="prices__list">
                <div className={ priceActive1 ? "prices__item1" : 'prices__item-mobile1'}>
                    <div className="prices__name">
                        <h3 className="prices__type">БЮДЖЕТНЫЙ</h3>
                        <button 
                            className='prices__switcher one prices__switcher-background-default'
                            onClick={handlePriceToggleOne}
                            ref={ref}
                        ></button>
                        <div className="prices__symbol symbol1"></div>
                    </div>
                    <p className={priceActive1 ? "prices__price1" : 'prices__price-mobile1'}>от 1500₽/м²</p>
                    <div className={ priceActive1 ? 'prices__options1' : "isHiddenOptions1" }>
                        <div className="prices__option">готовый дизайн проект</div>
                        <div className="prices__option">выезд на проект</div>
                        <div className="prices__option">3D-визуализация</div>
                        <div className="prices__option">обмерный план</div>
                        <div className="prices__option">документация</div>
                    </div>
                    <button 
                        className={ priceActive1 ? "prices__submit1" : 'isHiddenSubmit1 submit__cursor'}
                        onClick={() => setModalActive(true)}
                        >оформить
                    </button>
                </div>

                <div className={ priceActive2 ? "prices__item2" : 'prices__item-mobile2'}>
                    <div className="prices__name">
                        <h3 className="prices__type">ПРЕМИУМ</h3>
                        <button 
                            className='prices__switcher two prices__switcher-background-default'
                            onClick={handlePriceToggleTwo}
                            ref={ref}
                        ></button>
                        <div className="prices__symbol symbol2"></div>
                    </div>
                    <p className={priceActive2 ? "prices__price2" : 'prices__price-mobile2'}>от 2500₽/м²</p>
                    <div className={ priceActive2 ? 'prices__options2' : "isHiddenOptions2" }>
                        <div className="prices__option"><b>бюджетный</b></div>
                        <div className="plus-symbol">&nbsp;+&nbsp;</div>
                        <div className="prices__option">разработка ТЗ</div>
                        <div className="prices__option">эскиз-проект</div>
                        <div className="prices__option">подробные чертежи</div>
                        <div className="prices__option">смета</div>
                        <div className="prices__option">поиск мебели и материалов</div>
                    </div>
                    <button 
                        className={ priceActive2 ? "prices__submit2" : 'isHiddenSubmit2 submit__cursor'}
                        onClick={() => setModalActive(true)}
                        >оформить
                    </button>
                </div>

                <div className={ priceActive3 ? "prices__item3" : 'prices__item-mobile3'}>
                    <div className="prices__name">
                        <h3 className="prices__type">ЭЛИТ</h3>
                        <button 
                            className='prices__switcher three prices__switcher-background-default'
                            onClick={handlePriceToggleThree}
                            ref={ref}
                        ></button>
                        <div className="prices__symbol symbol3"></div>
                    </div>
                    <p className={priceActive3 ? "prices__price3" : 'prices__price-mobile3'}>от 3500₽/м²</p>
                    <div className={ priceActive3 ? 'prices__options3' : "isHiddenOptions3" }>
                        <div className="prices__option"><b>премиум</b></div>
                        <div className="plus-symbol">&nbsp;+&nbsp;</div>
                        <div className="prices__option">3 варианта эскиз-проекта</div>
                        <div className="prices__option">авторский надзор на все время</div>
                        <div className="prices__option">управление стройкой</div>
                    </div>
                    <button 
                        className={ priceActive3 ? "prices__submit3" : 'isHiddenSubmit3 submit__cursor'}
                        onClick={() => setModalActive(true)}
                        >оформить
                    </button>
                </div>
            </div>
        </section>

        <ModalWindow active={modalActive} setActive={setModalActive}>
            <FeedbackForm />
        </ModalWindow>
        </>
    )
}

export default Prices;
