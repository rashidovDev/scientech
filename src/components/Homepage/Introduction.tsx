import { ButtonStyle } from "../../utils/button/Button"
import { free } from "../../data"
import ArrowCircleRightOutlinedIcon from '@mui/icons-material/ArrowCircleRightOutlined';
import ArrowCircleLeftOutlinedIcon from '@mui/icons-material/ArrowCircleLeftOutlined';
import { color } from "@mui/system";

const Introduction: React.FC = () => {
  return (
    <main className="md:w-4/5 w-10/12 m-auto md:mt-20 mt-5  md:flex">
      <div className="mt-10 text-center md:text-start lg:w-3/5 md:w-1/2">
        <p className="text-[32px]  md:text-[48px] lg:text-[72px] font-[700] 
         leading-[40px] md:leading-[56px] lg:leading-[80px]">
          Get your awesome sneakers
        </p>
        <p className="lg:w-[429px] font-[500] md:leading-[32px] leading-[24px] text-[16px]
        md:text-[20px] md:mt-14 mt-10
        ">We offer the best deals in our shop.
          Check them out now.We have awesome stuff on sale for you</p>
        <div className="flex justify-center items-center mt-10 md:justify-start">
          <ButtonStyle color="home">Shop Now</ButtonStyle>
          <img src={require("../../assets/Homepage/heart.png")} alt="heart" className="ml-6" />
        </div>
        <div className="md:flex md:items-center mt-16 ml-20">
          {
            free.map((item, idx) => (
              <p className="flex items-center mr-16 my-5" key={idx}><img className="w-[28px] h-[28px] mr-3" src={item.img} alt={item.text}
              /> <span>{item.text}</span></p>
            ))
          }
        </div>
      </div>

      <div className="mt-5 lg:w-2/5 md:w-1/2">  

      <img 
      className="lg:w-[859.06px] lg:h-[566.48px] md:w-[768.01px] md:h-[506.44px] w-[434.95px] h-[286.81px]" 
      src={require("../../assets/Homepage/deskto.png")} alt="" />
      <div className="flex justify-center mt-3">
        <ArrowCircleLeftOutlinedIcon sx={{ fontSize : "33.33px", color : "#315BFF",marginRight : "10px" }}/>
        <ArrowCircleRightOutlinedIcon sx={{ fontSize : "33.33px", color : "#315BFF" }}/>
      </div>
      {/* <div>
        <img className=" lg:w-[350px] lg:h-[394px] md:w-[388px] md:h-[389px] "  
        src={require("../../assets/Homepage/group/gradient.png")} alt="sneaker" />
        </div>

        <div>
         <img className="lg:w-[378.62px] lg:h-[397.16px]
         lg:-mt-[380px]  md:-mt-[180px]" src={require("../../assets/Homepage/group/blue.png")} alt="sneaker" />
        </div>

        <div>
        <img className="-mt-96 lg:w-[487.52px]  lg:h-[397.16px] md:-mt-[250px] "  
        src={require("../../assets/Homepage/group/green.png")} alt="sneaker" />
        </div>

        <div>
        <img 
        className="lg:-mt-[500px] lg:w-[2000px] lg:h-[566px] md:-mt-[500px] lg:
         md:w-[768.01px] md:h-[506.44px] w-[434.95px] h-[286.81px] z-40 -rotate-[0deg]" 
        src={require("../../assets/Homepage/image.png")} alt="sneaker" />
        </div>

        <div 
        className="w-[289px] h-[70px] lg:-ml-[120px] lg:-mt-[300px] radius-[32px] bg-white relative
        rounded-[12px] flex text-[14px] justify-center items-center font-[500] px-3
        shadow-[0px 5px 8px rgba(45, 78, 245, 0.1) ]
        ">   
         <div className="w-[40px] h-[40px] absolute -top-5 right-2">
         <img src={require("../../assets/Homepage/lock.png")} alt="lock" />
        </div>
             <img className="w-[45px] h-[45px] mr-2"
              src={require("../../assets/Homepage/group/joan.png")} alt="joan" />
             <p><span>Joan</span> has just purchased these sneakers now</p>
        </div>
        <div>
        <img className="-mt-96 lg:w-[72.87px] lg:h-[97.41px] lg:-mt-[190px]"  
        src={require("../../assets/Homepage/group/3.png")} alt="sneaker" />
        </div>
        <div>
        <img className="-mt-96 lg:w-[200.87px] lg:h-[200.41px] lg:-mt-[190px]"  
        src={require("../../assets/Homepage/group/decoration.png")} alt="sneaker" />
        </div>
        <div>
        <img className="-mt-96 lg:w-[160.18px] lg:h-[147.27px] lg:mt-[100px] lg:ml-[150px]"  
        src={require("../../assets/Homepage/group/2.png")} alt="sneaker" />
        </div>
        <div>
        <img className="-mt-96 lg:w-[21.33px] lg:h-[21.33px] lg:-mt-[100px] lg:ml-[430px] z-50"  
        src={require("../../assets/Homepage/group/4.png")} alt="sneaker" />
        </div> */}
        
      </div>
    </main>
  )
}

export default Introduction