import React, {useState} from 'react';
import './GridCard.css';
import Slider from '../Slider/Slider';
import ModalWindow from '../Modal/Modal';

const GridCard = ({caseItem}) => {

    const [modalActive, setModalActive] = useState(false);

    return(
        <>
        <div 
            className="cases__grid-item" 
            style={{backgroundImage: `url(${caseItem.img})`}}
            onClick={() => setModalActive(true)}
            >
            <h3 className="cases__name">{ caseItem.title }</h3>
            <p className="cases__description">{ caseItem.text }</p>

            
        </div> 
        <ModalWindow active={modalActive} setActive={setModalActive}>
            <Slider />
        </ModalWindow>
        </>
    )
}

export default GridCard;