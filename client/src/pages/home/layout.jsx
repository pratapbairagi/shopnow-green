import { useEffect } from "react";
import Banner from "../../components/banner/banner"
import Brands from "../../components/brands/brands";
import Category from "../../components/category/category"
import Features from "../../components/features.js/features"
// import LatestCard from "../latest_sec/latestCard"
import Trending_sec from "../trending_sec/trendding_sec";
import Features2 from "../../components/features.js/features2";



const Layout = ({cart}) => {

    return (
        <>
            <Banner />
            <Features />
            <Category />
            <Trending_sec cart={cart}/>
        
            <Brands />

            <Features2/>


        </>
    )
}

export default Layout