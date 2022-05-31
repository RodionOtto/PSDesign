import React from 'react';
import GridCard from '../GridCard/GridCard';

const GridCards = props => {
    <div className="cases__grid">
        {props.cases.map((title, text, index) => {
            return(
                <GridCard 
                    key={index}
                    title={title}
                    text={text}
                />
            )
        })}
    </div>
}
    
export default GridCards;