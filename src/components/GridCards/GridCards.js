import React from 'react';
import GridCard from '../GridCard/GridCard';
import './GridCards.css';

const GridCards = ({cards}) => {

    return (
        <div className="cases__grid">
            {cards.map(caseItem => (
                <GridCard caseItem={ caseItem } key={caseItem.id} />
            ))}
        </div>
    )
    
};
    
export default GridCards;