
import { useDispatch, useSelector } from "react-redux";
import { Cart_qty_adjust, Remove_from_cart_action } from "../../redux/cart/cartAction";
import { TrashFill, HeartFill, Plus, Dash } from "react-bootstrap-icons"
import EmptyCartComponent from "../emptyCartComponent/emptyCartComponent";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const CartComponent = ({ toggleCart }) => {
  const { cart } = useSelector(state => state.cart)
  const dispatch = useDispatch();
  const navigate = useNavigate()

  // cart
  const cart_items_adjust = (id, quantity) => {
    if (id && quantity) {
      dispatch(Cart_qty_adjust(id, quantity))
    }
    else {
      alert.error("something went wrong !")
    }
  }


  // cart
  const [cartAmt, setCartAmt] = useState(0);
  useEffect(() => {
    if (cart) {
      let x = 0;
      cart.map(v => x += + (v.qty * v.price))
      setCartAmt(x)
    }
  }, [cart])

  return (
    <div className="row" style={{ gap: "0", height: "100vh", }}>
      <section className="col col-12 col-md-6 gradient-custom p-0 sec1" style={{ margin:"auto" }}>
        <div className="container py-1" style={{ maxHeight: "100%", margin:"auto" }}>

          <div className="row d-flex justify-content-center my-0 p-0 py-1" style={{ maxHeight: "max-content", width: "100%", margin:"auto" }}>
            <div className="col-md-8 p-0" style={{ width: "100%"}}>
              <div className="" style={{ width: "100%", height: "100%", maxHeight: "88vh", overflowY: "auto", gap: "4px", paddingBottom: "22vh", display:"flex", }}>

                {
                  cart.length === 0 ?
                    <EmptyCartComponent toggleCart={toggleCart} /> :

                    cart.map((cv, ci) => {
                      return <div key={ci} className="cart-component-card-body" style={{ padding: "4px", border: "1px solid rgb(236, 235, 235)", borderRadius: "4px", maxHeight: "160px" }}>
                        {/* <!-- Single item --> */}

                        <div className="row g-0 p-0 m-0" style={{ height: "max-content", }}>

                          <div className="col-3 col-lg-3 m-0">
                            {/* <!-- Image --> */}
                            <div className=" rounded p-0" style={{ width: "100%", cursor: "pointer", overflow: "hidden" }} data-mdb-ripple-color="light">
                              <img
                                onClick={() => navigate(`/details/${cv._id}`)}
                                src={cv.images[0].url}
                                alt={cv.title} style={{ width: "100%", height: "100%", maxHeight: "150px" }} />
                            </div>
                            {/* <!-- Image --> */}
                          </div>

                          <div className="col-5 m-0 p-0 d-flex flex-column" style={{ justifyContent: "center", rowGap: "5%" }}>
                            {/* <!-- Data --> */}
                            <div className="" style={{ fontWeight: "500", fontSize: "85%", lineHeight: "110%", width: "100%", textAlign: "left", paddingLeft: "10px", textTransform: "uppercase", color: "grey", display: "-webkit-box", maxWidth: "100%", overflow: "hidden", WebkitLineClamp: "2", WebkitBoxOrient: "vertical" }}>{cv.title}</div>

                            <div className="" style={{ fontSize: "80%", paddingLeft: "10px", textAlign: "left", color: "grey" }}>Color : blue </div>
                            <div className="" style={{ fontSize: "80%", textAlign: "left", marginTop: "-2px", paddingLeft: "10px", color: "grey" }}>Size : M</div>

                            <div style={{ width: "100%", display: "flex", paddingLeft: "10px" }}>
                              <button onClick={() => dispatch(Remove_from_cart_action(cv._id))} type="button" className="btn btn-primary btn-sm me-1 px-2 py-1" data-mdb-toggle="tooltip" title="fav. item">
                                <TrashFill />
                              </button>

                              <button type="button" className="btn btn-danger btn-sm" data-mdb-toggle="tooltip"
                                title="Move to the wish list">
                                <HeartFill />
                              </button>
                            </div>
                            {/* <!-- Data --> */}
                          </div>

                          <div className="col-4 mb-4 mb-lg-0 p-0" style={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", alignContent: "center", gap: "1px" }}>
                            {/* <!-- Quantity --> */}
                            <div className="d-flex mb-4 mt-2 align-items-end">
                              <button onClick={() => cart_items_adjust(cv._id, -1)} disabled={cv.qty > 1 ? false : true} type="button" className="btn btn-primary btn-sm m-0 p-1" data-mdb-toggle="tooltip">
                                <Dash />
                              </button>

                              <div className="form-outline p-0" style={{ border: "none" }} >
                                <div id="form1 p-0" min="0" name="quantity" style={{ textAlign: "center", width: "max-content", maxWidth: "70px", fontSize: "80%", border: "none" }} type="number" className="form-control rounded-0" >{cv.qty}</div>

                              </div>

                              <button type="button" onClick={() => cart_items_adjust(cv._id, 1)} disabled={cv.stock > cv.qty ? false : true} className="btn btn-primary btn-sm m-0 p-1" data-mdb-toggle="tooltip" title="Move to the wish list">
                                <Plus />
                              </button>
                            </div>
                            {/* <!-- Quantity --> */}

                            {/* <!-- Price --> */}
                            <p className="text-center mb-1">
                              <strong>₹ {cv.price}</strong>
                            </p>
                            {/* <!-- Price --> */}
                          </div>
                        </div>

                      </div>
                    })}

              </div>

            </div>


          </div>
        </div>

      </section>

      <section className="col col-12 col-md-4 p-0 m-0 sec2" style={{ height: "max-content", background: "white", borderRadius: "0", border: "1px solid red" }}>
        <div className="container-fluid py-0 m-0 px-0" style={{ maxHeight: "max-content", width: "100%", minWidth: "100%", borderRadius: "0" }}>

          <div className="row d-flex justify-content-center m-0 p-0" style={{ overflow: "hidden", width: "100%", gap: "4px", height: "max-content", minWidth: "100%", borderRadius: "0" }}>

            {/* <div className="card mb-2 pb-1" style={{ maxHeight: "100px", width: "100%" }}>
                <div className="card-body p-1" style={{ height: "100%", maxHeight: "100%" }}>
                  <p><strong>Expected shipping delivery</strong></p>
                  <p className="mb-0">12.10.2020 - 14.10.2020</p>
                </div>
              </div> */}

            {/* <div className="card mb-lg-0 p-1" style={{ maxHeight: "100px", width: "100%" }}>
                <div className="card-body p-1 m-0">
                  <p><strong>We accept</strong></p>
                  <img className="me-2" width="45px"
                    src="https://mdbcdn.b-cdn.net/wp-content/plugins/woocommerce-gateway-stripe/assets/images/visa.svg"
                    alt="Visa" />
                  <img className="me-2" width="45px"
                    src="https://mdbcdn.b-cdn.net/wp-content/plugins/woocommerce-gateway-stripe/assets/images/amex.svg"
                    alt="American Express" />
                  <img className="me-2" width="45px"
                    src="https://mdbcdn.b-cdn.net/wp-content/plugins/woocommerce-gateway-stripe/assets/images/mastercard.svg"
                    alt="Mastercard" />
                  <img className="me-2" width="45px"
                    src="https://themindstudios.com/blog/content/images/2019/02/paypal.jpg"
                    alt="PayPal acceptance mark" />
                </div>
              </div> */}


            
            <div className="card p-0 m-0 mb-1 px-0 d-none d-md-flex" style={{ width: "100%", minWidth: "100%", height: "max-content", margin: "auto", borderRadius: "0" }}>
            <button type="button" className="btn btn-primary btn-sm btn-block" style={{ minWidth: "100%" }}>
                  Go to checkout
                </button>
              <div className="card-header py-1 d-none d-md-block">
                <h5 className="mb-0 py-1" style={{ fontSize: "80%" }}>Summary</h5>
              </div>
              <div className="card-body py-0 px-2 m-0" style={{ height: "max-content", minHeight: "max-content" }}>
                <ul className="list-group list-group-flush d-none d-md-block" style={{border:"1px solid red"}}>
                  <li
                    className="list-group-item d-flex justify-content-between align-items-center border-0 px-3 pb-0 mx-auto" style={{ fontSize: "70%", width: "100%" }}>
                    Products
                    <span>₹ {cartAmt}</span>
                  </li>
                  <li className="list-group-item d-flex justify-content-between align-items-center px-3" style={{ fontSize: "70%", width: "100%" }}>
                    Shipping
                    <span>₹ {cartAmt > 999 ? 0 : 100}</span>
                  </li>
                  <li
                    className="list-group-item d-flex justify-content-between align-items-center border-0 px-3 mb-2" style={{ fontSize: "75%", width: "100%" }}>
                    <div style={{ fontSize: "73%", color: "grey" }}>
                      <strong>Total amount</strong>
                      <strong>
                        <p className="mb-0">(including VAT)</p>
                      </strong>
                    </div>
                    <span><strong>$ {cartAmt > 999 ? cartAmt : (cartAmt+100)}</strong></span>
                  </li>
                </ul>

                {/* <button type="button w-100 mb-0" className="btn btn-primary btn-sm btn-block" style={{ minWidth: "100%" }}>
                  Go to checkout
                </button> */}

              </div>

              <button type="button" className="btn btn-primary btn-sm btn-block" style={{ minWidth: "100%" }}>
                  Go to checkout
                </button>
            </div>

           

          </div>
        </div>
      </section>
    </div>
  )
}

export default CartComponent