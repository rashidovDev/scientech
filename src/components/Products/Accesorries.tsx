import React from 'react'
import {FC} from "react"
import { accesorries } from '../../data'
import { ButtonStyle } from '../../utils/button/Button'

const Accesorries : FC = () => {
  return (
    <div className='w-full mt-32 grid md:grid-cols-2'>
      {
        accesorries.map((access, idx) => (

      <div key={idx + 1} className={`${access.classs === "green" ? `bg-[#02BE83]` : `bg-[#0A083A]`}  bg-[#02BE83] lg:h-[448px] md:h-[318px] relative `}>
            <div className='md:flex justify-around'>
              <div className=''>
                <img
               className={`${access.classs === "green" ? `lg:w-[384px] lg:h-[384px] lg:mt-0 md:mt-14 ` : `lg:w-[384px] lg:h-[220px] md:h-[200.82px] h-[180px] md:mt-20 mt-10`} lg:ml-6 z-40 relative
               md:w-[272.82px] w-[260px] h-[260px] m-auto mb-10
               `}
                src={access.image} alt="football" />
              </div>
              <div className='lg:mt-20 md:pl-6 md:mt-8 md:text-start  text-center'>
                <p className={`${access.classs === "green" ? `text-[#0A083A]` : `text-[#02BE83]`} text-[#0A083A] font-[500] lg:text-[14px] 
                lg:leading-[17px] text-[16px] leading-[24px] md:leading-[17px] my-3 
                `}>
                  Accesorries</p>
                <h1 className='lg:text-[48px] font-[700] lg:leading-[56px] -tracking-[.0.04em]
                 md:text-[32px] md:leading-[40px] my-3 text-[#FFFFFF]
                '>{access.heading}</h1>
                <p className='lg:text-[16px] lg:leading-[24px] font-[500]
                md:text-[14px] md:leading-[17px] my-7 text-[16px] leading-[24px]
                text-[#FFFFFF] lg:w-4/5 md:w-[200px] w-4/5 m-auto md:ml-0
                '
                >{access.title}</p>
                <div className='flex justify-center mt-5 mb-20 md:justify-start'>
                <ButtonStyle color={access.classs}>Shop Now</ButtonStyle>
                </div>
              </div>
              <img className={`lg:h-[125.55px] lg:w-[120px] lg:mt-[200px] 
              md:mt-[200px] md:mr-[170px] w-[81.25px] md:ml-[0] h-[85.01px] ${access.classs === "green" ? `-mt-[430px]` : `-mt-[380px]`} ml-[170px]
              md:w-[85.26px] md:h-[89.2px] lg:mr-[250px] absolute z-10 opacity-90 `}
              src={require("../../assets/Accesorries/Group.png")} alt="group" />
               <img className='lg:w-[104px] lg:h-[70px] absolute top-0  left-0'
            src={require(`../../assets/Accesorries/${access.classs === "green" ? `Ellipse 14.png` : `Ellipse 16.png`}`)} alt="ellipse" />
              <img className='lg:bottom-12 lg:right-[220px] md:bottom-5 md:right-[100px] bottom-[330px] right-12 absolute '
            src={require(`../../assets/Accesorries/${access.classs === "green" ? `Ellipse 11.png` : `Ellipse 15.png`}`)} alt="ellipse" />
            </div>
      </div>
        ))
      }
    </div>
  )
}

export default Accesorries