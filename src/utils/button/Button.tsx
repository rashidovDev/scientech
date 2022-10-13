import React, { FC } from 'react'

interface IButton{
    children:React.ReactNode
    color : string
}

export const ButtonStyle:FC<IButton>=({children,color})=> {
  return (
    <div className={`md:w-[180px] md:h-[46.3px] rounded-[4px] ${color}
     items-center flex justify-center text-[#fff] w-[125px] h-[46px]` }>
        <p>{}</p>
        {children}
    </div>
  )
}