import React from 'react';
import './Prices.css';

const Prices = () => {
    return(
        <>
        <section className="prices" id="prices">
            <div className="prices__header">
                <div className="blue-dot"></div>
                <h3 className="section__title">цены</h3>
            </div>
            <div className="prices__list">
                <div className="prices__item">
                    <div className="prices__name">
                        <h3 className="prices__type">БЮДЖЕТНЫЙ</h3>
                        <button className='prices__switcher'></button>
                        <div className="prices__symbol symbol1"></div>
                    </div>
                    <p className="prices__price">от 1500₽/м²</p>
                    <div className="prices__options">
                        <div className="prices__option">готовый дизайн проект</div>
                        <div className="prices__option">выезд на проект</div>
                        
                        <div className="prices__option">3D-визуализация</div>
                        <div className="prices__option">обмерный план</div>
                        <div className="prices__option">документация</div>
                    </div>
                    <a href="tel:89160151552" className="prices__submit">оформить</a>
                </div>

                <div className="prices__item">
                    <div className="prices__name">
                        <h3 className="prices__type">ПРЕМИУМ</h3>
                        <button className='prices__switcher'></button>
                        <div className="prices__symbol symbol2"></div>
                    </div>
                    <p className="prices__price">от 2500₽/м²</p>
                    <div className="prices__options">
                        <div className="prices__option"><b>бюджетный</b></div>
                        <div className="plus-symbol">&nbsp;+&nbsp;</div>
                        <div className="prices__option">разработка ТЗ</div>
                        <div className="prices__option">эскиз-проект</div>
                        <div className="prices__option">подробные чертежи</div>
                        <div className="prices__option">смета</div>
                        <div className="prices__option">поиск мебели и материалов</div>
                    </div>
                    <a href="tel:89160151552" className="prices__submit">оформить</a>
                </div>

                <div className="prices__item">
                    <div className="prices__name">
                        <h3 className="prices__type">ЭЛИТ</h3>
                        <button className='prices__switcher'></button>
                        <div className="prices__symbol symbol3"></div>
                    </div>
                    <p className="prices__price">от 3500₽/м²</p>
                    <div className="prices__options">
                        <div className="prices__option"><b>премиум</b></div>
                        <div className="plus-symbol">&nbsp;+&nbsp;</div>
                        <div className="prices__option">3 варианта эскиз-проекта</div>
                        <div className="prices__option">авторский надзор на все время</div>
                        <div className="prices__option">управление стройкой</div>
                    </div>
                    <a href="tel:89160151552" className="prices__submit">оформить</a>
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
        </>
    )
}

export default Prices;
