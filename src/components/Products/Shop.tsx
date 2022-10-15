import { useSelector } from 'react-redux'
import { shop } from '../../data'
import { RootState } from '../../store'

const Shop : React.FC = () => {

  const isVisible = useSelector((state : RootState)  => state.product.productIsVisible)

  return (
   <div className='w-full mb-10'>
    <div className='md:w-4/5 w-11/12 m-auto'>
      <div className='grid md:grid-cols-4 grid-cols-1 md:gap-12 gap-8'>
        {shop.map((product,idx) => (

        <div key={idx + 1}  className={` ${!isVisible ?  (product.id === 1 ? `inline` : `hidden md:inline`) : `` }  mb-32 md:mb-10`}>
         <div className='relative mb-10'>
          <img className={`lg:w-[263px] lg:h-[300px]
          md:w-[210.82] md:h-[170.57px] lg:-mt-[120px] md:-mt-[80px] -mt-[120px]
          m-auto md:ml-[0]
          w-[263px] h-[360px]`}
          src={product.backImage} alt={product.title}/>
          <img
          className={`absolute ] ${product.id === 3 ? `lg:right-[0px] lg:top-[20px] 
          md:right-[0px] md:top-[40px] right-[10px] top-[60px] `
           :  product.id === 4 ? 
          `lg:right-[0px] lg:top-[40px] md:right-[0px] md:top-[50px] right-[10px] top-[60px]`
          : `lg:right-[30px] lg:top-[50px]
          md:right-[10px] md:top-[60px]
          right-[10px] top-[60px]
          `}  -rotate-[10deg]`}
          src={product.image} alt="sneaker" />
          <p className='absolute md:top-2 md:left-5 text-[#FFFFFF] top-4 left-16
          font-[700] lg:text-[48px]  text-[28px]'>{(idx + 1) < 10 ? `0${idx+1}` : idx+1 }</p>
          <p
           className='lg:w-[49px] lg:h-[28px] md:w-[38px] md:h-[25px]
           w-[49px] h-[28px]
           bg-[#FFFFFF] text-[18px] 
           rounded-[16px] text-center cursor-pointer
           absolute lg:bottom-[20px] lg:right-[30px] 
           md:bottom-[10px] md:right-[10px]
           bottom-[30px] right-[70px]
           '>+</p>
         </div>
         <div className="flex justify-center md:justify-start mt-2">
            <img className="ml-2" src={require(`../../assets/Products/${product.rate >= 1 ? `star1.png` : `star5.png`}`)} alt="start" />
            <img className="ml-2" src={require(`../../assets/Products/${product.rate >= 2 ? `star1.png` : `star5.png`}`)} alt="start" />
            <img className="ml-2" src={require(`../../assets/Products/${product.rate >= 3 ? `star1.png` : `star5.png`}`)} alt="start" />
            <img className="ml-2" src={require(`../../assets/Products/${product.rate >= 4 ? `star1.png` : `star5.png`}`)} alt="start" />
            <img className="ml-2" src={require(`../../assets/Products/${product.rate === 5 ? `star1.png` : `star5.png`}`)} alt="start" />
          </div>
          <p className="text-[18px] px-5 md:px-0 w-[300px]  md:w-[178px] lg:w-[214px] flex  text-center m-auto justify-center md:ml-[0] md:justify-start md:text-start leading-[24px] font-[500] md:my-6 my-2">{product.title}</p>
          <p className="lg:text-[32px] text-[24px] flex justify-center md:justify-start font-[700] lg:leading-[40px] md:leading-[32px] -tracking-[0.04em] mb-2">${product.price}</p>
        </div>
        ))}
      </div>


    </div>  
   </div>
  )
}

export default Shop