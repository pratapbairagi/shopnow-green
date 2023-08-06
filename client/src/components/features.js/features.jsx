import { Headset, Truck, CurrencyRupee, Star } from "react-bootstrap-icons";
import FeaturesSkeleton from "../skeleton/featuresSkeleton";


const Features = ({ load }) => {
    return (
        <>
            {load ? <FeaturesSkeleton /> :
                <div className="" style={{ display: "flex", gap: "4px", minWidth: "100%", justifyContent: "space-evenly", padding: "16px 2px", margin: "auto", alignItems: "center", flexWrap: "wrap", flex: "1 1 6rem" }}>

                    <button style={{ display: "flex", justifyContent: "center", gap: "6px", padding: "1px 3px", alignItems: "center", minHeight: "5vh", background: "transparent", width: "max-content", minWidth: "150px" }}>
                        <Star style={{ fontSize: "calc(22px + 0.390625vw)", color: "var(--dark-red)" }} />
                        <div style={{ dislay: "flex", flexDirection: "column", maxWidth: "calc(6rem + 0.390625vw)" }}>
                            <span style={{ fontSize: "calc(6px + 0.390825vw)", fontWeight: "600", color: "var(--dark-red)", width: "100%", textAlign: 'left', float: "left" }}>Best Quality</span>
                            <p style={{ fontSize: "calc(2px + 0.390625vw)", width: "100%", textAlign: "left", color: "var(--off-white)", margin: "0", wordBreak: "break-word" }}> customer never compromise here!</p>
                        </div>
                    </button>

                    <button style={{ display: "flex", justifyContent: "center", gap: "6px", padding: "1px 3px", alignItems: "center", minHeight: "5vh", background: "transparent", width: "max-content", minWidth: "150px" }}>
                        <Headset style={{ fontSize: "calc(22px + 0.390625vw)", color: "var(--dark-red)" }} />
                        <div style={{ dislay: "flex", flexDirection: "column", maxWidth: "calc(6rem + 0.390625vw)" }}>
                            <span style={{ fontSize: "calc(6px + 0.390825vw)", fontWeight: "600", color: "var(--dark-red)", width: "100%", textAlign: 'left', float: "left" }}>Support 24/7</span>
                            <p style={{ fontSize: "calc(2px + 0.390625vw)", width: "100%", textAlign: "left", color: "var(--off-white)", margin: "0" }}> You can get suppurt any time any where 24/7 !</p>
                        </div>
                    </button>

                    <button style={{ display: "flex", justifyContent: "center", gap: "6px", padding: "1px 3px", alignItems: "center", minHeight: "5vh", background: "transparent", width: "max-content", minWidth: "150px" }}>
                        <Truck style={{ fontSize: "calc(22px + 0.390625vw)", color: "var(--dark-red)" }} />
                        <div style={{ dislay: "flex", flexDirection: "column", maxWidth: "calc(6rem + 0.390625vw)" }}>
                            <span style={{ fontSize: "calc(6px + 0.390825vw)", fontWeight: "600", color: "var(--dark-red)", width: "100%", textAlign: 'left', float: "left" }}>On Time Delivery</span>
                            <p style={{ fontSize: "calc(2px + 0.390625vw)", width: "100%", textAlign: "left", color: "var(--off-white)", margin: "0" }}> we always make our customer happy with our deliver facility !</p>
                        </div>
                    </button>

                    <button style={{ justifyContent: "center", display: "flex", gap: "6px", padding: "1px 3px", alignItems: "center", minHeight: "5vh", background: "transparent", width: "max-content", minWidth: "150px" }}>
                        <CurrencyRupee style={{ fontSize: "calc(22px + 0.390625vw)", color: "var(--dark-red)" }} />
                        <div style={{ dislay: "flex", flexDirection: "column", maxWidth: "calc(6rem + 0.390625vw)" }}>
                            <span style={{ fontSize: "calc(6px + 0.390825vw)", fontWeight: "600", color: "var(--dark-red)", width: "100%", textAlign: 'left', float: "left" }}>Best Deal</span>
                            <p style={{ fontSize: "calc(2px + 0.390625vw)", width: "100%", textAlign: "left", color: "var(--off-white)", margin: "0" }}>Here we give best profuct at effordable price !</p>
                        </div>
                    </button>

                </div>
            }
        </>
    )
}

export default Features