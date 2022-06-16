import React from 'react';
import './PostDataFailed.css';

const PostDataFailed = () => {
    return (
        <div className='failed'>
            <span className='failed__text'>Скорее всего что-то пошло не так! Попробуйте ещё раз!</span>
        </div>
    );
};

export default PostDataFailed;