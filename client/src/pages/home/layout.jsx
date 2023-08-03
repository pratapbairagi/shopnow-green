import { useEffect } from "react";
import Banner from "../../components/banner/banner"
import Brands from "../../components/brands/brands";
import Category from "../../components/category/category"
import Features from "../../components/features.js/features"
// import LatestCard from "../latest_sec/latestCard"
import Trending_sec from "../trending_sec/trendding_sec";



const Layout = ({cart}) => {

    return (
        <>
            <Banner />
            <Features />
            <Category />
            <Trending_sec cart={cart}/>

        {/* <LatestCard/> */}
        
            <Brands />


        </>
    )
}

export default Layout