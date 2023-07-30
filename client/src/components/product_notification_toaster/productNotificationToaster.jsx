
import { useDispatch, useSelector } from "react-redux";
import "./ProductNotificationToaster.css"
import { Rewind, XLg } from "react-bootstrap-icons";
import { clear_success, get_product_details } from "../../redux/product/product_actions";
import { NavLink, useParams } from "react-router-dom";
import { useEffect } from "react";

const ProductNotificationRoaster = () => {

    const dispatch = useDispatch()

    const { id } = useParams();
    const { loading, error, product, success } = useSelector((state) => state.product)

    useEffect(() => {
        if (id !== undefined && id !== null) {
            // const {data} = await axios.get(`http://localhost:5544/website_ecommerce/app/api/product/${id}`);
            dispatch(get_product_details(id))
        }

    }, [id]);

    function clossSuccessAction(){
        dispatch(clear_success())
        window.location.href="/profile"
    }
 
    return (
        <div className="productionNotificationToaster" style={{display:"flex", position:"fixed", top:"0", left:"0", zIndex:"11"}}>

            {/* <button className="btn btn-danger" style={{position:"absolute", top:"10px", right:"10px", zIndex:"12"}} onClick={ ()=> clossSuccessAction}><XLg size="20px"/></button> */}

            {/* <div id="snackbar"> */}
            <div className="productionNotificationToaster-product">
                <div className="productionNotificationToaster-product-img px-2">
                   
                   {success && product?.images?.map((v,i)=> <img key={i} src={v.url} alt={product.title} /> )}
                    
                    <span className="productionNotificationToaster-tag">new</span>
                </div>
                <div className="productionNotificationToaster-product-listing">
                    <div className="productionNotificationToaster-content">
                        {/* <h1 className="productionNotificationToaster-name">{product.category}, {product.brand}</h1>
                        <p className="productionNotificationToaster-info">{product.description}</p> */}
                        {/* <p className="productionNotificationToaster-price">$ {product.price}</p> */}
                        <div className="productionNotificationToaster-btn-and-rating-box" style={{ display: "flex", justifyContent: "space-between", flexWrap: "wrap" }}>
                            <div className="productionNotificationToaster-rating" style={{ width: "80%", lineHeight:"175%", textAlign:"left" }}>
                                {/* <StarFill size="16px"/>
                                    <StarFill size="16px"/>
                                    <StarFill size="16px"/>
                                    <StarFill size="16px"/>
                                    <StarHalf size="16px"/> */}
                                {/* {product?.title} */}

                            </div>
                           <NavLink to={`/details/${id}`} className="productionNotificationToaster-btn"> View </NavLink>
                            <div className="productionNotificationToaster-info mt-1 text-muted" style={{ width: "100%", textAlign: "center" }}>
                                {/* {product?.description} */}
                            </div>
                            <div className="productionNotificationToaster-price mt-1" style={{ width: "100%", textAlign: "center" }}>
                            {/* ₹ { success && product?.price} */}
                            </div>
                            <div className="productionNotificationToaster-gender mt-1" style={{ width: "100%", textAlign: "left" }}>
                                {/* {success && product?.gender} */}
                            </div>
                            <div className="productionNotificationToaster-color mt-1" style={{ width: "100%", textAlign: "left", display: "flex", columnGap: "4px" }}>
                               {success && product?.color?.map((v,i)=> <div key={i} style={{ width: "20px", minHeight: "20px", borderRadius: "50%", background: `${v}` }} ></div>)} 
                                
                            </div>
                            <div className="productionNotificationToaster-color mt-2" style={{ width: "100%", textAlign: "left", display: "flex", columnGap: "4px" }}>
                            {/* {success && product?.size?.map((v,i)=>  <div key={i} className="px-2" style={{ width: "max-content", minHeight: "16px", borderRadius: "6px", border:"1px solid white", textTransform:"uppercase" }} >{v}</div> )}  */}
                               
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        // </div>
    )
}

export default ProductNotificationRoaster