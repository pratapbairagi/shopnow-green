import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { clear_success, get_all_products_action } from "../../redux/product/product_actions";
import TrendingCard from "./trendingCard"
import LatestCard from "../latest_sec/latestCard";
import RecommendedCard from "../home/recommended_sec/recommendedCard";
import { ChevronRight } from "react-bootstrap-icons";



const Trending_sec = () => {
    const dispatch = useDispatch()
  const products = useSelector(state => state.product);

    useEffect(() => {
        productCheck();
      },[]);
    
      const productCheck = () => {
        dispatch(get_all_products_action());
      }

      useEffect(()=>{
        if(products.success){
          setTimeout(()=>{
          dispatch(clear_success())
          },2000)
        }
      },[products])

    return (
      <>
        <div className="container-fluid py-2">
        <h6 style={{color:"grey", width:"100%", display:"flex", justifyContent:"space-between"}}> <span style={{fontSize:"80%"}}>TRENDING</span>   <span style={{fontSize:"70%", fontWeight:"500"}}> More <ChevronRight size="9px" style={{marginLeft:"2px"}}/> </span>  </h6>
            <div className="">
                <div className="py-1" style={{ padding:"8px 6px", display:"flex", overflowX:"scroll", overflowY:"hidden", minWidth:"100%", maxWidth:"100%", justifyContent:"flex-start", alignItems:"flex-start", columnGap:"calc(2px + 0.390635vw)", rowGap:"calc(2px + 0.390635vh)", height:"max-content"}}>
                  {products?.products?.map((v,i)=>{
                    return <TrendingCard key={i} products={v} />
                  })  }
                </div>
                </div>
        </div>

        <div className="container-fluid py-2 bg-light">
            <h6 style={{color:"grey", width:"100%", display:"flex", justifyContent:"space-between"}}> <span style={{fontSize:"80%"}}>LATEST</span>   <span style={{fontSize:"70%", fontWeight:"500"}}> More <ChevronRight size="9px" style={{marginLeft:"2px"}}/> </span>  </h6>
            <div className="">
                <div className="py-1" style={{ padding:"12px 6px", display:"flex", overflowX:"scroll", overflowY:"hidden", minWidth:"100%", maxWidth:"100%", justifyContent:"flex-start", alignItems:"flex-start", columnGap:"calc(2px + 0.390635vw)", rowGap:"calc(2px + 0.390635vh)"}}>
                  {products?.products?.map((v,i)=>{
                    return <LatestCard key={i} products={v} />
                  })  }
                </div>
                </div>
        </div>

        <hr  style={{marginTop:"10px"}}/>

        <div className="container-fluid py-2">
        <h6 style={{color:"grey", width:"100%", display:"flex", justifyContent:"space-between"}}> <span style={{fontSize:"80%"}}>HOT DEALS</span>   <span style={{fontSize:"70%", fontWeight:"500"}}> More <ChevronRight size="9px" style={{marginLeft:"2px"}}/> </span>  </h6>
            <div className="">
                <div className="py-1" style={{ display:"flex", overflowX:"scroll", minWidth:"100%", maxWidth:"100%", height:"max-content", justifyContent:"flex-start", alignItems:"flex-start", columnGap:"calc(2px + 0.390635vw)", rowGap:"calc(2px + 0.390635vh)"}}>
                  {products?.products?.map((v,i)=>{
                    return <RecommendedCard key={i} products={v} />
                  })  }
                </div>
                </div>
        </div>

        </>
    )
}

export default Trending_sec