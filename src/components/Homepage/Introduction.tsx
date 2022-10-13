import {ButtonStyle} from "../../utils/button/Button"
import {free} from "../../data"

const Introduction : React.FC = () => {
  return (
    <main className="md:w-4/5 w-10/12 m-auto  lg:mt-20  md:flex md:justify-center">
      <div className="mt-10 text-center md:text-start ">
        <p className="text-[32px] md:text-[48px] lg:text-[72px] font-[700] lg:w-[618px] 
        md:w-[412px] w-[311px] leading-[40px] md:leading-[56px] lg:leading-[80px]">
          Get your awesome sneakers
        </p>
        <p className="lg:w-[429px] font-[500] md:leading-[32px] leading-[24px] text-[16px]
        md:text-[20px] md:mt-14 mt-10
        ">We offer the best deals in our shop.
        Check them out now.We have awesome stuff on sale for you</p>
        <div className="flex justify-center items-center mt-5 md:justify-start"> 
        <ButtonStyle color="home">Shop Now</ButtonStyle>
        <img src={require("../../assets/Homepage/heart.png")} alt="heart" className="ml-6" />
        </div>
        <div>
        {
          free.map((item, idx) => (
            <p className="flex items-center" key={idx}><img className="w-[28px] h-[28px]" src={item.img} alt={item.text} /> <span>{item.text}</span></p>
          ))
        }
        </div>
      </div>
      <div className="">
        <img className=" lg:w-[859.06px]  lg:h-[566.48px] md:w-[768.01px] md:h-[506.44px] w-[434.95px] h-[286.81px] -rotate-[0deg]" src={require("../../assets/Homepage/image.png")} alt="sneaker" />
      </div>
    </main>
  )
}

export default Introduction