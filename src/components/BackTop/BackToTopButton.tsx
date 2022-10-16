import React, { useState, useEffect } from 'react'
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';

const BackToTopButton : React.FC= () => {

    const [backToTopButton, setBackToTopButton] = useState(false)

    useEffect(() => {
        window.addEventListener("scroll", () => {
            if (window.scrollY > 100) {
                setBackToTopButton(true)
            } else {
                setBackToTopButton(false)
            }
        })
    }, [])

    const scrollUp = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        })
    }

    return (
        <>
            {backToTopButton &&
               <div onClick={scrollUp} className='fixed p-3 rounded-full cursor-pointer
               bottom-[200px] z-50 md:right-[150px] right-[100px]  bg-[#A4A4A3] '>
                    <KeyboardArrowUpIcon sx={{fontSize:"30px", color : "#F5F5F5"}}/>
               </div>  
            }

        </>

    )
}

export default BackToTopButton