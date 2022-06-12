import React from 'react';
import loadingImg from '../../asset/images/loading.gif';
const Loading = () => {
    return (
        <div className=' min-h-screen flex justify-center items-center'>
            <img className=' w-40' src={loadingImg} alt="" />
        </div>
    );
};

export default Loading;