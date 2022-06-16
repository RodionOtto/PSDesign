import React from 'react';
import './Modal.css';

const ModalWindow = ({active, setActive, children}) => {
    return(
        <div className={active ? 'modalWindow active' : 'modalWindow'} onClick={() => setActive(false)}>
        <div className={active ? 'modalWindow__content active' : 'modalWindow__content'} onClick={e => e.stopPropagation()}>
        <button 
        className='modalWindow__close-btn' 
        onClick={() => setActive(false)}
        ></button>
            {children}
        </div>
    </div>
    )
}

export default ModalWindow;