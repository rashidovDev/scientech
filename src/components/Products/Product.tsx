import {FeaturedProducts, Accesorries,BestSeller,NewArrivals,Shop,Categories,Brands} from "../navigate"
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