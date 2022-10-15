import React from "react";
import Switch from '@mui/material/Switch';
import { ButtonStyle } from "../../utils/button/Button";
import BestIcon from "./BestIcon";

const label = { inputProps: { 'aria-label': 'Switch demo' } };

const BestSeller : React.FC = () => {
  return (
    <div>
      <div className="md:w-4/5 w-10/12 m-auto md:flex md:justify-between items-center mt-32">
        <p className="lg:text-[48px] md:text-[38px] md:text-start md:leading-[56px] md:mb-0
        text-[32px] leading-[40px] text-center font-[700] mb-4
        "
        >Best seller this week</p>
        <p className="text-center">
          <span className="md:font-[500] md:text-[18px] md:leading-[32px]">Men</span>
          <span> <Switch {...label} /></span>
          <span className="md:font-[500] md:text-[18px] md:leading-[32px]">Women</span>
        </p>
      </div>
           
      {/* PRODUCTS */}

      <div className="w-full md:flex mt-16 mb-16">
        <div className="md:w-3/5 w-full mr:ml-10 relative">
          <div className="lg:w-[500px] w- md:w-[300px] w-[200px] h-[150px] lg:h-[450px] md:h-[250px] rounded-r-[30px] 
          bg-gradient-to-r from-[#FFB1B2] to-[#FF3C78]">   
          </div>
          <img 
          className="lg:w-[929px] lg:h-[572.78px] lg:-mt-[450px] lg:-ml-[0]
          md:w-[672.2px] md:h-[415.56px] md:-mt-[300px] -mt-[180px] -ml-[20px]
           "
          src={require("../../assets/BestSeller/image 6.png")} alt="sneaker" />
          <img  className="md:w-[234px] md:h-[76px] absolute 
          lg:bottom-[290px] lg:right-[200px]
          md:bottom-[200px] md:right-[100px]
          w-[140px] h-[45.47px] bottom-[100px] right-[100px]
          "
          src={require("../../assets/BestSeller/mess.png")} alt="mess" />
          <BestIcon isWhich="first"/>
          <BestIcon isWhich="second"/>
          <BestIcon isWhich="third"/>
        </div>


        <div className="mt-4 md:w-2/5 w-full md:ml-15 lg:mt-16 ">
        <div className="flex justify-center md:justify-start  md:ml-0">
            <img className="ml-2" src={require(`../../assets/Products/star1.png`)} alt="start" />
            <img className="ml-2" src={require(`../../assets/Products/star1.png`)} alt="start" />
            <img className="ml-2" src={require(`../../assets/Products/star1.png`)} alt="start" />
            <img className="ml-2" src={require(`../../assets/Products/star1.png`)} alt="start" />
            <img className="ml-2" src={require(`../../assets/Products/star1.png`)} alt="start" />
          </div>
          <p className="font-[700] text-[24px]  -truncate-[0.04rem] leading-[32px] my-5 w-[250px] 
          text-center md:text-start m-auto md:ml-0">Adidas Falcon Shoes for women - 2021 Edition</p>
          <p className="font-[700] text-[24px] w-[100px]  -truncate-[0.04rem] leading-[32px] m-auto md:ml-1">$120.50</p>
          <div className="my-10 flex justify-center md:justify-start">
          <ButtonStyle color="bestSeller">Shop Now</ButtonStyle>
          </div>
        </div>
      </div>
    </div>
  )
}

export default BestSeller