import { useEffect } from "react";
import Banner from "../../components/banner/banner"
import Brands from "../../components/brands/brands";
import Category from "../../components/category/category"
import Features from "../../components/features.js/features"
// import LatestCard from "../latest_sec/latestCard"
import Trending_sec from "../trending_sec/trendding_sec";
import Features2 from "../../components/features.js/features2";
import TrendSkeleton from "../../components/skeleton/trendSkeleton";
import HotSkeleton from "../../components/skeleton/hotSkeleton";
import LatestSkeleton from "../../components/skeleton/latestSkeleton";
import HeadingBrandSkeleton from "../../components/skeleton/brandHeadingSkeleton";
import BrandSkeleton from "../../components/skeleton/brandSkeleton";
import HeadingCategorySkeleton from "../../components/skeleton/headingCategorySkeleton";
import CategorySkeleton from "../../components/skeleton/categorySkeleton";



const Layout = ({cart, load, setLoad}) => {

    return (
        <>
            <Banner />
            <Features />
            <HeadingCategorySkeleton/>
            <CategorySkeleton/>
            <Category load={load} setLoad={setLoad} />
            <Trending_sec cart={cart} load={load} setLoad={setLoad}/>
            <Brands load={load} setLoad={setLoad} />
            <Features2/>
                {/* <LatestSkeleton/>
                <TrendSkeleton/> */}
        </>
    )
}

export default Layout