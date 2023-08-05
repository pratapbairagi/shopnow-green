// import "antd/dist/antd.css"
import {Skeleton, Card, Space} from "antd"
import "../../pages/home/recommended_sec/recommendedCard.scss"


const TrendSkeleton = () => {
    const data = [1,2,3,4,5,6,7,8,9,10]
    return(
        <div className="product-card py-1" style={{ background: "white", border: "1px solid #edecec" }}>
        {data.map((v,i)=>{
       return <Space key={i} style={{width:"max-content", height:"192px", display:"flex", flexDirection:"column", padding:"6px", border:"1px solid rgb(232, 230, 230)"}}>
            <Skeleton.Image active style={{width:"100px", height:"110px", }} />
            <Skeleton.Button active shape="round" style={{width:"100px", height:"15px", marginTop:"-6px"}}></Skeleton.Button>
            <Skeleton.Button active style={{width:"20px", height:"12px", alignSelf:"end", marginTop:"-19px", marginRight:"-32px"}}></Skeleton.Button>
            <Skeleton.Button active style={{width:"90px", height:"8px", alignSelf:"end", marginTop:"-33px"}}></Skeleton.Button>
            <Skeleton.Button active style={{width:"90px", height:"8px", alignSelf:"end", marginTop:"-55px"}}></Skeleton.Button>
            <Skeleton.Button active style={{width:"30px", maxWidth:"20", height:"9px", alignSelf:"end", marginTop:"-75px"}}></Skeleton.Button>
        </Space>
        })}
        </div>
    )
}

export default TrendSkeleton