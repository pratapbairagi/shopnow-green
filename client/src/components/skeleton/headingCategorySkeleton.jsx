import { Skeleton, Space } from "antd"

const HeadingCategorySkeleton = () => {
    return(
        <div className="m-0 p-0 py-2" style={{width:"100%", position:"relative", maxWidth:"1200px", height:"max-content", display:"flex", flexDirection:"column"}}>
        <Space style={{width:"100%", height:"30px", display:"flex", flexDirection:"row", justifyContent:"center", padding:"6px", marginTop:"10px"}}>
        <Skeleton.Input active title={false} paragraph={false} style={{ height:"28px",  padding:"0", width:"200px"}}></Skeleton.Input>
        </Space>
        </div>
    )
}

export default HeadingCategorySkeleton