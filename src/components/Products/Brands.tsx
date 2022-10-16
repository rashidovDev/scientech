import Slider from "react-slick";
import { carousel } from "../../data";
import Subscribe from "./Subscribe";

const Brands = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 300,
    slidesToShow: 4,
    slidesToScroll: 1,
  }
  return (
    <>
    <div className="w-full my-32 relative py-10 bg-[#F5F5F5] md:h-[815px] md:mb-16">
      <div className="md:text-[48px] md:w-[369px] font-[700] 
      md:m-auto text-[#0A083A] md:mb-16 text-[32px] text-center my-10">
        <p>Popular brands</p>
      </div>
      <div className="md:w-4/5 m-auto   text-center grid md:grid-cols-4 grid-cols-1">
      {carousel.map((item,idx) => (
      <div key={idx+1} className=" lg:w-[225px] mx-5 lg:h-[200px] md:w-[130px] md:h-[170px] 
       bg-[#FFFFFF] rounded-[5px] md:mx-5 mb-5 md:mb-0">
        <div className="m-5 h-4/5 border-dashed border-2 border-[#EBEBEA]">
          <div className={`${item.id === 1 ? `my-[60px]` : `my-[30px]`} flex justify-center`}>
           <img 
           src={item.image} alt="brand" />
          </div>
        </div>
      </div>
      ))}
      
      </div>

    {/* I tried to use carousel there but it affected my project styles
    because of this i just create boxes */}

    {/* <Slider {...settings} >
      {carousel.map((item,idx) => (
      <div key={idx+1} className="w-[200px] mx-5 md:h-[200px] bg-[#FFFFFF] rounded-[5px]">
        <div className="m-5 h-4/5 border-dashed border-2 border-[#EBEBEA]">
           <img className="mx-auto "
           src={item.image} alt="brand" />
        </div>
      </div>
      ))}
    </Slider> */}
    <img  className="absolute lg:top-0 lg:left-0 lg:w-[168px] 
    md:top-7 md:w-[120px] md:-rotate-[90deg] md:-ml-[30px]
    top-7 w-[80px] -rotate-[90deg] -ml-[30px]
     lg:h-[100px]"
      src={require("../../assets/Brand/Ellipse 14.png")} alt="ellipse" />
   <Subscribe/>
  </div>
    </>
  )
}

export default Brands;
