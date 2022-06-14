import React from 'react';
import { Link } from 'react-router-dom';

const NotAdded = () => {

    return (
        <div className="hero min-h-screen">
  <div className="hero-content text-center">
    <div className="max-w-md">
      <h1 className="text-2xl font-bold">You do not added item</h1>
      <p className="py-6 text-slate-500">When you added items, you can see here</p>
      <Link className="btn btn-primary" to='/addItem'>Add now</Link>
    </div>
  </div>
</div>
    );
};

export default NotAdded;