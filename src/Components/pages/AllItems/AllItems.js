import React from 'react';

const AllItems = ({item}) => {
    const {name, quantity, price, made, url} = item
    console.log(item);
    return (
        <div>
            <img src={url} alt="" srcset="" />
            <h3>{name}</h3>
            <p>Made : {made}</p>
        </div>
    );
};

export default AllItems;