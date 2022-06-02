import React from 'react';
import GridCard from '../GridCard/GridCard';
import './GridCards.css';

const GridCards = () => {

    const casesData = [
        {
            id: 1,
            title: 'Дизайн проект ул. Восстания 12',
            text: 'Проект однокомнатной квартиры выполнен в скандинавском стиле и предполагает проживание одного или двух человек.',
        },
        {
            id: 2,
            title: 'Дизайн проект ул. Восстания 12',
            text: 'Проект однокомнатной квартиры выполнен в скандинавском стиле и предполагает проживание одного или двух человек.',
        },
        {
            id: 3,
            title: 'Дизайн проект ул. Восстания 12',
            text: 'Проект однокомнатной квартиры выполнен в скандинавском стиле и предполагает проживание одного или двух человек.',
        },
        {
            id: 4,
            title: 'Дизайн проект ул. Восстания 12',
            text: 'Проект однокомнатной квартиры выполнен в скандинавском стиле и предполагает проживание одного или двух человек.',
        },
        {
            id: 5,
            title: 'Дизайн проект ул. Восстания 12',
            text: 'Проект однокомнатной квартиры выполнен в скандинавском стиле и предполагает проживание одного или двух человек.',
        },
        {
            id: 6,
            title: 'Дизайн проект ул. Восстания 12',
            text: 'Проект однокомнатной квартиры выполнен в скандинавском стиле и предполагает проживание одного или двух человек.',
        },
        {
            id: 7,
            title: 'Дизайн проект ул. Восстания 12',
            text: 'Проект однокомнатной квартиры выполнен в скандинавском стиле и предполагает проживание одного или двух человек.',
        },
        {
            id: 8,
            title: 'Дизайн проект ул. Восстания 12',
            text: 'Проект однокомнатной квартиры выполнен в скандинавском стиле и предполагает проживание одного или двух человек.',
        },
];

    const casesList = casesData
        .map(caseItem => <GridCard caseItem={ caseItem } key={caseItem.id} />);

    return (
        <div className="cases__grid">
            {casesList}
        </div>
    )
    
};
    
export default GridCards;