import {FeaturedProducts, Accesorries,BestSeller,NewArrivals,Shop,Categories,Brands,Footer} from "../navigate"
import {FC} from "react"

const Product : FC = () => {
  return (
    <>
    <FeaturedProducts/>
    <Accesorries/> 
    <BestSeller/>
    <NewArrivals/>
    <Shop/>
    <Categories/>
    <Brands/>

    </>
  )
}

export default Product