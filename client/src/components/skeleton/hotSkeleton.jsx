// import "antd/dist/antd.css"
import {Skeleton, Card, Space} from "antd"

const HotSkeleton = () => {
    const data = [1,2,3,4,5,6,7,8,9,10]
    return(
        <div style={{width:"100%", minWidth:"100%", maxWidth:"100%", height:"max-content", overflowX:"auto", overflowY:"hidden", display:"flex", gap:"6px"}}>
        {data.map((v,i)=>{
       return <Space key={i} style={{width:"max-content", height:"250px", display:"flex", flexDirection:"column", padding:"6px", border:"1px solid rgb(232, 230, 230)", position:"relative"}}>
            
            <Skeleton.Image active style={{width:"100px", height:"140px", }} />
            <Skeleton.Button active size="60%" style={{ height:"15px", marginTop:"0px"}}></Skeleton.Button>
            <Skeleton.Button active style={{ width:"100px", height:"10px", marginTop:"-10px"}}></Skeleton.Button>
            <Skeleton.Button active style={{ width:"100px", height:"10px", marginTop:"-30px"}}></Skeleton.Button>
            
            <Skeleton paragraph={false} active style={{ width:"4vw", height:"10px", marginTop:"-40px", marginLeft:"-50px"}}></Skeleton>
            <Skeleton paragraph={false} active style={{ width:"5vw", height:"10px", marginTop:"-30px", marginLeft:"-50px"}}></Skeleton>

            <Skeleton paragraph={false} active style={{ width:"20px", height:"10px", marginTop:"-45px", marginLeft:"40px"}}></Skeleton>
            <Skeleton paragraph={false} active style={{ width:"20px", height:"10px", marginTop:"-53px", marginLeft:"85px"}}></Skeleton>




        </Space>
        })}
        </div>
    )
}

export default HotSkeleton