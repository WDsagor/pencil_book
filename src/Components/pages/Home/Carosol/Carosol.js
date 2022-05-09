import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";

import img1 from "../../../../asset/images/img1.jpg"
import img2 from "../../../../asset/images/img2.jpg"
import img3 from "../../../../asset/images/img3.jpg"
import './Carosol.css'



const Carosol = () => {


  return (
    <div className='carosule-area'>
      <Carousel>
                <div>
                    <img src={img1} alt=""/>
                    <p className="legend">Legend 1</p>
                </div>
                <div>
                    <img src={img2} alt="" />
                    <p className="legend">Legend 2</p>
                </div>
                <div>
                    <img src={img3} alt=""/>
                    <p className="legend">Legend 3</p>
                </div>
            </Carousel>
    </div>
  )
};

export default Carosol;