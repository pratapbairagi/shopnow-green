import { useEffect, useState } from "react";
import Banner from "../../components/banner/banner"
import Brands from "../../components/brands/brands";
import Category from "../../components/category/category"
import Features from "../../components/features.js/features"
// import LatestCard from "../latest_sec/latestCard"
import Trending_sec from "../trending_sec/trendding_sec";
import Features2 from "../../components/features.js/features2";
import { Pagination, Skeleton, Tabs } from "antd";




const Layout = ({ cart, load, setLoad }) => {

     // pagination
     const [currentPage, setCurrentPage] = useState(1)
     const [pageSize, setPageSize] = useState(10)  // no products in one page
     const [totalPages, setTotalPages] = useState(50) // total products
 
     const paginagtionHandler = (e)=> {
         setCurrentPage(e)
     }

    return (
        <>
            <Banner load={load} />
            <Features load={load} />
            <Category load={load} setLoad={setLoad} />
            <Trending_sec cart={cart} load={load} setLoad={setLoad} />
            <Brands load={load} setLoad={setLoad} />
            <Features2 load={load} setLoad={setLoad} />

            <Pagination simple defaultCurrent={currentPage} onChange={paginagtionHandler} pageSize={pageSize} total={totalPages} />
           
        </>
    )
}

export default Layout