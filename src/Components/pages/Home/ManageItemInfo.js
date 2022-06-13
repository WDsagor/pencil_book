import React from 'react';
import { useNavigate } from 'react-router-dom';
import manageImage from '../../../asset/images/manage.png'

const ManageItemInfo = () => {
    const naviget= useNavigate();

    return (
        <div className="hero min-h-screen bg-transparent">
            {/* <div className="hero-overlay "></div> */}
  <div className="hero-content flex-col lg:flex-row-reverse text-white">
    <img src={manageImage} className="max-w-sm rounded-lg shadow-2xl" alt='' />
    <div className='lg:pr-10'>
      <h1 className="text-4xl font-bold">Manage your items !</h1>
      <p className="py-6">You can manage your uploaded items , update, delete etc.</p>
      <button className="btn btn-accent" onClick={()=>naviget('/myItem')}>Manage  now !</button>
    </div>
  </div>
</div>
    );
};

export default ManageItemInfo;