// import "antd/dist/antd.css"
import {Skeleton, Card, Space} from "antd"

const TrendSkeleton = () => {
    const data = [1,2,3,4,5,6,7,8,9,10]
    return(
        <div style={{width:"100%", minWidth:"100%", maxWidth:"100%", height:"max-content", overflowX:"auto", overflowY:"hidden", display:"flex", gap:"6px"}}>
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