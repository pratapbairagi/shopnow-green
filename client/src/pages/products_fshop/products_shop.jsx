import { useDispatch, useSelector } from "react-redux";
import "./productsShop.scss";
import { get_all_products_action } from "../../redux/product/product_actions";
import { useEffect, useState } from "react";
import { CaretRight, CartCheck, CartPlus, Check2Circle, GenderAmbiguous, GenderFemale, GenderMale, FunnelFill, UiChecksGrid, CurrencyRupee } from "react-bootstrap-icons"
import { Add_to_cart_action, Remove_from_cart_action } from "../../redux/cart/cartAction";
import { NavLink } from "react-router-dom";


const ProductsShop = () => {
    const dispatch = useDispatch();
    const { loading, success, error, product } = useSelector(state => state);
    const { cart } = useSelector(state => state.cart);

    const [search_options, setSearch_options] = useState({
        name: "",
        category: "",
        subcategory: "",
        price: {
            from: 0,
            to: 999999
        },
        rating: "",
        brand: "",
        color: "",
        type: "",
        size: ""

    })

    useEffect(() => {
        productCheck();
    }, [search_options]);

    const [productz, setProductz] = useState([])
    const [category, setCategory] = useState([])
    const [sizes, setSizes] = useState([])
    let uniqueSize = new Set();

    const [colors, setColors] = useState([])
    let uniqueColor = new Set();

    const [brands, setBrands] = useState([])
    let uniqueBrand = new Set();


    useEffect(() => {
        if (product) {
            if (product) {
                setProductz(product.products)
                

                function uniqueCat(value, index, array) {
                    return array.indexOf(value.category) === index
                }
                setCategory(product.products.filter(uniqueCat));

                // store unique sizes or remove duplicate sizes
                productz.forEach((obj)=>{
                    obj.size.forEach((sizeObj)=>{
                        uniqueSize.add(sizeObj.value.trim())
                    })
                })
                const sizeArray = Array.from(uniqueSize)
                setSizes(sizeArray)

                // store unique colors or remove duplicate colors
                productz.forEach((obj)=>{
                    obj.forEach((colorObj)=>{
                        uniqueColor.add(colorObj.value.trim())
                    })
                })
                const colorArray = Array.from(uniqueColor);
                setColors(colorArray)

                // store unique colors or remove duplicate colors
                productz.forEach((obj)=>{
                        uniqueBrand.add(obj.brand.trim())
                })
                const brandArray = Array.from(uniqueBrand);
                setBrands(brandArray);



            }
        }
    }, [product])

    console.log(brands)

    const productCheck = () => {
        // dispatch(get_all_products_action(
        //     {
        //         name:search_options.name, 
        //         category:search_options.category, 
        //         subcategory:search_options.price, 
        //         rating:search_options.rating, 
        //         brand:search_options.brand, 
        //         color: search_options.color, 
        //         type: search_options.type,
        //         size : search_options.size
        //     }
        //     ));
        dispatch(get_all_products_action(search_options.name, search_options.category, search_options.price, search_options.brand, search_options.color, search_options.size))

    }

    // toggle filter options
    const [toggleFilters, setToggleFilters] = useState(null);



    

    return (
        <>
            <div className="container bootdey bg-light py-2 mt-0" style={{ width: "100%" }}>
                <div className="row p-0 px-3">

                    <div className="col col-12 col-md-3 col-lg-2 p-0 px-4 px-md-1">
                       <div className="row gap-0 bootdey_2nd_row" style={{ position:"relative"}}>
                        
                        {/* <div className="col">
                        <section className="panel m-0 p-0 px-2 bg-white mx-auto" style={{ height: "12vh", width: "90%", display: "grid", placeItems: "center", borderRadius: "4px" }}>
                            <div className="panel-body m-0">
                                <input type="text" placeholder="Keyword Search" defaultValue="" onChange={(e) => setSearch_options({ ...search_options, name: e.target.value })} className="form-control" />
                            </div>
                        </section>
                        </div> */}

                        <div className="col-3  col-md-12 p-0 m-0 mb-2" style={{height:"max-content"}}>
                        <section className="panel mt-4 bg-white p-0 mx-auto" style={{ height: "max-content", width: "90%", minHeight: "max-content", display: "flex", flexDirection: "column", justifyContent: "flex-start", borderRadius: "6px" }}>
                            <header onClick={(e)=> setToggleFilters(  toggleFilters !== "Gender" ? e.currentTarget.innerText : null) } className="panel-heading p-2" style={{ borderRadius: "6px", fontWeight: "500", textAlign:"center", fontSize:"80%", display:"flex", justifyContent:"center", alignItems:"center", gap:"3px" }}>
                              <GenderAmbiguous size="10px" />  Gender
                            </header>
                            <div className={`panel-body  bottom-0 start-0 p-0 m-0 ${toggleFilters === "Gender" ? "d-block" : "d-none"} d-md-block`} style={{ left:"0",  minHeight: "max-content", zIndex: "3", height: "max-content", width: "100%" }}>
                                <ul className="nav prod-cat px-0 m-0" style={{ minHeight: "max-content", height: "max-content", width: "100%" }}>
                                    <li className="panel-body-li" style={{ width: "100%", minWidth: "100%", height: "max-content", minHeight: "max-content", padding: "5% 0 1% 0", background: "white", gap:"4px" }}>
                                        <span className="p-0 m-0">
                                        <button className="active d-flex justify-content-center align-items-center p-0" style={{ position: "relative", width:"25px", height:"25px", display:"flex", flexDirection:"column", background: `${search_options.category === "men" ? "green" : "red"}`, color:"white"  }}>
                                            <input type="radio" value="men" name="category" onChange={(e) => setSearch_options({ ...search_options, category: e.target.value })} id="" style={{ position: "absolute", width: "100%", height: "100%", opacity: "0" }} />
                                            {
                                                search_options.category === "men" ? <Check2Circle /> : <GenderMale />
                                            } 
                                             
                                        </button>
                                        <p className="p-0 m-0" style={{fontSize:"8px", fontWeight:"500", color:"grey"}}>Men</p>
                                        </span>

                                        <span className="p-0 m-0" >
                                        <button className="active d-flex justify-content-center align-items-center p-0" style={{ position: "relative", width:"25px", height:"25px", display:"flex", flexDirection:"column", background: `${search_options.category === "women" ? "green" : "red"}`, color:"white"  }}>
                                            <input type="radio" value="women" name="category" onChange={(e) => setSearch_options({ ...search_options, category: e.target.value })} id="" style={{ position: "absolute", width: "100%", height: "100%", opacity: "0" }} />
                                            {
                                                search_options.category === "women" ? <Check2Circle /> : <GenderFemale />
                                            } 
                                        </button>
                                        <p className="p-0 m-0" style={{fontSize:"8px", fontWeight:"500", color:"grey"}}>Women</p>
                                        </span>

                                        <span className="p-0 m-0">
                                        <button className="active d-flex justify-content-center align-items-center p-0" style={{ position: "relative", width:"25px", height:"25px", display:"flex", flexDirection:"column", background: `${search_options.category === "kids" ? "green" : "red"}`, color:"white"  }}>
                                            <input type="radio" value="kids" name="category" onChange={(e) => setSearch_options({ ...search_options, category: e.target.value })} id="" style={{ position: "absolute", width: "100%", height: "100%", opacity: "0" }} />
                                            {
                                                search_options.category === "kids" ? <Check2Circle /> : <GenderAmbiguous />
                                            }
                                        </button>
                                        <p className="p-0 m-0" style={{fontSize:"8px", fontWeight:"500", color:"grey"}}>Kids</p>
                                        </span>
                                            {/* <span style={{fontSize:"8px"}}>male</span> */}
                                        {/* <ul className="nav p-0 m-0 flex-column" style={{ height: "max-content", display: `${search_options.category === "men" ? "flex" : "none"}` }}>
                                            <li className="active " style={{ width: "100%", background: "white", border: "none", position: "relative" }}>
                                                <input type="radio" onChange={(e) => setSearch_options({ ...search_options, subcategory: e.target.value })} name="subcategory" value="shorts" id="" style={{ position: "absolute", width: "100%", height: "100%", opacity: "0", left: "0" }} />
                                                <button style={{ width: "100%", display: "block" }}>- Shirt</button>
                                            </li>
                                            <li style={{ width: "100%", background: "white", position: "relative" }}>
                                                <input type="radio" name="subcategory" onChange={(e) => setSearch_options({ ...search_options, subcategory: e.target.value })} value="pants" id="" style={{ position: "absolute", width: "92%", height: "100%", opacity: "0", left: "0" }} />
                                                <button style={{ width: "100%", display: "block" }}>- Pant</button>
                                            </li>
                                            <li style={{ width: "100%", background: "white", position: "relative" }}>
                                                <input type="radio" name="subcategory" value="tshirts" onChange={(e) => setSearch_options({ ...search_options, subcategory: e.target.value })} id="" style={{ position: "absolute", width: "100%", height: "100%", opacity: "0", left: "0" }} />
                                                <button style={{ width: "100%" }}>- T-shirts</button>
                                            </li>
                                            <li style={{ width: "100%", background: "white", position: "relative" }}>
                                                <input type="radio" name="subcategory" value="shoes" onChange={(e) => setSearch_options({ ...search_options, subcategory: e.target.value })} id="" style={{ position: "absolute", width: "100%", height: "100%", opacity: "0", left: "0" }} />
                                                <button style={{ width: "100%" }}>- Shoes</button>
                                            </li>
                                        </ul> */}
                                    </li>
                                </ul>
                            </div>
                        </section>
                        </div>

                        <div className="col-3  col-md-12 p-0" style={{ height:"max-content"}}>
                        <section className="panel mt-4 bg-white p-0 mx-auto" style={{ height: "max-content", width: "90%", minHeight: "max-content", display: "flex", flexDirection: "column", justifyContent: "flex-start", borderRadius: "6px" }}>
                            <header onClick={(e)=> setToggleFilters(  toggleFilters !== "Category" ? e.currentTarget.innerText : null) } className="panel-heading p-2" style={{ borderRadius: "6px", fontWeight: "500", textAlign:"center", fontSize:"80%", display:"flex", justifyContent:"center", alignItems:"center", gap:"3px", maxWidth:"70px" }}>
                              <UiChecksGrid size="10px"/>  Category
                            </header>
                            <div className={`panel-body  bottom-0 start-0 p-0 m-0 ${toggleFilters === "Category" ? "d-block" : "d-none"} d-md-block`} style={{ left:"0",  minHeight: "max-content", zIndex: "3", height: "max-content", width: "100%", background:"white" }}>
                                <ul className="nav prod-cat px-0 m-0" style={{ minHeight: "max-content", height: "max-content", width: "100%" }}>
                                    <li className="panel-body-li" style={{ width: "100%", minWidth: "100%", height: "max-content", minHeight: "max-content", padding: "5% 0 1% 0", background: "white", display:"flex", gap:"4px" }}>
                                        <span className="p-0 m-0" style={{display:"flex", flexDirection:"column", justifyContent:"center", alignItems:"center", gap:"2px"}}>
                                        <button className="active d-flex justify-content-center align-items-center p-0" style={{ position: "relative", width:"25px", height:"25px", display:"flex", flexDirection:"column", background: `${search_options.category === "men" ? "green" : "red"}`, color:"white"  }}>
                                            <input type="radio" value="men" name="category" onChange={(e) => setSearch_options({ ...search_options, category: e.target.value })} id="" style={{ position: "absolute", width: "100%", height: "100%", opacity: "0" }} />
                                            {
                                                search_options.category === "men" ? <Check2Circle /> : <GenderMale />
                                            } 
                                             
                                        </button>
                                        <p className="p-0 m-0" style={{fontSize:"8px", fontWeight:"500", color:"grey"}}>Men</p>
                                        </span>

                                        <span className="p-0 m-0" style={{display:"flex", flexDirection:"column", justifyContent:"center", alignItems:"center", gap:"2px"}}>
                                        <button className="active d-flex justify-content-center align-items-center p-0" style={{ position: "relative", width:"25px", height:"25px", display:"flex", flexDirection:"column", background: `${search_options.category === "women" ? "green" : "red"}`, color:"white"  }}>
                                            <input type="radio" value="women" name="category" onChange={(e) => setSearch_options({ ...search_options, category: e.target.value })} id="" style={{ position: "absolute", width: "100%", height: "100%", opacity: "0" }} />
                                            {
                                                search_options.category === "women" ? <Check2Circle /> : <GenderFemale />
                                            } 
                                        </button>
                                        <p className="p-0 m-0" style={{fontSize:"8px", fontWeight:"500", color:"grey"}}>Women</p>
                                        </span>

                                        <span className="p-0 m-0" style={{display:"flex", flexDirection:"column", justifyContent:"center", alignItems:"center", gap:"2px"}}>
                                        <button className="active d-flex justify-content-center align-items-center p-0" style={{ position: "relative", width:"25px", height:"25px", display:"flex", flexDirection:"column", background: `${search_options.category === "kids" ? "green" : "red"}`, color:"white"  }}>
                                            <input type="radio" value="kids" name="category" onChange={(e) => setSearch_options({ ...search_options, category: e.target.value })} id="" style={{ position: "absolute", width: "100%", height: "100%", opacity: "0" }} />
                                            {
                                                search_options.category === "kids" ? <Check2Circle /> : <GenderAmbiguous />
                                            }
                                        </button>
                                        <p className="p-0 m-0" style={{fontSize:"8px", fontWeight:"500", color:"grey"}}>Kids</p>
                                        </span>
                                            
                                    </li>
                                </ul>
                            </div>
                        </section>
                        </div>

                        <div className="col-3  col-md-12 p-0" style={{ height:"max-content"}}>
                        <section className="panel mx-auto mt-4 py-2" style={{ height: "max-content", background: "white", width: "90%", borderRadius: "6px" }}>
                            <header onClick={(e)=> setToggleFilters(  toggleFilters !== "Price" ? e.currentTarget.innerText : null) } className="panel-heading m-0 p-0" style={{ borderRadius: "6px", fontWeight: "500", fontSize:"80%", display:"flex", justifyContent:"center", alignItems:"center", gap:"3px" }}>
                               <CurrencyRupee size="10px"/> Price
                            </header>

                            <div className={`panel-body  bottom-0 start-0 p-0 py-2 m-0 ${toggleFilters === "Price" ? "d-block" : "d-none"} d-md-block`} style={{ left:"0",  minHeight: "max-content", zIndex: "3", height: "max-content", width: "100%", background:"white" }}>
                                <input className="col col-10 text-center" defaultValue="0" onChange={(e) => setSearch_options({ ...search_options, price: { from: e.target.value } })} style={{ opacity: "1", position: "relative", display: "block", border: "1px solid grey", left: "8%" }} type="number" name="" id="" />
                                <span className="col-6"> From : {search_options.price.from}</span>
                                <span className="col col-6"> To : {search_options.price.to}</span>
                                <input className="col col-10 text-center" defaultValue="99999" onChange={(e) => setSearch_options({ ...search_options, price: { to: e.target.value } })} style={{ opacity: "1", position: "relative", display: "block", border: "1px solid grey", left: "8%" }} type="number" name="" id="" />

                                {/* <button className="btn btn-success mx-auto" style={{maxWidth:"90"}}>Search</button> */}

                            </div>
                        </section>
                        </div>

                        <div className="col-3  col-md-12 p-0" style={{ height:"max-content"}}>
                        <section className="panel mx-auto mt-4 py-2" style={{ width: "90%", background: "white", borderRadius: "6px" }}>
                            <header onClick={(e)=> setToggleFilters(  toggleFilters !== "Filter" ? e.currentTarget.innerText : null) } className="panel-heading m-0 p-0" style={{ borderRadius: "6px", fontWeight: "500", fontSize:"80%", display:"flex", justifyContent:"center", alignItems:"center", gap:"3px" }}>
                              <FunnelFill size="10px" />  Filter
                            </header>
                            <div className={`panel-body  bottom-0 start-0 p-0 py-2 m-0 ${toggleFilters === "Filter" ? "d-block" : "d-none"} d-md-block`} style={{ left:"0",  minHeight: "max-content", zIndex: "3", height: "max-content", width: "100%", background:"white" }}>
                                {/* <form role="form product-form"> */}
                                <form>

                                    <div className="form-group mt-2">
                                        <label style={{ fontWeight: "500", width: "90%", margin: "0 auto", textAlign: "left" }}>Brand</label>
                                        <select onChange={(e) => setSearch_options({ ...search_options, brand: e.target.value })} className="form-control hasCustomSelect mx-auto" style={{ appearance: "menulist-button", width: "90%", height: "34px", fontSize: "12px" }}>
                                            {
                                                productz.map((pv, pi) => {
                                                    return <option key={pi} value="wallmart">{pv.brand}</option>
                                                })
                                            }
                                        </select>
                                        {/* <span className="customSelect form-control" style={{display: "inline-block"}}>
                            <span className="customSelectInner" style={{width: "209px", display: "inline-block"}}>Wallmart</span></span> */}
                                    </div>
                                    <div className="form-group mt-2">
                                        <label style={{ fontWeight: "500", width: "90%", margin: "0 auto", textAlign: "left" }}>Color</label>
                                        <select onChange={(e) => setSearch_options({ ...search_options, color: e.target.value })} className="form-control hasCustomSelect mx-auto" style={{ appearance: "menulist-button", width: "90%", height: "34px", fontSize: "12px" }}>
                                            {
                                                colors.map((pcv, pci) => {
                                                    return <option key={pci} value={pcv}>{pcv}</option>
                                                })
                                                }
                                            
                                        </select>
                                        {/* <span className="customSelect form-control" style={{display: "inline-block"}}><span className="customSelectInner" style={{width: "209px", display: "inline-block"}}>White</span></span> */}
                                    </div>
                                    <div className="form-group mt-2">
                                        <label style={{ fontWeight: "500", width: "90%", margin: "0 auto", textAlign: "left" }}>Type</label>
                                        <select onChange={(e) => setSearch_options({ ...search_options, size: e.target.value })} className="form-control hasCustomSelect mx-auto" style={{ appearance: "menulist-button", width: "90%", height: "34px", fontSize: "12px" }}>
                                            {
                                              sizes.length >= 0 &&  sizes.map((psv, psi) => {
                                                    return <option key={psi} value={psv}>{psv}</option>
                                                })
                                            }
                                           
                                        </select>
                                        {/* <span className="customSelect form-control" style={{display: "inline-block"}}><span className="customSelectInner" style={{width: "209px", display: "inline-block"}}>Small</span></span> */}
                                    </div>
                                    <button className="btn btn-primary mt-2 mx-auto" type="submit" style={{ width: "90%" }}>Filter</button>
                                </form>
                                
                            </div>
                        </section>

                        {/* <section className="panel mt-4 mx-auto px-3 pt-3" style={{ width: "90%", background: "white", borderRadius: "6px" }}>
                            <header className="panel-heading my-2" style={{ borderBottom: "1px dashed grey", textAlign: "left" }}>
                                Best Seller
                            </header>
                            <div className="panel-body">
                                <div className="best-seller">
                                    <article className="media text-start mt-3">
                                        <NavLink to="/details" className="pull-left thumb p-thumb">
                                            <img src="https://www.bootdey.com/image/250x220/FFB6C1/000000.jpg" alt="product" />
                                        </NavLink>
                                        <div className="media-body text-start" style={{ fontSize: "90%" }}>
                                            <NavLink to="/details" className="p-head">Item One Tittle</NavLink>
                                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                                        </div>
                                    </article>
                                    <article className="media text-start mt-3" style={{ fontSize: "90%" }}>
                                        <NavLink to="/details" className="pull-left thumb p-thumb">
                                            <img src="https://www.bootdey.com/image/250x220/A2BE2/000000.jpg" alt="product" />
                                        </NavLink>
                                        <div className="media-body">
                                            <NavLink to="/details" className="p-head">Item Two Tittle</NavLink>
                                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                                        </div>
                                    </article>
                                    <article className="media text-start mt-3" style={{ fontSize: "90%" }}>
                                        <NavLink to="details" className="pull-left thumb p-thumb">
                                            <img src="https://www.bootdey.com/image/250x220/6495ED/000000.jpg" alt="product" />
                                        </NavLink>
                                        <div className="media-body">
                                            <NavLink to="/details" className="p-head">Item Three Tittle</NavLink>
                                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                                        </div>
                                    </article>
                                </div>
                            </div>
                        </section> */}
                        </div>
                        </div>

                    </div>

                    <div className="col-md-9 col-lg-10 position-relative" style={{maxWidth:"100vw"}}>
                        <section className="panel bg-light py-0 px-2 m-0 bg-white" style={{ height: "8vh", display: "flex", alignItems: "center", justifyContent: "flex-end", borderRadius: "4px" }} >
                            <div className="panel-body p-0 m-0 position-relative" style={{ display: "flex", justifyContent: "flex-end", width: "100%" }}>
                                <div className="pull-right m-0 position-relative" style={{ width: "max-content", display: "flex", alignItems: "center" }}>
                                    <ul className="pagination pagination-sm pro-page-list m-0 p-2 position-relative" style={{ border: "1px solid whitesmoke", borderRadius: "3px" }}>
                                        <li><a href="#1">1</a></li>
                                        <li><a href="#2">2</a></li>
                                        <li><a href="#3">3</a></li>
                                        <li><a href="#4">»</a></li>
                                    </ul>
                                </div>
                            </div>
                        </section>

                        <div className="row product-list px-2" style={{minHeight:"75vh"}}>
                            {product.success && product.products.map((v, i) => {

                                return <div className="col col-6 col-md-4 col-lg-3 p-0 p-1" key={v._id} >
                                    <section className="panel p-0 p-1">
                                        <div className="pro-img-box p-0">
                                           <NavLink to={`details/${v._id}`}> 
                                            <img src={v.images[0].url} alt={v.images[0].url} />
                                            </NavLink>
                                            {cart.filter(cv => cv._id === v._id)[0] !== undefined ?
                                                <button onClick={() => dispatch(Remove_from_cart_action(v._id))} className="adtocart" style={{ display: "flex", justifyContent: "center", alignItems: "center", background: "green" }}>
                                                    <CartCheck style={{ marginBottom: "2px", fontSize: "120%" }} />
                                                </button> :
                                                <button onClick={() => dispatch(Add_to_cart_action(v._id))} className="adtocart" style={{ display: "flex", justifyContent: "center", alignItems: "center", background: "red" }}>
                                                    <CartPlus style={{ marginBottom: "2px", fontSize: "120%" }} />
                                                </button>
                                            }
                                        </div>

                                        <div className="panel-body position-relative text-center py-2">
                                            <h4 className="py-1 pt-2 text-center m-0 mt-2">
                                                <span className="pro-title w-100 text-center p-0 m-0" style={{maxWidth:"100%", display:"-webkit-box", overflow:"hidden", WebkitLineClamp:"1", WebkitBoxOrient:"vertical"}}>
                                                    {v.title}
                                                </span>
                                            </h4>
                                            <p className="price p-0 m-0">${v.price}</p>
                                        </div>
                                    </section>
                                </div>
                            })}

                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ProductsShop