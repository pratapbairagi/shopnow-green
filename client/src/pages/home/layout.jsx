import { useEffect, useState } from "react";
import Banner from "../../components/banner/banner"
import Brands from "../../components/brands/brands";
import Category from "../../components/category/category"
import Features from "../../components/features.js/features"
// import LatestCard from "../latest_sec/latestCard"
import Trending_sec from "../trending_sec/trendding_sec";
import Features2 from "../../components/features.js/features2";
import { Skeleton, Tabs } from "antd";




const Layout = ({ cart, load, setLoad }) => {

    // const arr = [
    //     {
    //         id: 1,
    //         value: "one",
    //         label: "description",
    //         key: 1,
    //         children : <Features/>
    //     },
    //       {  id: 2,
    //         value: "two",
    //         label: "policy",
    //         key: 2,
    //         children: <Banner/>
    //     }
    // ]

    return (
        <>
            <Banner load={load} />
            <Features load={load} />
            <Category load={load} setLoad={setLoad} />
            <Trending_sec cart={cart} load={load} setLoad={setLoad} />
            <Brands load={load} setLoad={setLoad} />
            <Features2 load={load} setLoad={setLoad} />

            {/* <Tabs
                defaultActiveKey="1"
                centered
                items={arr.map((v, i) => {
                    return {
                        label: <h6>{v.label}</h6>,
                        key: i,
                        children : v.children
                    }
                })}
            /> */}

        </>
    )
}

export default Layout