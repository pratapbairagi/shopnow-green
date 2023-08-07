import { Skeleton } from "antd"


const HeadingFeatures2Skeleton = () => {
    return (
        <div style={{width:"100%", height:"max-content", padding :"8px 4px", display:"flex", flexDirection:"column", justifyContent:"center", alignItems:"center"}}>
            <Skeleton.Input active title={false} paragraph={false} style={{ height: "25px", padding: "0", width: "100px", marginTop: "8px" }}></Skeleton.Input>
            <Skeleton active paragraph={false} className="card-info text-center px-2 mt-2" style={{ lineHeight: "120%", color: "rgb(82, 81, 81)", fontWeight: "500", letterSpacing: ".3px", width:"280px" }}></Skeleton >
        </div>
    )
}

export default HeadingFeatures2Skeleton