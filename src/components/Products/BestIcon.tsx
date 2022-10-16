import React from 'react'

interface BIcon {
    isWhich : string
}

const BestIcon : React.FC <BIcon> = ({isWhich}) => {
  return (
    <img className={`absolute
    ${isWhich === "first" ? `lg:bottom-[370px] lg:left-[320px]
                              md:bottom-[280px] md:left-[150px]
                              bottom-[140px] left-[100px]`
     : isWhich === "second" ? `lg:bottom-[230px] lg:left-[240px]
                               md:bottom-[170px] md:left-[100px]
                               bottom-[80px] left-[178px]`
     : isWhich === "third"  ? `lg:bottom-[240px] lg:left-[572px] 
                              md:bottom-[165px] md:left-[350px]
                              bottom-[90px] left-[70px]` : ``
    }
    lg:w-[46.09px] lg:h-[46.09px]
    md:w-[33.44px] md:h-[33.44px]
    w-[20.69px] h-[20.69px]`}
    src={require("../../assets/BestSeller/Pin.png")} alt="pin" />
  )
}

export default BestIcon