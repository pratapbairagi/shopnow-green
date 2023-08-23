
import { NavLink } from "react-router-dom";
import "./latestCard.scss";

const LatestCard = ({ products }) => {


    return (
        <div className="latest_card_container m-0">
            <div id="row p-0" style={{ position: "relative", width: "100%" }}>
                <div id="product-front" style={{ width: "100%", height: "100%" }}>

                    <div className="shadow"></div>
                    <img style={{ zIndex: "0", width: "90%", aspectRatio: "1/1.2", maxHeight: "70%" }} src={products.images[0]?.url} alt="" />
                    <div className="image_overlay"></div>
                    <NavLink to={`/details/${products._id}`} className="view_details" style={{zIndex:"2"}} id="view_details">View details</NavLink>

                    <div className="stats" style={{ backgroundColor: "white" }}>
                        <div className="stats_container">
                            <span className="product_name" style={{ width: "85%" }}>{products.category}</span>
                            <span className="product_price">₹{products.price}</span>
                            <p className="title">{products.title}</p>

                            <div className="product_options">
                                <strong>SIZES</strong>
                                <span style={{display:"flex", flexDirection:"row", flexWrap:"nowrap"}}>
                                {products.size.map((v, i) => {
                                  return <div key={i} className="p-0" style={{border:"none", width:"max-content", margin:"0 0 0 2px"}}>{v.value}</div>
                                })}
                                </span>
                                <strong>COLORS</strong>
                                <div className="colors">
                                    {products.color.map((v, i) => {
                                        return <div key={i} style={{ background: "white" }}><span style={{background: `${v.value}`}}></span></div>
                                    })}
                                    {/* <div className="c_red"><span></span></div>
                                    <div className="c_white"><span></span></div>
                                    <div className="c_green"><span></span></div> */}
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>


    )
}

export default LatestCard