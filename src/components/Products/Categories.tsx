import DriveEtaIcon from '@mui/icons-material/DriveEta';
import HeadsetIcon from '@mui/icons-material/Headset';
import PaymentIcon from '@mui/icons-material/Payment';
import ControlCameraIcon from '@mui/icons-material/ControlCamera';
import { prod } from '../../data';

const Categories : React.FC = () => {

  return (
    <div>
       <div className="md:w-4/5 w-full md:flex justify-between m-auto md:mb-24">
         <div className="relative">
          <div>
          <img 
          className="lg:w-[572px] lg:h-[452px] 
          md:w-[435.36px] md:h-[300px] 
          w-[311.36px] h-[246px] m-auto md:ml-[0]
          "
          src={require("../../assets/Category/Rectangle 18.png")} alt="rectangle"/>
          </div>
           <img  className="absolute cursor-pointer lg:bottom-[170px] lg:left-[240px]
            md:bottom-[120px] md:left-[110px]
            bottom-[90px] left-[130px]
           lg:w-[76px] lg:h-[76px] h-[51px]  w-[51px] md:h-[51px]"  
           src={require("../../assets/Category/vidik.png")} alt="" />
           {/* <img  className="absolute lg:bottom-[0px] imgg lg:-left-[20px]
           md:w-[329.67pxpx] md:h-[292.91px] w-[64px] h-[64px]"  
           src={require("../../assets/Category/Group.png")} alt="group" /> */}
         </div>
         <div className='md:ml-10 lg:my-12'>
          <p className=' lg:text-[48px] md:text-[30px] -tracking-[0.04em]  text-[32px] font-[700] 
          lg:leading-[48px]  lg:mb-10 text-center md:text-start
           
          '>Why choose our shop</p>
          <p className='lg:w-[462px] lg:h-[122px] lg:leading-[32px]  leading-[24px]
          text-[18px] md:text-[18px] md:my-7 my-5 m-auto md:ml-[0] text-center md:text-start
          w-[330px] h-[114px] text-[#6C6B6B]
          '
          >For explosive events (sprints up to 400 metres, long jump, triple jump) 
          the reduction in atmospheric pressure means there is less resistance from 
          the atmosphere.</p>
          <div className='grid md:grid-cols-2 grid-cols-1 md:gap-1 md:mt-8 text-center'>
            <p  className='md:my-2 my-2'><span className='lg:pr-5 md:pr-1 md:text-[18px] text-[#0A083A]'>Fast Delivery</span><span><DriveEtaIcon sx={{color : "#315BFF"}}/></span></p>
            <p className='md:my-2 my-2'><span className='lg:pr-5 md:pr-1 md:text-[18px] text-[#0A083A]'>Great Support</span><span><HeadsetIcon sx={{color : "#315BFF"}}/></span></p>
            <p className='md:my-2 my-2'><span className='lg:pr-5 md:pr-1 md:text-[18px] text-[#0A083A]'>Cool Prices</span><span><PaymentIcon sx={{color : "#315BFF"}}/></span></p>
            <p className='md:my-2 my-2'><span className='lg:pr-5 md:pr-1 md:text-[18px] text-[#0A083A]'>High Quality</span><span><ControlCameraIcon sx={{color : "#315BFF"}}/></span></p>
          </div>
         </div>
       </div>

       <div className='lg:w-4/5 w-full m-auto my-10'>
        <p className='md:text-[48px] font-[700] 
         text-[32px] md:text-center px-10 md:px-[0] md:w-[510px] w-[177px] md:m-auto leading-[40px] md:my-10 my-8'>Choose categories</p>
       <p className='md:w-[639px] md:m-auto w-[311px] m-auto md:leading-[32px] md:text-center'>For explosive events (sprints up to 400 metres, long jump, triple jump)
        the reduction in atmospheric pressure means there is less resistance from the atmosphere.
        </p> 
       </div>
        
        <div className='lg:w-4/5 m-auto grid md:grid-cols-3  gap-12'>
          {prod.map((prod,idx) => (
       <div key={idx + 1} className='lg:w-[358px] lg:h-[382px]
       md:w-[258px] md:h-[382px] h-[340px] relative 
       rounded-[16px] bg-[#F5F5F5] pt-10 px-5 m-5'>
        <p className={`md:text-[32px] text-[24px] md:leading-[40px] md:w-[192px]
        font-[700] text-[${prod.color}] pb-5`}>{prod.heading}</p>
        <p className='leading-[32px] text-[18px] text-[#6C6B6B] py-5 '>{prod.count}</p>
        <p className={`text-[20px] leading-[32px] text-[${prod.color}] `}>See collection</p>
        <img className='absolute top-12 right-5 md:w-[70px] w-[50px]'
        src={prod.ellipse} alt="ellipse" />
        <img className='-mt-[20px] h-[280px]'
        src={prod.image} alt="" />
       </div>
          ))}
          </div>
        </div>
  )
}
export default Categories
