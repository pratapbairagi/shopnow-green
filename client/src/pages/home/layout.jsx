import Banner from "../../components/banner/banner"
import Brands from "../../components/brands/brands";
import Category from "../../components/category/category"
import Features from "../../components/features.js/features"
import ProductNotificationRoaster from "../../components/product_notification_toaster/productNotificationToaster";
// import LatestCard from "../latest_sec/latestCard"
import Trending_sec from "../trending_sec/trendding_sec";



const Layout = ({cart, products}) => {

    return (
        <>
            <Banner />
            <Features />
            <Category />
            <ProductNotificationRoaster/>
            <Trending_sec cart={cart} products={products}/>

        {/* <LatestCard/> */}
        
            <Brands/>


        </>
    )
}

export default Layout