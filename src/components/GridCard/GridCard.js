import React from 'react';
import './GridCard.css';

const GridCard = ({caseItem}) => {
    return(
        <div className="cases__grid-item">
            <h3 className="cases__name">{ caseItem.title }</h3>
            <p className="cases__description">{ caseItem.text }</p>
        </div>
    )
}

export default GridCard;