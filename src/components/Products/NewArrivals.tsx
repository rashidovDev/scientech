import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../store';
import { productAction } from '../../store/slices/ProductSlice';

const NewArrivals = () => {

  const isVisible = useSelector((state : RootState)  => state.product.productIsVisible)

  const dispatch = useDispatch()

  const openCloseToggle = () => {
    dispatch(productAction.toggle())
  }
  return (
    <div className='w-full bg-[#F5F5F5] h-[446px]'>
      <div className=' py-24 md:w-4/5 w-11/12 m-auto'>
       <div className="md:flex md:justify-between items-center">
        <p className='text-[#0A083A] md:text-[48px] text-[40px] font-[700] md:leading-[56px] text-center'>New Arrivals</p>
        <p className="text-[14px] md:text-[18px] lg:text-[20px] cursor-pointer text-[#FF3C78] hidden md:inline"><span className="mr-4 ">View all</span><span><ArrowForwardIosIcon sx={{fontSize:"18px"}}/></span></p>
      </div>
      <p 
        className='font-[500] md:mt-10 text-[#6C6B6B] w-[254px] text-[16px] 
        md:font-[16px]  md:leading-[24px] md:w-[300px] md:text-start md:ml-[0] text-center m-auto
        
        '>Enjoy the new products from our store. Select what you like, enjoy & return.</p>
         <p className="text-[14px] md:text-[18px] lg:text-[20px] text-center my-5 cursor-pointer text-[#FF3C78] md:hidden"><span className="mr-4 "
         onClick={openCloseToggle}
         >{isVisible ? `Hide all` : `View all`}</span><span><ArrowForwardIosIcon sx={{fontSize:"18px"}}/></span></p>
      </div>
    </div>
  )
}

export default NewArrivals