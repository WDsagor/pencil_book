import React from 'react';
import { useNavigate } from 'react-router-dom';
import manageImage from '../../../asset/images/manage.png'

const ManageItemInfo = () => {
    const naviget= useNavigate();

    return (
        <div class="hero min-h-screen bg-transparent">
            {/* <div class="hero-overlay "></div> */}
  <div class="hero-content flex-col lg:flex-row-reverse text-white">
    <img src={manageImage} class="max-w-sm rounded-lg shadow-2xl" alt='' />
    <div className='lg:pr-10'>
      <h1 class="text-4xl font-bold">Manage your items !</h1>
      <p class="py-6">You can manage your uploaded items , update, delete etc.</p>
      <button class="btn btn-accent" onClick={()=>naviget('/myItem')}>Manage  now !</button>
    </div>
  </div>
</div>
    );
};

export default ManageItemInfo;