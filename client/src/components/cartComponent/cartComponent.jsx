
import { useDispatch, useSelector } from "react-redux";
import { Cart_qty_adjust, Remove_from_cart_action } from "../../redux/cart/cartAction";
import { TrashFill, HeartFill, Plus, Dash } from "react-bootstrap-icons"

const CartComponent = () => {
    const { cart } = useSelector(state => state.cart)
  const dispatch = useDispatch()
  
    return (
        <div className="row" style={{ gap: "0" }}>
        <section className="col col-12 col-md-6 gradient-custom p-0 sec1 m-0">
          <div className="container py-1 m-0" style={{ maxHeight: "100%" }}>

            <div className="row d-flex justify-content-center my-0 p-0 py-1" style={{ overflow: "scroll", maxHeight: "max-content", width: "100%", margin: "3px auto" }}>
              <div className="col-md-8" style={{ width: "100%" }}>
                <div className="card mb-2 p-1" style={{ width: "100%" }}>

                  <div className="card-body pb-0">
                    {/* <!-- Single item --> */}

                    {cart.map((cv, ci) => {
                      return <div key={ci} className="row">
                        <div className="col-lg-3 col-md-12 mb-4 mb-lg-0">
                          {/* <!-- Image --> */}
                          <div className="bg-image hover-overlay hover-zoom ripple rounded" data-mdb-ripple-color="light">
                            <img src={cv.images[0].url}
                              className="w-75" alt="Blue Jeans Jacket" />
                            <a href="#!">
                              <div className="mask" style={{ backgroundColor: "rgba(251, 251, 251, 0.2)" }}></div>
                            </a>
                          </div>
                          {/* <!-- Image --> */}
                        </div>

                        <div className="col col-lg-4 mb-4 mb-lg-0">
                          {/* <!-- Data --> */}
                          <p className="mb-1"><strong>{cv.title}</strong></p>
                          <p className="mb-1">Color: blue</p>
                          <p className="mb-2">Size: M</p>
                          <button onClick={() => dispatch(Remove_from_cart_action(cv._id))} type="button" className="btn btn-primary btn-sm me-1 mb-2" data-mdb-toggle="tooltip"
                            title="Remove item">
                            {/* <i className="fas fa-trash"></i> */}
                            <TrashFill />
                          </button>
                          <button type="button" className="btn btn-danger btn-sm mb-2" data-mdb-toggle="tooltip"
                            title="Move to the wish list">
                            {/* <i className="fas fa-heart"></i> */}
                            <HeartFill />
                          </button>
                          {/* <!-- Data --> */}
                        </div>

                        <div className="col-lg-5 mb-4 mb-lg-0 p-0" style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "1px" }}>
                          {/* <!-- Quantity --> */}
                          <div className="d-flex mb-4">
                            <button onClick={() => dispatch(Cart_qty_adjust(cv._id, "-"))} className="btn btn-primary px-3 rounded-0 rounded-start"
                            // onClick={this.parentNode.querySelector('input[type=number]').stepDown()}
                            >
                              {/* <i className="fas fa-minus"></i> */}
                              <Dash />
                            </button>

                            <div className="form-outline">
                              <div id="form1" min="0" name="quantity" style={{ textAlign: "center", width: "max-content", maxWidth: "70px" }} defaultValue={cv.qty} type="number" className="form-control rounded-0" >{cv.qty}</div>
                              {/* <label className="form-label" for="form1">Quantity</label> */}
                            </div>

                            <button onClick={() => dispatch(Cart_qty_adjust(cv._id, "+"))} className="btn btn-primary px-3 rounded-0 rounded-end"
                            // onClick={this.parentNode.querySelector('input[type=number]').stepUp()}
                            >
                              {/* <i className="fas fa-plus"></i> */}
                              <Plus />
                            </button>
                          </div>
                          {/* <!-- Quantity --> */}

                          {/* <!-- Price --> */}
                          <p className="text-center mb-1">
                            <strong>$17.99</strong>
                          </p>
                          {/* <!-- Price --> */}
                        </div>
                        <hr className="my-2" />
                      </div>

                    })}



                    {/* <!-- Single item --> */}

                    <hr className="my-2" />

                  </div>
                </div>

              </div>


            </div>
          </div>
        </section>

        <section className="col col-12 col-md-4 gradient-custom p-0 mt-0 sec2" style={{ margin: "6px auto", padding: "3px" }}>
          <div className="container py-0 m-1" style={{ maxHeight: "100%", width: "100%" }}>

            <div className="row d-flex justify-content-center my-0 py-1 px-2" style={{ overflow: "scroll", width: "100%", padding: "6px 0", margin: "0 auto", gap: "4px" }}>

              <div className="card mb-2 pb-1" style={{ maxHeight: "100px", width: "100%" }}>
                <div className="card-body p-1" style={{ height: "100%", maxHeight: "100%" }}>
                  <p><strong>Expected shipping delivery</strong></p>
                  <p className="mb-0">12.10.2020 - 14.10.2020</p>
                </div>
              </div>

              <div className="card mb-lg-0 p-1" style={{ maxHeight: "100px", width: "100%" }}>
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
              </div>



              <div className="card" style={{ width: "100%", height: "max-content", marginBottom: "10px" }}>
                <div className="card-header py-2">
                  <h5 className="mb-0 py-0" style={{ fontSize: "80%" }}>Summary</h5>
                </div>
                <div className="card-body py-1 px-2" style={{ height: "max-content", minHeight: "max-content", maxHeight: "max-content" }}>
                  <ul className="list-group list-group-flush">
                    <li
                      className="list-group-item d-flex justify-content-between align-items-center border-0 px-0 pb-0" style={{ fontSize: "70%" }}>
                      Products
                      <span>$53.98</span>
                    </li>
                    <li className="list-group-item d-flex justify-content-between align-items-center px-0" style={{ fontSize: "70%" }}>
                      Shipping
                      <span>Gratis</span>
                    </li>
                    <li
                      className="list-group-item d-flex justify-content-between align-items-center border-0 px-0 mb-2" style={{ fontSize: "70%" }}>
                      <div style={{ fontSize: "70%" }}>
                        <strong>Total amount</strong>
                        <strong>
                          <p className="mb-0">(including VAT)</p>
                        </strong>
                      </div>
                      <span><strong>$53.98</strong></span>
                    </li>
                  </ul>

                  <button type="button" className="btn btn-primary btn-sm btn-block">
                    Go to checkout
                  </button>

                </div>
              </div>

            </div>
          </div>
        </section>
      </div>
    )
}

export default CartComponent