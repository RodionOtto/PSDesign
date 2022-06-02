import React from 'react';
import GridCard from '../GridCard/GridCard';
import './GridCards.css';

const GridCards = () => {

    const casesData = [
        {
            id: 1,
            img: require('../../images/cases-cover/case1.jpg'),
            title: 'Дизайн проект ул. Восстания 12',
            text: 'Проект однокомнатной квартиры выполнен в скандинавском стиле и предполагает проживание одного или двух человек.',
        },
        {
            id: 2,
            img: require('../../images/cases-cover/case2.jpg'),
            title: 'Дизайн проект ул. Восстания 12',
            text: 'Проект однокомнатной квартиры выполнен в скандинавском стиле и предполагает проживание одного или двух человек.',
        },
        {
            id: 3,
            img: require('../../images/cases-cover/case3.jpg'),
            title: 'Дизайн проект ул. Восстания 12',
            text: 'Проект однокомнатной квартиры выполнен в скандинавском стиле и предполагает проживание одного или двух человек.',
        },
        {
            id: 4,
            img: require('../../images/cases-cover/case4.jpg'),
            title: 'Дизайн проект ул. Восстания 12',
            text: 'Проект однокомнатной квартиры выполнен в скандинавском стиле и предполагает проживание одного или двух человек.',
        },
        {
            id: 5,
            img: require('../../images/cases-cover/case5.jpg'),
            title: 'Дизайн проект ул. Восстания 12',
            text: 'Проект однокомнатной квартиры выполнен в скандинавском стиле и предполагает проживание одного или двух человек.',
        },
        {
            id: 6,
            img: require('../../images/cases-cover/case6.jpg'),
            title: 'Дизайн проект ул. Восстания 12',
            text: 'Проект однокомнатной квартиры выполнен в скандинавском стиле и предполагает проживание одного или двух человек.',
        },
        {
            id: 7,
            img: require('../../images/cases-cover/case7.jpg'),
            title: 'Дизайн проект ул. Восстания 12',
            text: 'Проект однокомнатной квартиры выполнен в скандинавском стиле и предполагает проживание одного или двух человек.',
        },
        {
            id: 8,
            img: require('../../images/cases-cover/case8.jpg'),
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