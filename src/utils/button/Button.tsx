import React, { FC } from 'react'

interface IButton{
    children:React.ReactNode
    color : string
}

export const ButtonStyle:FC<IButton>=({children,color})=> {
  return (
    <div className={`lg:w-[180px] lg:h-[46.3px] md:w-[127.88px] md:h-[32.89px] w-[180px] h-[46.3px] rounded-[4px] ${color}
     items-center flex justify-center text-[#fff] w-[125px] h-[46px] cursor-pointer` }>
        {children}
    </div>
  )
}