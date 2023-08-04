import { NavLink } from "react-router-dom";
import "./recommendedCard.scss";
import { CartPlus, EyeFill, CartCheck } from "react-bootstrap-icons"
import { useDispatch, useSelector } from "react-redux";
import { Add_to_cart_action, Cart_qty_adjust } from "../../../redux/cart/cartAction";


const RecommendedCard = ({ products }) => {
	const dispatch = useDispatch()

	const {cart} = useSelector(state=> state.cart)

	 // cart
	 const addToCart = (id, quantity) => {
		if (id && quantity) {
			// dispatch(addItemsToCartAction(id, quantity))
			dispatch(Add_to_cart_action(id,quantity))
		}
		else {
			alert.error("something went wrong !")
		}
	}
	return (
		<div className="product-card">
			<div className="recommended_badge">Hot</div>
			<div className="product-tumb">
				<img style={{ width: "90%" }} src={products.images[0].url} alt="" />
			</div>
			<div className="product-details">
				<span className="product-catagory mb-1" style={{width:"100%", maxWidth:"100%", display:"-webkit-box", overflow:"hidden", WebkitBoxOrient:"vertical", WebkitLineClamp:"1", lineHeight:"160%"}} >{products.gender},{products.category}</span>
				{/* <h4><a href="#">{products.title}</a></h4> */}
				<h4><NavLink to={`/details/${products._id}`} title={products.title} className="p-0 px-1 m-0" style={{width:"max-content", maxWidth:"100%", display:"-webkit-box", overflow:"hidden", WebkitLineClamp:"2", WebkitBoxOrient:"vertical"}} >{products.title}</NavLink></h4>

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
							<span onClick={()=> addToCart(products._id, 1) } style={{ cursor: "pointer" }}>
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
