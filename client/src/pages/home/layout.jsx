import { useEffect, useState } from "react";
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
import BannerSkeleton from "../../components/skeleton/bannerSkeleton";
import FeaturesSkeleton from "../../components/skeleton/featuresSkeleton";
import { Select } from "antd";



const Layout = ({ cart, load, setLoad }) => {
    // let options = []
    // const [color, setColor] = useState([])

    // const colorChangeHandler = async (c) => {

    //     if (color.length < 1 ) {
    //         options.push(c)
    //         setColor([c])
    //     }
    //     else {

    //         let y = color.find(v => v.value === c.value)
    //         if (y === undefined) {
    //             options.push(c)
    //             setColor([...color, c])
    //         }
    //         else {
                
    //             if (color.length > 0) {
    //                 options = color.filter(v => v.value !== c.value)
    //                 setColor(options)
    //             }
    //             else {
    //                 options = []
    //                 setColor([])
    //             }
    //         }
    //     }

    // }


    return (
        <>
            <Banner load={load} />
            <Features load={load} />
            <Category load={load} setLoad={setLoad} />
            <Trending_sec cart={cart} load={load} setLoad={setLoad} />
            <Brands load={load} setLoad={setLoad} />
            <Features2 load={load} setLoad={setLoad} />
            {/* <Select
                mode='tags'
            
                style={{ width: "100%" }}
                onSelect={(e) =>{ colorChangeHandler({ 
                    value: e, key: e, title: e})
                }}
                onDeselect={(e) =>{ colorChangeHandler({ 
                    value: e, key: e, title: e })
                }}

                options={[...new Set([options])]}
                tokenSeparators={[',']}
                onClear={()=> setColor([])}
                allowClear={true}
            >

            </Select> */}
        </>
    )
}

export default Layout