import React, {useState} from 'react';
import './Cases.css';
import GridCards from '../../GridCards/GridCards';

const Cases = () => {

    const initialCards = [
        {
            id: 1,
            img: require('../../../images/cases-cover/case1.jpg'),
            title: '2-комнатная квартира небольшой площади в новом доме',
            text: 'По желанию Заказчика сделана перепланировка, в гостиной сделан подвесной потолок с теневой диммируемой подсветкой, отделка сделана в нейтральной цветовой гамме в сочетании с оттенками натурального дерева.',
        },
        {
            id: 2,
            img: require('../../../images/cases-cover/case2.jpg'),
            title: 'Дизайн проект ул. Восстания 12',
            text: 'Проект однокомнатной квартиры выполнен в скандинавском стиле и предполагает проживание одного или двух человек.',
        },
        {
            id: 3,
            img: require('../../../images/cases-cover/start-background.jpeg'),
            title: 'Оставили место для вашего проекта',
            text: '',
        },
        // {
        //     id: 4,
        //     img: require('../../../images/cases-cover/case1.jpg'),
        //     title: 'Дизайн проект ул. Восстания 12',
        //     text: 'Проект однокомнатной квартиры выполнен в скандинавском стиле и предполагает проживание одного или двух человек.',
        // },
    ];

    const [cards,
        //  setCards
        ] = useState(initialCards);

    // const handleLoadMore = (cards) => {
    //     const moreState = [
    //         {
    //             id: 5,
    //             img: require('../../../images/cases-cover/case5.jpg'),
    //             title: 'Дизайн проект ул. Восстания 12',
    //             text: 'Проект однокомнатной квартиры выполнен в скандинавском стиле и предполагает проживание одного или двух человек.',
    //         },
    //         {
    //             id: 6,
    //             img: require('../../../images/cases-cover/case6.jpg'),
    //             title: 'Дизайн проект ул. Восстания 12',
    //             text: 'Проект однокомнатной квартиры выполнен в скандинавском стиле и предполагает проживание одного или двух человек.',
    //         },
    //         {
    //             id: 7,
    //             img: require('../../../images/cases-cover/case7.jpg'),
    //             title: 'Дизайн проект ул. Восстания 12',
    //             text: 'Проект однокомнатной квартиры выполнен в скандинавском стиле и предполагает проживание одного или двух человек.',
    //         },
    //         {
    //             id: 8,
    //             img: require('../../../images/cases-cover/case8.jpg'),
    //             title: 'Дизайн проект ул. Восстания 12',
    //             text: 'Проект однокомнатной квартиры выполнен в скандинавском стиле и предполагает проживание одного или двух человек.',
    //         },
    //     ];

    //     setCards([...cards, ...moreState]);
    // };

    const isDisabled = cards.length > 1;
    const className = isDisabled ? "disabled-button" : 'cases__load-more-btn';

    return(
        <> 
        <section className="cases" id="cases">
            <div className="cases__header">
                <div className="blue-dot"></div>
                <h3 className="section__title">портфолио</h3>
            </div>
            <GridCards cards={cards} />
            <button 
                disabled={isDisabled}
                className={className} 
                // onClick={() => handleLoadMore(cards)}
            >ПОКАЗАТЬ ЕЩЁ</button>
        </section>
        </>
    )
}

export default Cases;