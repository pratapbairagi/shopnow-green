
import { useDispatch } from "react-redux";
import "./ProductNotificationToaster.css"
import { Rewind, XLg } from "react-bootstrap-icons";
import { clear_success } from "../../redux/product/product_actions";
import { redirect } from "react-router-dom";

const ProductNotificationRoaster = (product) => {
    const dispatch = useDispatch()
    function clossSuccessAction() {
        dispatch(clear_success())
        window.location.reload()
    }
    return (
        <div className="productionNotificationToaster" style={{display:"flex", position:"fixed", top:"0", left:"0", zIndex:"10"}}>

            <button className="btn btn-danger" style={{position:"absolute", top:"10px", right:"10px"}} onclick={clossSuccessAction()}><XLg size="20px"/></button>

            {/* <div id="snackbar"> */}
            <div className="productionNotificationToaster-product">
                <div className="productionNotificationToaster-product-img">
                   
                   { product?.images.map((v,i)=> <img key={i} src={v.url} alt={product.title} /> )}
                    {/* <img src="https://sslimages.shoppersstop.com/sys-master/images/hb1/h95/29479595311134/S23ATVICENZA748_BLUE.jpg_2000Wx3000H" alt="" />
                    <img src="https://sslimages.shoppersstop.com/sys-master/images/hb1/h95/29479595311134/S23ATVICENZA748_BLUE.jpg_2000Wx3000H" alt="" />

                    <img src="https://sslimages.shoppersstop.com/sys-master/images/hb1/h95/29479595311134/S23ATVICENZA748_BLUE.jpg_2000Wx3000H" alt="" />
                    <img src="https://sslimages.shoppersstop.com/sys-master/images/hb1/h95/29479595311134/S23ATVICENZA748_BLUE.jpg_2000Wx3000H" alt="" /> */}
                    <span className="productionNotificationToaster-tag">new</span>
                </div>
                <div className="productionNotificationToaster-product-listing">
                    <div className="productionNotificationToaster-content">
                        <h1 className="productionNotificationToaster-name">{product.category}, {product.brand}</h1>
                        <p className="productionNotificationToaster-info">{product.description}</p>
                        <p className="productionNotificationToaster-price">$ {product.price}</p>
                        <div className="productionNotificationToaster-btn-and-rating-box" style={{ display: "flex", justifyContent: "space-between", flexWrap: "wrap" }}>
                            <div className="productionNotificationToaster-rating" style={{ width: "80%" }}>
                                {/* <StarFill size="16px"/>
                                    <StarFill size="16px"/>
                                    <StarFill size="16px"/>
                                    <StarFill size="16px"/>
                                    <StarHalf size="16px"/> */}
                                {product?.title}

                            </div>
                            <button className="productionNotificationToaster-btn">View</button>
                            <div className="productionNotificationToaster-gender mt-1" style={{ width: "100%", textAlign: "left" }}>
                                {product?.gender}
                            </div>
                            <div className="productionNotificationToaster-color mt-1" style={{ width: "100%", textAlign: "left", display: "flex", columnGap: "4px" }}>
                               {product?.color.map((v,i)=> <div key={i} style={{ width: "20px", minHeight: "20px", borderRadius: "50%", background: `${v}` }} ></div>)} 
                                
                            </div>
                            <div className="productionNotificationToaster-color mt-2" style={{ width: "100%", textAlign: "left", display: "flex", columnGap: "4px" }}>
                            {product?.size.map((v,i)=>  <div key={i} className="px-2" style={{ width: "max-content", minHeight: "16px", borderRadius: "6px", border:"1px solid white", textTransform:"uppercase" }} >{v}</div> )} 
                               
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