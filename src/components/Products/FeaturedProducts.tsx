import {FC} from "react"
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import { products } from "../../data";

const FeaturedProducts : FC = () => {
  return (
    <div className='md:w-4/5 w-10/12 m-auto mt-16 mb-8'>
      <div className="md:flex md:justify-between items-center">
        <p className='text-[#0A083A] md:text-[48px] text-[32px] font-[700]'>Featured Products</p>
        <p className="text-[14px] md:text-[18px] lg:text-[20px] cursor-pointer text-[#FF3C78] hidden md:inline"><span className="mr-4 ">View all</span><span><ArrowForwardIosIcon sx={{fontSize:"18px"}}/></span></p>
      </div>
      <div className="my-24 grid md:grid-cols-4 grid-cols-1 md:gap-4 gap-8">
        {products.map((product,idx) => (
        <div key={idx+1} className=" lg-1/4">
          <img className="lg:ml-16 m-auto" src={product.ellipse} alt={product.title} />
          <img 
          className={`lg:-mt-[90px] md:-mt-[90px] -mt-[90px] ${product.id === 4 ? `lg:w-[320.27px] lg:h-[180.82px]` : `lg:w-[293.27px] lg:h-[180.82px]`} lg:w-[293.27px] lg:h-[180.82px] md:w-[235.79px] 
          md:h-[145.38px] w-[293.27px] h-[180.82px] ml-8 md:ml-0`}
           src={product.image} alt={product.title} />
          <div className="flex justify-center md:justify-start">
            <img className="ml-2" src={require(`../../assets/Products/${product.rate >= 1 ? `star1.png` : `star5.png`}`)} alt="start" />
            <img className="ml-2" src={require(`../../assets/Products/${product.rate >= 2 ? `star1.png` : `star5.png`}`)} alt="start" />
            <img className="ml-2" src={require(`../../assets/Products/${product.rate >= 3 ? `star1.png` : `star5.png`}`)} alt="start" />
            <img className="ml-2" src={require(`../../assets/Products/${product.rate >= 4 ? `star1.png` : `star5.png`}`)} alt="start" />
            <img className="ml-2" src={require(`../../assets/Products/${product.rate === 5 ? `star1.png` : `star5.png`}`)} alt="start" />
          </div>
          <p className="text-[18px] px-5 md:px-0 md:w-[178px] lg:w-[214px] flex  text-center m justify-center md:justify-start md:text-start leading-[24px] font-[500] md:my-6 my-2">{product.title}</p>
          <p className="lg:text-[32px] text-[24px] flex justify-center md:justify-start font-[700] lg:leading-[40px] md:leading-[32px] -tracking-[0.04em] mb-2">{product.price}</p>
        </div>
        ))}
        <p className="text-[14px] md:text-[18px] lg:text-[20px] cursor-pointer text-[#FF3C78] md:hidden text-center "><span className="mr-4 ">View all</span><span><ArrowForwardIosIcon sx={{fontSize:"18px"}}/></span></p>
      </div>
      <div className="w-[548px]  bg-[#EBEBEA] border-2 h-[6px] md:flex md:m-auto hidden"><span className="bg-[#02BE83] w-[180px] ml-16 rounded-[8px] py-[1.5px]"></span> </div>
    </div>
  )
}
export default FeaturedProducts;

