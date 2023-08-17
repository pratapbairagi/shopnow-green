import { useEffect, useState } from "react";
import Banner from "../../components/banner/banner"
import Brands from "../../components/brands/brands";
import Category from "../../components/category/category"
import Features from "../../components/features.js/features"
// import LatestCard from "../latest_sec/latestCard"
import Trending_sec from "../trending_sec/trendding_sec";
import Features2 from "../../components/features.js/features2";
import { Button, FloatButton, Avatar, Card } from "antd";
import { EditOutlined, EllipsisOutlined, SettingOutlined } from '@ant-design/icons';
import UserButton from "../../components/userButton";
import ToolTip from "../../components/tooltip/toolTip";
import { NavLink } from "react-router-dom";
import LoginSuccess from "../../components/loginSuccess/loginSuccess";



const Layout = ({ cart, load, setLoad }) => {


    return (
        <>
            <Banner load={load} />
            <Features load={load} />
            <Category load={load} setLoad={setLoad} />
            <Trending_sec cart={cart} load={load} setLoad={setLoad} />
            <Brands load={load} setLoad={setLoad} />
            <Features2 load={load} setLoad={setLoad} />
        </>
    )
}

export default Layout