import { Skeleton, Space } from "antd"


const LatestSkeleton = () => {
    const data = [1,2,3,4,5,6,7,8,9,10]
    return(
        <div style={{width:"100%", minWidth:"100%", maxWidth:"100%", height:"max-content", overflowX:"auto", overflowY:"hidden", display:"flex", gap:"6px"}}>
        {data.map((v,i)=>{
       return <Space key={i} style={{width:"max-content", height:"182px", display:"flex", flexDirection:"column", padding:"6px", border:"1px solid rgb(232, 230, 230)"}}>
            <Skeleton.Image active style={{width:"110px", height:"130px", }} />
            <Skeleton active paragraph={false} style={{width:"40px", height:"20px", marginTop:"-1px", marginLeft:"-55px"}}></Skeleton>
            <Skeleton active paragraph={false} style={{width:"30px", height:"20px", marginTop:"-32px", marginLeft:"78px"}}></Skeleton>
            <Skeleton.Button active paragraph={false} style={{width:"110px", height:"10px", marginTop:"-19px", marginLeft:"0"}}></Skeleton.Button>
        </Space>
        })}
        </div>
    )
}

export default LatestSkeleton