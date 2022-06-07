import React, {useState} from 'react';
import './Cases.css';
import GridCards from '../../GridCards/GridCards';

const Cases = () => {

    const initialCards = [
        {
            id: 1,
            img: require('../../../images/cases-cover/case1.jpg'),
            title: 'Дизайн проект ул. Восстания 12',
            text: 'Проект однокомнатной квартиры выполнен в скандинавском стиле и предполагает проживание одного или двух человек.',
        },
        {
            id: 2,
            img: require('../../../images/cases-cover/case2.jpg'),
            title: 'Дизайн проект ул. Восстания 12',
            text: 'Проект однокомнатной квартиры выполнен в скандинавском стиле и предполагает проживание одного или двух человек.',
        },
        {
            id: 3,
            img: require('../../../images/cases-cover/case3.jpg'),
            title: 'Дизайн проект ул. Восстания 12',
            text: 'Проект однокомнатной квартиры выполнен в скандинавском стиле и предполагает проживание одного или двух человек.',
        },
        {
            id: 4,
            img: require('../../../images/cases-cover/case4.jpg'),
            title: 'Дизайн проект ул. Восстания 12',
            text: 'Проект однокомнатной квартиры выполнен в скандинавском стиле и предполагает проживание одного или двух человек.',
        },
    ];

    const [cards, setCards] = useState(initialCards);

    const handleLoadMore = (cards) => {
        const moreState = [
            {
                id: 5,
                img: require('../../../images/cases-cover/case5.jpg'),
                title: 'Дизайн проект ул. Восстания 12',
                text: 'Проект однокомнатной квартиры выполнен в скандинавском стиле и предполагает проживание одного или двух человек.',
            },
            {
                id: 6,
                img: require('../../../images/cases-cover/case6.jpg'),
                title: 'Дизайн проект ул. Восстания 12',
                text: 'Проект однокомнатной квартиры выполнен в скандинавском стиле и предполагает проживание одного или двух человек.',
            },
            {
                id: 7,
                img: require('../../../images/cases-cover/case7.jpg'),
                title: 'Дизайн проект ул. Восстания 12',
                text: 'Проект однокомнатной квартиры выполнен в скандинавском стиле и предполагает проживание одного или двух человек.',
            },
            {
                id: 8,
                img: require('../../../images/cases-cover/case8.jpg'),
                title: 'Дизайн проект ул. Восстания 12',
                text: 'Проект однокомнатной квартиры выполнен в скандинавском стиле и предполагает проживание одного или двух человек.',
            },
        ];

        setCards([...cards, ...moreState]);
        
    };

    return(
        <> 
        <section className="cases" id="cases">
            <div className="cases__header">
                <div className="blue-dot"></div>
                <h3 className="section__title">портфолио</h3>
            </div>
            <GridCards cards={cards} />
            <button 
                className="cases__load-more-btn" 
                onClick={() => handleLoadMore(cards)}
            >ПОКАЗАТЬ ЕЩЁ</button>
        </section>
        </>
    )
}

export default Cases;