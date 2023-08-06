import { Skeleton } from "antd"
import SkeletonImage from "antd/es/skeleton/Image"
import { ArrowRightShort } from "react-bootstrap-icons"
import "./categorySkeleton.css"


const CategorySkeleton = () => {

    
    return (
            <div className="row" >
                <div className=" col-12 col-sm-12 col-md-5 p-5 video" style={{ padding: "16px", minHeight: "60vh", backgroundPosition: "center", backgroundSize: "cover", backgroundRepeat: "no-repeat" }}>
                    
                </div>

                <div className="col-12 col-sm-12 col-md-6 mt-1 mt-md-0 p-0" style={{ minHeight: "60vh" }} >

                    <div className="row p-0 m-0" style={{ height: "100%", display: "flex", flexWrap: "wrap", gap: "8px", padding: "0 4px", width: "100%" }}>
                        <div className="col-6 col1 col-sm-6 col-md-12 p-5 video" style={{ width: "100%", display: "flex", flexDirection: "column", padding: "16px", backgroundPosition: "center", backgroundRepeat: "no-repeat", backgroundSize: "cover", height: "48%" }}>
                        </div>
                        <div className="col-6 col2 col-sm-6 col-md-12 p-5 video" style={{ padding: "16px", backgroundPosition: "center", backgroundRepeat: "no-repeat", backgroundSize: "cover", height: "49%", width: "100%" }}>
                        </div>
                    </div>

                </div>
            </div>
    )
}

export default CategorySkeleton