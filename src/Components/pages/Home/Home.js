import React from "react";
import AllItem from "../../../useHooks/useHooks";
import Carosol from "./Carosol/Carosol";
import SixItem from "./SixItem/SixItem";
import { FaRegArrowAltCircleRight } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import ManageItemInfo from "./ManageItemInfo";
import Loading from "../../Loading/Loading";

const Home = () => {
  const [items,setItems, itemLoading] = AllItem();
  const sixItems = items.slice(-6);
const naviget = useNavigate()
  if(itemLoading){
    return <Loading></Loading>
  }else{
    return (
      <div className="">
        <Carosol></Carosol>
  
        <div className="py-12 px-6">
          <h2 className=" text-4xl text-center text-slate-200 uppercase pt-6 font-semibold">items</h2>
          <p className="text-slate-300 uppercase text-center pt-2 pb-6">Stationery includes materials to be written <br></br>on by hand  or by equipment such as computer printers.</p>
          <div className="max-w-7xl grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mx-auto justify-items-center flex-wrap-reverse">
            {
                sixItems.map(item =>(<SixItem
                key={item._id}
                item={item}
                ></SixItem>)).reverse()
            }
          </div>
          <div className="card-actions justify-center pt-6">
      
          <button className="btn btn-success" onClick={()=>naviget('/inventory')}>see all items <span className=" text-lg px-2 transition hover:translate-x-4 duration-300"><FaRegArrowAltCircleRight/></span></button>
      </div>
        </div>
        <ManageItemInfo></ManageItemInfo>
      </div>
    );
  }
  
};

export default Home;
