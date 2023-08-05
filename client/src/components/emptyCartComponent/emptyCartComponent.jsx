import noCart from "./no_cart.svg"
import { useNavigate } from "react-router-dom";

const EmptyCartComponent = ({toggleCart}) => {
    const navigate = useNavigate()
    return(
        <div className="" style={{ display: "flex", flexDirection: "column", alignItems: "center", minHeight: "85vh", justifyContent: "center" }}>
                  <img style={{ width: "4rem" }} src={noCart} alt="" />
                  <h3 style={{ width: "max-content", padding: "2px 6px", color: "red" }}>No Items</h3>
                  <button className="bg-muted " onClick={()=>{
                    navigate("/shop")
                    if(toggleCart && toggleCart !== undefined && toggleCart !== null){
                        document.getElementById(toggleCart).style.right = "-100%"
                    }
                    }} style={{ padding: "4px 12px 2px 12px ", border: "none", color: "white", fontWeight: "600" }}>Add To Cart</button>
        </div>
    )
}

export default EmptyCartComponent