import { ArrowRightShort } from "react-bootstrap-icons"
import { NavLink, useNavigate } from "react-router-dom"


const Category = () => {
    const navigate = useNavigate()
    return (
        <div className="container-fluid py-4 category-container">
            <h4 style={{ color: "var(--off-white)" }}>All New Collections</h4>
            <div className="row" >
                <div className="col col-12 col-sm-12 col-md-5 p-5" style={{ padding: "16px", minHeight: "60vh", backgroundImage: "url('/images/kids-category.jpg')", backgroundPosition: "center", backgroundSize: "cover", backgroundRepeat: "no-repeat" }}>
                    <h6 className="m-0" style={{ width: "100%", textAlign: "left" }}>All New Kids Collection</h6>
                    <h4 className="m-0" style={{ width: "100%", textAlign: "left", color: "green" }}>Starts From Rs. 999/- </h4>
                    <button onClick={() => {
                        navigate("/kids", { state: ["1Y", "2Y", "3Y", "4Y", "5Y", "6Y", "7Y", "8Y", "9Y", "10Y", "11Y", "12Y", "13Y", "14Y", "15Y", "16Y", "17Y"] })
                    }} className="mt-2" style={{ width: "max-content", float: "left", textDecoration: "none", color: "white", fontSize: "var(--font)", background: "transparent", border: "none" }}>
                        <span>Explore</span>
                        <ArrowRightShort />
                    </button>
                </div>

                <div className="col col-12 col-sm-12 col-md-6 mt-1 mt-md-0 p-0" style={{ minHeight: "60vh" }} >

                    <div className="row p-0 m-0" style={{ height: "100%", display: "flex", flexWrap: "wrap", gap: "8px", padding: "0 4px", width: "100%" }}>
                        <div className="col-6 col1 col-sm-6 col-md-12 p-5" style={{ width: "100%", display: "flex", flexDirection: "column", padding: "16px", backgroundImage: "url('/images/womens-category4.jpg')", backgroundPosition: "center", backgroundRepeat: "no-repeat", backgroundSize: "cover", height: "48%" }}>
                            <h6 className="m-0" style={{ fontSize: "var(--h3)", width: "max-content", background: "var(--white-smoke)", padding: "2px 8px", textAlign: "left" }}>All New Women Collection</h6>
                            <h4 className="m-0" style={{ width: "100%", textAlign: "left", color: "green", }}>Starts From Rs. 499/- </h4>
                            <button onClick={() => {
                                navigate("/women", { state: [] })
                            }} className="mt-2" style={{ width: "max-content", float: "left", textDecoration: "none", color: "white", fontSize: "var(--font)", background: "transparent", border: "none" }}>
                                <span>Explore</span>
                                <ArrowRightShort />
                            </button>
                        </div>
                        <div className="col-6 col2 col-sm-6 col-md-12 p-5" style={{ padding: "16px", backgroundImage: "url('/images/mens-category-4.jpg')", backgroundPosition: "center", backgroundRepeat: "no-repeat", backgroundSize: "cover", height: "49%", width: "100%" }}>
                            <h6 className="m-0" style={{ fontSize: "var(--h3)", width: "max-content", padding: "2px 8px", background: "var(--white-smoke)", textAlign: "left" }}>All New Men Collection</h6>
                            <h4 className="m-0" style={{ width: "100%", textAlign: "left", color: "green" }}>Starts From Rs. 399/- </h4>
                            <button onClick={() => {
                                navigate("/men", { state: [] })
                            }} className="mt-2" style={{ width: "max-content", float: "left", textDecoration: "none", color: "white", fontSize: "var(--font)", background: "transparent", border: "none" }}>
                                <span>Explore</span>
                                <ArrowRightShort />
                            </button>

                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Category