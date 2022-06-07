import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/pagination";
import "swiper/css/navigation";
import AllItem from "../../../../useHooks/useHooks";
import {EffectFade, Autoplay, Navigation, Pagination } from "swiper";
import { useNavigate } from "react-router-dom";

// import img1 from "../../../../asset/images/img1.jpg";
// import img2 from "../../../../asset/images/img2.jpg";
// import img3 from "../../../../asset/images/img3.jpg";

const Carosol = () => {
  const [items] = AllItem([]);
  const sixItems = items.slice(-6);
  const naviget = useNavigate()
  const itemUpdate = id =>{
    naviget(`/update/${id}`)
  
  }
  return (
    <>
      <Swiper className=" max-h-screen"
      autoHeight={false}
      loop={true}
      // spaceBetween={30}
      effect={"fade"}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[EffectFade, Autoplay, Pagination, Navigation]}
      >
        {sixItems.map((item) => (
          <SwiperSlide key={item._id} item={item}>
            <>
            <div className="hero min-h-screen text-white bg-teal-900">
  <div className="hero-content flex-col lg:flex-row-reverse">
    <img src={item.url} className=" h-72 md:h-96 rounded-lg shadow-2xl" alt="" />
    <div>
      <h1 className=" tex-2xl md:text-3xl lg:text-5xl font-bold">{item.name}</h1>
      <p className="py-6">Available Quantity : {item.quantity}</p>
      <button className="btn btn-accent" onClick={()=>itemUpdate(item._id)}>Update item !</button>
    </div>
  </div>
</div>
    </>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};

export default Carosol;
