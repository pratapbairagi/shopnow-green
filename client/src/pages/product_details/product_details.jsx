
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { get_product_details } from "../../redux/product/product_actions";
import "./product_details.module.css";
import Recomended_products from "./recomended_products/recomended_products";
import ReviewProduct from "./review_product/review_product";
import { CartPlus, CartX, Check, Check2All, CheckAll, InfoCircle } from "react-bootstrap-icons";
import { Add_to_cart_action, Remove_from_cart_action } from "../../redux/cart/cartAction";
import Spinner from "../../components/spinner/spinner";
import { Tabs } from "antd";



const Product_details = () => {
    const { id } = useParams();
    const dispatch = useDispatch();
    const { product, success } = useSelector((state) => state.product)
    const [load, setLoad] = useState(false)

    useEffect(() => {
        if (id !== undefined && id !== null) {
            // const {data} = await axios.get(`http://localhost:5544/website_ecommerce/app/api/product/${id}`);
            dispatch(get_product_details(id))
            setLoad(true)
        }

    }, [id, dispatch]);

    const [imagePrev, setImagePrev] = useState('')
    useEffect(() => {
        if (success && product?.images?.length > 0) {
            setImagePrev(product?.images[0].url)
            setLoad(false)
            // dispatch(clear_success)
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
            dispatch(Add_to_cart_action(product._id, quantity))
        }
        else {
            alert.error("something went wrong !")
        }
    }

    // desceiption
    const [details, setDetails] = useState([])

    useEffect(()=>{
        if(success && product?.images?.length > 0){
        setDetails([
            {
                label: <h6>FEATURES</h6>,
                key: 1,
                children: <div style={{ width: "100%", height: "max-content" }}>{product.description.features}</div>
            },
            {
                label: <h6>WARRANTY</h6>,
                key: 2,
                children: <div style={{ width: "100%", height: "max-content" }}>{product.description.warranty}</div>
            },
            {
                label: <h6>RETRUN POLICY</h6>,
                key: 3,
                children: <div style={{ width: "100%", height: "max-content" }}>{product.description.returnPolicy}</div>
            },
            {
                label: <h6>SELLER AND CONTACT</h6>,
                key: 4,
                children: <div style={{ width: "100%", height: "max-content" }}>{product.description.sellerAndContact}</div>
            },
            {
                label: <h6>OTHER</h6>,
                key: 4,
                children: <div style={{ width: "100%", height: "max-content" }}>{product.description.other}</div>
            }
        ])
    }
    },[product, success])


    return (
        <div className="px-0 " style={{ width: "100%", minHeight: "100vh", height: "max-content", display: "flex", flexDirection: "column", margin: "auto" }}>

            {load ?
                <>
                    <div className="bg-light" style={{ width: "100%", minWidth: "100%", minHeight: "100vh" }}></div>
                    <Spinner />
                </>
                : success && <div className="review_container" style={{ maxWidth: "100%", margin: "8px auto" }}>
                    <div className="row px-0 m-auto" style={{ maxWidth: "100%", background: "whitesmoke" }}>
                        <div className="col-md-5 col-lg-4 item-photo d-flex flex-row-reverse align-items-center justufy-content-center g-0 px-1 py-2" style={{ height: "100%", marginBottom: "10px", maxWidth: "100%", maxHeight: "90vh" }}>

                            {success && <img style={{ maxWidth: "80%", minWidth: "80%", maxHeight: "90vh", height: "65vh", margin: "0 auto", placeItems: "flex-start", objectFit: "cover" }} src={imagePrev} alt="img0" />}



                            <div style={{ width: "max-content", display: "flex", justifyContent: "left", gap: "6px", padding: "0px 4px", maxWidth: "40%", overflowX: "hidden", margin: "0 auto", marginTop: "5px", flexDirection: "column", height: "100%", maxHeight: "65vh", overflowY: "auto", alignSelf: "flex-start" }}>
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

                        <div className="col-md-7 col-lg-8 px-0 pb-0" style={{ border: "4px solid transparent", background: "whitesmoke", maxHeight: "100%" }}>
                            <div style={{ width: "100%", margin: "5px auto", marginTop: "0", boxShadow: "0 0 5px rgb(236, 235, 235)", padding: "10px 6px", paddingTop:"16px", background: "white", borderRadius: "4px" }}>
                                <h5>{product.title}</h5>
                                <h6 style={{ color: "#337ab7" }}>Users reviews for <a href="#home">{product.title}</a> · <small style={{ color: "#337ab7" }}>(5054 reviews)</small></h6>
                                <h6 className="title-price"><small>PRICE</small></h6>
                                <h3 style={{ marginTop: "4px" }}>₹ {product.price}</h3>
                            </div>

                            <div style={{ width: "100%", boxShadow: "0 0 5px rgb(236, 235, 235)", padding: "8px 6px", paddingBottom: "10px", background: "white", borderRadius: "4px" }}>

                                <div className="section" style={{ padding: "6px 0", display: "flex", alignItems: "center", justifyContent: "space-around", marginLeft: "0" }}>
                                    <h6 className="title-attr" style={{ marginTop: "15px", minWidth: "90px", textAlign: "left" }} ><small>COLOR</small></h6>
                                    <div style={{ width: "50%", paddingTop: "18px", display: "flex", gap: "6px" }}>

                                        {
                                            product.color?.map((cv, ci) => {
                                                return <div key={ci} style={{ width: "max-content", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", borderRadius: "0px" }}>
                                                    <input className="p-0" style={{ width: "max-content", borderRadius: "50%", display: "block", accentColor: `${cv.value}` }} defaultChecked type="radio" name="color" id="color" />
                                                    <label style={{ color: `grey`, fontSize: "12px" }} htmlFor="color"><small>{cv.value}</small></label>
                                                </div>
                                            })
                                        }

                                    </div>
                                </div>
                                <div className="section p-0" style={{ padding: "6px 8px", display: "flex", alignItems: "center", justifyContent: "space-around", marginLeft: "0" }}>
                                    <h6 className="title-attr" style={{ minWidth: "90px", textAlign: "left" }}><small>SIZE</small></h6>
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
                                <div className="section " style={{ padding: "6px 0", display: "flex", alignItems: "center", justifyContent: "space-around", marginLeft: "0" }}>
                                    <h6 className="title-attr" style={{ minWidth: "90px", textAlign: "left" }}><small>STOCK</small></h6>
                                    <div style={{ width: "50%", textAlign: "left" }}>
                                        <div className="attr2 px-0">{product.stock}</div>
                                    </div>
                                </div>


                                <div className="section" style={{ padding: "6px 0", display: "flex", alignItems: "center", justifyContent: "space-around", marginLeft: "0" }}>
                                    <h6 className="title-attr" style={{ minWidth: "90px", textAlign: "left" }}><small>QUANTITY</small></h6>
                                    <div style={{ width: "50%", display: "flex", justifyContent: "flex-start" }}>
                                        <button onClick={() => dispatch(Remove_from_cart_action(product._id))} className="btn btn-danger btn-sm mx-0" style={{ display: "grid", placeItems:"center", width: "max-content", borderTopLeftRadius: "45px", borderBottomLeftRadius: "45px", boxShadow:"0 0 2px grey" }}>
                                            <CartX style={{ fontSize: "110%" }} />
                                        </button>
                                        <button onClick={() => { return cartQuantity("-") }} className="btn btn-primary  py-0 rounded-0" style={{ marginLeft: "4px", fontSize: "100%", border: "1px solid grey", position: "relative" }}>
                                            -
                                        </button>

                                        <div id="qty" style={{ background: "whitesmoke", width: "30px", textAlign: "center", display: "grid", placeItems:"center", fontSize:"90%" }} >{quantity}</div>

                                        <button onClick={() => { return cartQuantity("+") }} className="btn btn-primary py-0 rounded-0" style={{ fontSize: "100%", border: "1px solid grey", position: "relative" }}>
                                            +
                                        </button>

                                        <button onClick={() => addToCart()} className="btn btn-success btn-sm mx-1" style={{ display: "grid", placeItems:"center", width: "max-content", borderTopRightRadius: "45px", borderBottomRightRadius: "45px", boxShadow:"0 0 2px grey", height:"30px" }}>
                                            <CartPlus style={{ fontSize: "110%" }} />
                                        </button>
                                    </div>

                                </div>
                            </div>
                            <div className="col-lg-7 px-0" style={{ marginLeft: "0", padding: "10px", display: "flex", flexDirection: "row", gap: "6px", alignItems: "flex-start", justifyContent: "center", width: "100%", borderRadius: "4px", background: "white", marginTop: "6px", height: "30%" }}>
                                {/* <h6 className="mt-2"><a href="#home"><span className="glyphicon glyphicon-heart-empty" style={{ cursor: "pointer" }}></span> Agregar a lista de deseos</a></h6> */}
                                <div style={{ display: "flex", height: "100%", marginRight: "auto", maxWidth: "400px", minWidth: "200px", paddingLeft: "6vw" }}>
                                    <input onChange={(e) => {
                                        return null
                                    }
                                    } maxLength={6} minLength={6} max="999999" type="number" style={{ outline: "none", color: "grey", border: "1px solid whitesmoke", height: "35px", width: "80%", maxWidth: "350px", minWidth: "200px", fontSize: "12px", padding: "2px 12px", borderTopLeftRadius: "45px", borderBottomLeftRadius: "45px", borderRight: "none", boxShadow: "0 0 6px whitesmoke" }} placeholder="Check your area pin code..." name="" id="" />
                                    <button className="btn btn-danger" style={{ height: "35px", color: "white", fontSize: "14px", padding: "2px 10px", display: "flex", alignItems: "center", borderTopRightRadius: "45px", borderBottomRightRadius: "45px", boxShadow: "-1px 1px 6px whitesmoke" }}>
                                        {/* CHECK  */}
                                        <InfoCircle style={{ fontSize: "20px" }} />
                                        {/* <CheckAll style={{ fontSize:"20px", marginLeft:"3px"}}/>  */}
                                    </button>

                                </div>
                            </div>
                        </div>

                        <div className="col-xs-9" style={{ boxShadow: "0 0 3px whitesmoke", margin: "4px auto", padding: "0px 2px 14px 2px", justifyContent: "flex-start", background: "white", borderRadius: "4px", border: "4px solid whitesmoke" }}>

                            <Tabs
                                defaultActiveKey="1"
                                style={{ padding: "0 4px" }}
                                centered={window.innerWidth > 767 ? true : false}
                                items={details.map((v, i) => {
                                    return {
                                        label: v?.label,
                                        key: i,
                                        children: v?.children
                                    }
                                })}
                            />
                        </div>

                    </div>
                </div>}
            <Recomended_products />
            <ReviewProduct />
        </div>
    )
}

export default Product_details