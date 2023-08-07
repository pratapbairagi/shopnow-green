import { Skeleton } from "antd"
import { StarHalf } from "react-bootstrap-icons"

const Features2Skeleton = () => {
    const data = [1, 2, 3, 4, 5]
    return (
        <>
        { data.map((v,i)=> { return <div key={i} className="col-12 col-md-col-6 col-lg-4 col-xl-3 card p-1" style={{ border: "none", maxHeight: "160px", minHeight: "18vh" }}>
            <div className="card-body d-flex flex-column align-items-center mb-0 p-3 border rounded-3">
         
                <div className="featuresSkeleton" style={{ width: "calc(25px + 0.390625vw)", aspectRatio: "1/1", color: "var(--dark-red)" }} ></div>

                <Skeleton.Input active title={false} paragraph={false} style={{ height:"20px",  padding:"0", width:"100px", marginTop:"8px"}}></Skeleton.Input>

                <Skeleton active paragraph={false} className="card-info text-center px-2 mt-2" style={{ lineHeight: "120%", color: "rgb(82, 81, 81)", fontWeight: "500", letterSpacing: ".3px", fontSize: "12px" }}>Comprehensive quality control and affordable price</Skeleton >
            </div>
        </div> })
         }
        </>
    )
}

export default Features2Skeleton