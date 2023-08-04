
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { get_product_details } from "../../redux/product/product_actions";
import "./product_details.module.css";
import Recomended_products from "./recomended_products/recomended_products";
import ReviewProduct from "./review_product/review_product";
import { CartPlus, CartX } from "react-bootstrap-icons";
import { Add_to_cart_action, Cart_qty_adjust, Remove_from_cart_action } from "../../redux/cart/cartAction";



const Product_details = () => {
    const { id } = useParams();
    const dispatch = useDispatch();
    const { loading, error, product, success } = useSelector((state) => state.product)

    useEffect(() => {
        if (id !== undefined && id !== null) {
            // const {data} = await axios.get(`http://localhost:5544/website_ecommerce/app/api/product/${id}`);
            dispatch(get_product_details(id))
        }

    }, [id, dispatch]);

    const [imagePrev, setImagePrev] = useState('')
    useEffect(() => {
        if (success && product?.images?.length > 0) {
            setImagePrev(product?.images[0].url)
        }
    }, [success, product])


    //   img prev handler
    const img_chng_hanler = (e) => {
        setImagePrev(e.target.value)
    }


    // size change handler
    const size_change_handler = (e) => {
        console.log(e.target.value)
    }

    // cart actions

    const [quantity, setQuantity] = useState(1)

    const cartQuantity = (e) => {

        if (e === "+") {
            if (quantity < product.stock) {
                setQuantity(quantity + 1)
            }
        }
        if (e === "-") {
            if (quantity > 1) {
                setQuantity(quantity - 1)
            }
        }
    }

    const addToCart = () => {
        if (id && quantity) {
            // dispatch(addItemsToCartAction(id, quantity))
            dispatch(Add_to_cart_action(product._id,quantity))
        }
        else {
            alert.error("something went wrong !")
        }
    }


    // cart
    const { cart } = useSelector(state => state.cart)

    return (
        <div className="px-0 " style={{ width: "100%", minHeight: "100vh", height: "max-content", display: "flex", flexDirection: "column", margin: "auto" }}>
            <div className="review_container" style={{ maxWidth: "100%", margin: "8px auto" }}>
                <div className="row px-0 m-auto" style={{ maxWidth: "100%" }}>
                    <div className="col-lg-5 item-photo d-flex flex-column" style={{ height: "100%", marginBottom: "16px", maxWidth: "100%", maxHeight: "90vh" }}>

                        {success && <img style={{ maxWidth: "90%", maxHeight: "70vh", margin: "0 auto" }} src={imagePrev} alt="img0" />}



                        <div style={{ width: "90%", display: "flex", justifyContent: "center", gap: "6px", padding: "3px 0px", maxWidth: "90%", overflow: "auto", margin: "0 auto", marginTop: "6px" }}>
                            {success && product?.images?.map((img, index) => {

                                return (
                                    <div key={index} style={{ position: "relative", width: "max-content", cursor: "pointer" }}>
                                        <input onClick={(e) => img_chng_hanler(e)} defaultChecked defaultValue={img.url} type="radio" name="image" id="" style={{ background: "transparent", position: "absolute", accentColor: "transparent", opacity: "0", width: "50px", height: "100%", cursor: "pointer" }} />
                                        <img style={{ width: "50px", boxShadow: "0px 0px 3px grey", cursor: "pointer", zIndex: "1" }} src={img.url} alt="img1" />
                                    </div>
                                )
                            })}


                        </div>

                    </div>


                    <div className="col-lg-7" style={{ border: "0px solid grey" }}>
                        <h3>{product.title}</h3>
                        <h5 style={{ color: "#337ab7" }}>Users reviews for <a href="#home">{product.title}</a> · <small style={{ color: "#337ab7" }}>(5054 reviews)</small></h5>

                        <h6 className="title-price"><small>PRICE</small></h6>
                        <h3 style={{ marginTop: "4px" }}>INR {product.price}</h3>

                        <div className="section" style={{ padding: "6px 0", display: "flex", alignItems: "center", justifyContent: "space-around", marginLeft: "0" }}>
                            <h6 className="title-attr" style={{ marginTop: "15px" }} ><small>COLOR</small></h6>
                            <div style={{ width: "50%", paddingTop: "18px", display: "flex", gap: "6px" }}>

                                {
                                    product.color?.map((cv, ci) => {
                                        return <div key={ci} style={{ width: "max-content", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", borderRadius: "0px" }}>
                                            <input style={{ width: "20px", accentColor: "red" }} defaultChecked type="radio" name="color" id="color" />
                                            <label style={{ color: `${cv.value}`, fontSize: "12px" }} htmlFor="color"><small>{cv.value}</small></label>
                                        </div>
                                    })
                                }

                            </div>
                        </div>
                        <div className="section" style={{ padding: "6px 8px", display: "flex", alignItems: "center", justifyContent: "space-around", marginLeft: "0" }}>
                            <h6 className="title-attr"><small>SIZE</small></h6>
                            <div style={{ width: "50%", display: "flex", flexWrap: "wrap", gap: "4px" }}>

                                {product.size?.map((sv, si) => {
                                    return <div key={si} style={{ minWidth: `24px`, width: "max-content", position: "relative", border: "1px solid grey", borderRadius: "2px", whiteSpace: "nowrap" }}>
                                        <input onChange={(e) => { return size_change_handler(e) }} style={{ width: "100%", height: "100%", accentColor: "red", position: "absolute", opacity: "0", cursor: "pointer" }} defaultChecked value="xs" type="radio" name="size" id="" />
                                        <span style={{ color: "red", fontSize: "12px", width: "100%", height: "100%", cursor: "pointer", whiteSpace: "nowrap" }}>{sv.value}</span>
                                    </div>
                                })
                                }


                            </div>
                        </div>
                        <div className="section" style={{ padding: "6px 0", display: "flex", alignItems: "center", justifyContent: "space-around", marginLeft: "0" }}>
                            <h6 className="title-attr"><small>STOCK</small></h6>
                            <div style={{ width: "50%" }}>
                                <div className="attr2 px-2">{product.stock}</div>

                            </div>
                        </div>


                        <div className="section" style={{ padding: "6px 0", display: "flex", alignItems: "center", justifyContent: "space-around", marginLeft: "0" }}>
                            <h6 className="title-attr"><small>QUANTITY</small></h6>
                            <div style={{ width: "50%", display: "flex", justifyContent: "flex-start" }}>
                                    <button onClick={() => { return cartQuantity("-") }} className="btn btn-success py-0 rounded-0" style={{ fontSize: "100%", border: "1px solid grey", position: "relative" }}>
                                        -
                                    </button>

                                <div id="qty" style={{ background: "whitesmoke", width: "30px", textAlign: "center" }} >{quantity}</div>

                                    <button onClick={() => { return cartQuantity("+")}} className="btn btn-success py-0 rounded-0" style={{ fontSize: "100%", border: "1px solid grey", position: "relative" }}>
                                        +
                                    </button>
                            </div>

                        </div>

                        <div className="section mt-3" style={{ marginLeft: "0", padding: "10px", display: "flex", flexDirection: "row", gap:"6px", alignItems: "center" }}>
                    
                            <button onClick={() => dispatch(Remove_from_cart_action(product._id))} className="btn btn-danger" style={{ display: "flex", gap: "7px", width: "max-content" }}>
                                <CartX style={{ fontSize: "120%" }} />
                            </button>

                            <button onClick={() => addToCart()} className="btn btn-success" style={{ display: "flex", gap: "7px", width: "max-content" }}>
                            <CartPlus style={{ fontSize: "120%" }} />
                            </button>

                        </div>
                            <h6 className="mt-2"><a href="#home"><span className="glyphicon glyphicon-heart-empty" style={{ cursor: "pointer" }}></span> Agregar a lista de deseos</a></h6>
                    </div>

                    <div className="col-xs-9">
                        <ul className="menu-items p-0" style={{ display: "flex", justifyContent: "center" }}>
                            <li className="active">product details</li>
                            <li>Garantía</li>
                            <li>Vendedor</li>
                            <li>Envío</li>
                        </ul>
                        <div style={{ width: "100%", borderTop: "1px solid silver" }}>

                            <p style={{ padding: "15px" }}>

                                <small>
                                    {product.description}
                                </small>
                            </p>
                            <small>
                                <ul>
                                    <li>Super AMOLED capacitive touchscreen display with 16M colors</li>
                                    <li>Available on GSM, AT T, T-Mobile and other carriers</li>
                                    <li>Compatible with GSM 850 / 900 / 1800; HSDPA 850 / 1900 / 2100 LTE; 700 MHz Class 17 / 1700 / 2100 networks</li>
                                    <li>MicroUSB and USB connectivity</li>
                                    <li>Interfaces with Wi-Fi 802.11 a/b/g/n/ac, dual band and Bluetooth</li>
                                    <li>Wi-Fi hotspot to keep other devices online when a connection is not available</li>
                                    <li>SMS, MMS, email, Push Mail, IM and RSS messaging</li>
                                    <li>Front-facing camera features autofocus, an LED flash, dual video call capability and a sharp 4128 x 3096 pixel picture</li>
                                    <li>Features 16 GB memory and 2 GB RAM</li>
                                    <li>Upgradeable Jelly Bean v4.2.2 to Jelly Bean v4.3 Android OS</li>
                                    <li>17 hours of talk time, 350 hours standby time on one charge</li>
                                    <li>Available in white or black</li>
                                    <li>Model I337</li>
                                    <li>Package includes phone, charger, battery and user manual</li>
                                    <li>Phone is 5.38 inches high x 2.75 inches wide x 0.13 inches deep and weighs a mere 4.59 oz </li>
                                </ul>
                            </small>
                        </div>
                    </div>

                </div>
            </div>
            <Recomended_products />
            <ReviewProduct />
        </div>
    )
}

export default Product_details