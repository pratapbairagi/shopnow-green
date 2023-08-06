
import { Skeleton, Space } from "antd"



const HeadingBrandSkeleton = () => {
    return(
        <div className="m-0 p-0" style={{width:"100%", position:"relative", maxWidth:"1200px", height:"max-content", display:"flex", flexDirection:"column"}}>
        <Space style={{width:"100%", height:"30px", display:"flex", flexDirection:"row", justifyContent:"center", padding:"6px", marginTop:"10px"}}>
        <Skeleton active title={{ width:"80px" }} paragraph={false} style={{ height:"15px",  padding:"0"}}></Skeleton>
        </Space>
        </div>
    )
}

export default HeadingBrandSkeleton