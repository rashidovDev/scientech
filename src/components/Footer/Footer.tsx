import React from "react"
import TwitterIcon from '@mui/icons-material/Twitter';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import { home, myAccount, ourInformation } from "../../data";

const Footer : React.FC = () => {
  return (
    <footer className="md:mt-96 mb-10 relative">
        <p className="md:hidden  w-[350px] m-auto text-[16px] text-[#6C6B6B] text-center py-5 ">Our shop is the best choice for buying footwear.</p>
      <div className="py-5 lg:w-4/5 lg:ml-auto md:w-[750px] md:ml-5 bord md:m-auto w-[400px] m-auto text-center md:text-start md:py-16 grid md:grid-cols-4 ">
      <div className="">
      <img className=" md:mb-5 hidden md:block" src={require("../../assets/Homepage/logo.png")} alt="homepage" />
      <p className="hidden md:inline lg:w-[232px] md:w-[204px] w-[350px] m-auto md:ml-[0] md:my-5 text-[16px] text-[#6C6B6B] lg:mt-10 ">Our shop is the best choice <br/> for buying footwear.</p>
      </div>
      <div className="md:flex flex-col">
        <p className="font-bold mb-5 text-[#0A083A] text-[24px] leading-[32px]">Home</p>
        {home.map((item, idx) => (
        <p className="hidden md:inline text-16px leading-[24px] text-[#6C6B6B] md:my-2" key={idx}>{item.name}</p>
        ))}
      </div>
      <div className = "md:flex flex-col">
        <p className="font-bold mb-5 text-[#0A083A] text-[24px] leading-[32px]">Our Information</p>
        {ourInformation.map((item, idx) => (
        <p className="hidden md:inline text-16px leading-[24px] text-[#6C6B6B] md:my-2" key={idx}>{item.name}</p>
        ))}
      </div>

      <div className = "md:flex flex-col">
        <p className="font-bold mb-5 text-[#0A083A] text-[24px] leading-[32px]">My Account</p>
        {myAccount.map((item, idx) => (
        <p className="hidden md:inline text-16px leading-[24px] text-[#6C6B6B] md:my-2" key={idx}>{item.name}</p>
        ))}
      </div>
      </div>
      
      <div className="md:w-4/5 md:m-auto">
      <div className="flex my-3 absolute lg:bottom-[103px] lg:left-[135px] 
      left-[130px] md:bottom-[130px] md:left-[10px]">
      <p className='ml-1 p-2 '><TwitterIcon sx={{color:"#FF3C78"}}/></p>
            <p className=' ml-1 p-2 '><FacebookIcon sx={{color:"#FF3C78"}}/></p>
            <p className='ml-1 p-2   '><InstagramIcon sx={{color:"#FF3C78"}}/></p>
      </div>
      <p className="text-[14px] text-[#6C6B6B] md:w-[500px] w-[200px] md:ml-[0] m-auto md:text-start text-center pt-16 md:p-[0]">© 2021 Shop. Made with love for Brightscout </p>
      </div>
    </footer>
  )
}

export default Footer