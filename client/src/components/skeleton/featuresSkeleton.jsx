import { Skeleton } from "antd";
import { Headset, Truck, CurrencyRupee, Star } from "react-bootstrap-icons";


const FeaturesSkeleton = () => {

    const data = [1, 2, 3, 4]
    return (
        <div className="" style={{ display: "flex", gap: "4px", minWidth: "100%", justifyContent: "space-evenly", padding: "16px 2px", margin: "auto", alignItems: "center", flexWrap: "wrap", flex: "1 1 6rem" }}>
            {data.map((v, i) => {
                return <button key={i} style={{ display: "flex", justifyContent: "center", gap: "6px", padding: "1px 3px", alignItems: "center", minHeight: "5vh", background: "transparent", width: "max-content", minWidth: "150px" }}>
                    <div className="featuresSkeleton" style={{ width: "calc(25px + 0.390625vw)", aspectRatio: "1/1", color: "var(--dark-red)" }} ></div>
                    <div style={{ dislay: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", height: "3vh" }}>
                        <span className="featuresSkeleton" style={{ height: "calc(6px + 0.390825vw)", minWidth: "50px", fontWeight: "600", color: "var(--dark-red)", textAlign: 'left', float: "left" }}></span>
                        <p className="featuresSkeleton" style={{ height: "calc(3px + 0.390625vw)", minWidth: "80px", textAlign: "left", color: "var(--off-white)", marginTop: "14px", wordBreak: "break-word" }}></p>
                    </div>
                </button>
            })
            }

        </div>
    )
}

export default FeaturesSkeleton