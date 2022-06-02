import React from 'react';
import './Cases.css';
import GridCards from '../../GridCards/GridCards';

const Cases = () => {

    return(
        <>
        <section className="cases" id="cases">
            <div className="cases__header">
                <div className="blue-dot"></div>
                <h3 className="section__title">портфолио</h3>
            </div>
            <GridCards />
            <button className="cases__load-more-btn">ПОКАЗАТЬ ЕЩЁ</button>
        </section>
        </>
    )
}

export default Cases;
