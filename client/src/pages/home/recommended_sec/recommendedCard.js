import { NavLink } from "react-router-dom";
import "./recommendedCard.scss";
import { CartPlus, EyeFill, CartCheck } from "react-bootstrap-icons"
import { useDispatch, useSelector } from "react-redux";
import { Add_to_cart_action } from "../../../redux/cart/cartAction";


const RecommendedCard = ({ products }) => {
	const dispatch = useDispatch()

	const {cart} = useSelector(state=> state.cart)
	return (
		<div className="product-card">
			<div className="recommended_badge">Hot</div>
			<div className="product-tumb">
				<img style={{ width: "90%" }} src={products.images[0].url} alt="" />
			</div>
			<div className="product-details">
				<span className="product-catagory mb-1" >{products.gender},{products.category}</span>
				{/* <h4><a href="#">{products.title}</a></h4> */}
				<h4><NavLink className="p-0 m-0" to={`/details/${products._id}`} >{products.title}</NavLink></h4>

				<div className="product-bottom-details">
					<div className="product-price">
						<small>${products.price+20}</small>
						<strong>${products.price}/-</strong>
					</div>
					<div className="product-links">
						<NavLink style={{marginRight:"3px", cursor:"pointer"}} to={`/details/${products._id}`}>
							<span>
								<EyeFill fill="#fbb72c" />
							</span>
						</NavLink>

						{cart.find(v => v._id === products._id) ? <span className="p-0" style={{ cursor: "pointer"}}>
							<CartCheck fill="green" />
						</span>
							:
							<span onClick={()=> dispatch(Add_to_cart_action(products._id)) } style={{ cursor: "pointer" }}>
								<CartPlus fill="#fbb72c" />
							</span>
						}
						
					</div>
				</div>
			</div>
		</div>
	)
}

export default RecommendedCard
