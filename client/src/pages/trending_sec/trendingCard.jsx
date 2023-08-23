
import "../home/recommended_sec/recommendedCard.scss"
import { NavLink } from 'react-router-dom';


const TrendingCard = ({ products }) => {

    return (

        <div className="product-card py-1" style={{ background: "white", border: "1px solid #edecec" }}>
            {/* trending card */}
            <div className="product-tumb" style={{ background: "white", padding: "0 2px", maxHeight: "90%" }}>
                <img style={{ width: "90%", height: "90%" }} src={products.images[0]?.url} alt={products.title} />
            </div>

            <div className="product-details" style={{ height: "80%", padding: "3px" }} >
                <div className="clearfix mt-0 mb-1 d-flex flex-column" style={{ width: "100%" }}>
                    <h6 className="card-title m-0 text-start rounded-pill bg-primary" style={{ fontSize: "70%", width: "max-content", maxWidth:"100%", display: "-webkit-box", overflow: "hidden", WebkitLineClamp: "1", WebkitBoxOrient: "vertical", color: "white", lineHeight:"160%", padding:"3px 6px 3px 8px" }}>{products.title}</h6>
                    <strong className="float-end price-hp mt-1 p-0 px-1" style={{ fontSize: "70%", width: "max-content", alignSelf: "end" }}>₹{products.price}/-</strong>
                </div>

                <div className="product-links mt-0">

                    <h5 className="card-title p-0 px-1 m-0 text-center" style={{ fontSize: "70%", width: "100%", display: "-webkit-box", overflow: "hidden", WebkitLineClamp: "2", WebkitBoxOrient: "vertical", color: "grey" }}>{products.description.features}</h5>

                    <NavLink style={{ marginRight: "3px", cursor: "pointer" }} to={`/details/${products._id}`}>
                        <div className="text-center" style={{ marginTop: "8px" }}>
                            <button className="btn btn-sm text-primary" style={{ fontSize: "70%" }}>Veiw Details</button>
                        </div>
                    </NavLink>

                </div>
            </div>

        </div>

    )
}

export default TrendingCard