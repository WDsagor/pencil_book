import React from 'react';
import './Loading.css';
import loadingImg from '../../asset/images/loading.gif';
const Loading = () => {
    return (
        <div className='loading'>
            <img className='image' src={loadingImg} alt="" />
        </div>
    );
};

export default Loading;