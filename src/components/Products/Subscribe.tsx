import TwitterIcon from '@mui/icons-material/Twitter';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import React from "react"

const Subscribe : React.FC = () => {
  return (
    <div className="w-full">
        <div className="relative lg:w-[1280px] md:w-[768px] md:h-[568px] mb-10 lg:mt-[200px] 
        md:mt-[150px] backk rounded-[5px]">
        <div className="lg:w-3/4 md:ml-10 lg:m-auto py-24 md:flex justify-between">
            <div>
                <p className="lg:w-[558px] md:w-[400px] lg:text-[48px] md:text-[40px] md:leading-[56px] 
                leading-[40px] font-[700] pb-16 text-[#FFFFFF] w-[320px] m-auto md:ml-[0] text-center md:text-start text-[40px] ">Subscribe now to get the latest updates</p>
                <div className=''>
                   <div className="lg:w-[554px] lg:h-[86px] flex justify-center items-center rounded-t-[12.5199px]
                   md:w-[401.2px] md:h-[71.56px] bg-[#F5F5F5] p-5 text-[#6C6B6B]
                   w-[289px] h-[44.86px] m-auto md:ml-[0]
                   ">Enter you email</div>
                   <div className="lg:w-[554px] lg:h-[86px]  p-5 flex justify-center items-center
                   md:w-[401.2px] md:h-[71.56px] bg-[#315BFF] rounded-b-[12.5199px] text-[#FFFFFF]
                   w-[289px] h-[44.86px] m-auto md:ml-[0]
                   "
                   >SUBSCRIBE</div>
                </div>
            </div>
            <div>
                <img className='z-50 relative lg:ml-[90px] md:-ml-[40px]'
                src={require("../../assets/Brand/image 10.png")} alt="" />
            </div>
        </div>
        <img className="absolute lg:top-12 lg:left-5 lg:inline hidden"
        src={require("../../assets/Brand/Ellipse 15.png")} alt="ellipse" />
          <img className="absolute lg:bottom-12 lg:right-10
           lg:w-[250px] md:w-[180px] w-[180px] md:bottom-24 md:right-12 bottom-[50px] right-20"
        src={require("../../assets/Brand/Ellipse 16.png")} alt="ellipse" />
        <div className='flex justify-center items-center absolute lg:bottom-[461.4px] lg:left-[1011px]
        md:bottom-5 md:left-6 bottom-[441.1px] left-[110px]
        '>
            <p className='p-3 mx-1 rounded-full bg-white'><TwitterIcon sx={{color:"#315BFF"}}/></p>
            <p className='p-3 mx-1 rounded-full bg-white'><FacebookIcon sx={{color:"#315BFF"}}/></p>
            <p className='p-3 mx-1 rounded-full bg-white'><InstagramIcon sx={{color:"#315BFF"}}/></p>
        </div>
        </div>

    </div>
  )
}

export default Subscribe