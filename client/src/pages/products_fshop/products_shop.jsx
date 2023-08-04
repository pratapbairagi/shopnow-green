import { useDispatch, useSelector } from "react-redux";
import "./productsShop.scss";
import { get_all_products_action } from "../../redux/product/product_actions";
import { useEffect, useState } from "react";
import { CaretRight, CartCheck, CartPlus, Check2Circle, GenderAmbiguous, GenderFemale, GenderMale, FunnelFill, UiChecksGrid, CurrencyRupee, Check, FilterRight } from "react-bootstrap-icons"
import { Add_to_cart_action, Remove_from_cart_action } from "../../redux/cart/cartAction";
import { NavLink, useLocation } from "react-router-dom";


const ProductsShop = ({search_options, setSearch_options}) => {

    const{ pathname }= useLocation()

    const [path, setPath] = useState(undefined)
    useEffect(()=>{
        if(pathname !== undefined && pathname !== null && typeof pathname === "string"){
            setPath(pathname)
        }
    },[pathname])

    const dispatch = useDispatch();
    const { loading, success, error, product } = useSelector(state => state);
    const { cart } = useSelector(state => state.cart);
    const [filterValues, setFilterValues] = useState({
        brand :"", color :"", size:""
    })
    const [filterPrice, setFilterPrice] = useState({
        from :0, to :9999999
    })


    useEffect(() => {
        // path ? productCheck(path) : productCheck();
        productCheck()
    }, [search_options, path]);

    const [productz, setProductz] = useState([])

    let uniqueCategory = new Set();
    let uniqueSize = new Set();
    let uniqueColor = new Set();
    let uniqueBrand = new Set();

    useEffect(() => {
        if (product) {

            if (product.products) {
                setProductz(product.products)

                // function uniqueCat(value, index, array) {
                //     return array.indexOf(value.category) === index
                // }
                // setCategory(product.products.filter(uniqueCat));

                // store gender in localstorage
                if (localStorage.getItem("gender") === undefined || localStorage.getItem("gender") === null) {
                    localStorage.setItem("gender", JSON.stringify([{ gender: "" }, { gender: "male" }, { gender: "female" }]))
                }

                // store unique categories or remove duplicate categories
                product.products.forEach((obj) => {
                    uniqueCategory.add(obj.category)
                })
                const categoryArray = Array.from(uniqueCategory);
                categoryArray.push("")
                if (localStorage.getItem("categories") === undefined || localStorage.getItem("categories") === null) {
                    localStorage.setItem("categories", JSON.stringify(categoryArray))
                }
                if (localStorage.getItem("categories") !== undefined) {
                    if (JSON.parse(localStorage.getItem("categories")).length < categoryArray.length) {
                        localStorage.setItem("categories", JSON.stringify(categoryArray))
                    }
                }

                // store unique sizes or remove duplicate sizes
                product.products.forEach((obj) => {
                    obj.size.forEach((sizeObj) => {
                        uniqueSize.add(sizeObj.value.trim())
                    })
                })
                const sizeArray = Array.from(uniqueSize)
                sizeArray.push("");
                // setSizes(sizeArray)
                if (localStorage.getItem("sizes") === undefined || localStorage.getItem("sizes") === null || localStorage.getItem("sizes") === null || JSON.parse(localStorage.getItem("sizes"))?.length < sizeArray.length) {
                    localStorage.setItem("sizes", JSON.stringify(sizeArray))
                }

                // store unique colors or remove duplicate colors
                product.products.forEach((obj) => {
                    obj.color.forEach((colorObj) => {
                        uniqueColor.add(colorObj.value.trim())
                    })
                })
                const colorArray = Array.from(uniqueColor);
                colorArray.push("")
                // setColors(colorArray)
                if (localStorage.getItem("colors") === undefined || localStorage.getItem("colors") === null || JSON.parse(localStorage.getItem("colors"))?.length < colorArray.length) {
                    localStorage.setItem("colors", JSON.stringify(colorArray))
                }

                // store unique colors or remove duplicate colors
                product.products.forEach((obj) => {
                    uniqueBrand.add(obj.brand.trim())
                })
                const brandArray = Array.from(uniqueBrand);
                brandArray.push("")
                // setBrands(brandArray);
                if (localStorage.getItem("brands") === undefined || localStorage.getItem("brands") === null || JSON.parse(localStorage.getItem("brands"))?.length < brandArray.length) {
                    localStorage.setItem("brands", JSON.stringify(brandArray))
                }
            }
        }
    }, [product, productz])

    const productCheck = () => {
          
         if(path === "/shop"){
            dispatch(get_all_products_action(search_options.name, search_options.category, search_options.price, search_options.brand ,search_options.color , search_options.size , search_options.gender))
        }
        else if(path === "/women"){
            dispatch(get_all_products_action(search_options.name, search_options.category, search_options.price, search_options.brand, search_options.color, search_options.size , "f"))
        }
        else if(path === "/men"){
            dispatch(get_all_products_action(search_options.name, search_options.category, search_options.price, search_options.brand ,search_options.color , search_options.size, "m"))
        }
        else if(path === "/kids"){
            dispatch(get_all_products_action(search_options.name, search_options.category, search_options.price, search_options.brand, search_options.color, "Y", search_options.gender))
        }
        else if(path !== "/shop" && path !== "/women" && path !== "/men" && path !== "/kids" && typeof path === "string" ){
            dispatch(get_all_products_action(search_options.name, search_options.category, search_options.price, path.slice(1) , search_options.color, search_options.size, search_options.gender))
        }
   
    }

    // toggle filter options
    const [toggleFilters, setToggleFilters] = useState(null);

    // submit filter
    const submitFilter = () => {
        setSearch_options({
            ...search_options,
            brand : filterValues.brand,
            color : filterValues.color,
            size : filterValues.size
        })
    }

    // search filter
    const filterPriceHandler = () => {
        setSearch_options({
            ...search_options,
            price : filterPrice
        })
    }

    return (
        <>
            <div className="container bootdey bg-light py-2 mt-0" style={{ width: "100%", overflowX:"hidden" }}>
                <div className="row p-0 px-3" style={{overflowX:"hidden"}}>

                    <div className="col col-12 col-md-3 col-lg-2 p-0 px-md-1">
                        <div className="row g-0 gap-0 w-100 bootdey_2nd_row px-0" style={{ position: "relative", minWidth:"100%", margin:"auto" }}>


                            <div className="col-3  col-md-12 p-0 m-0 mb-2" style={{ height: "max-content", minWidth:"50px" }}>
                                <section className="panel mt-0 bg-white p-0 mx-auto" style={{ height: "max-content", width: "90%", minHeight: "max-content", display: "flex", flexDirection: "column", justifyContent: "flex-start", borderRadius: "6px" }}>
                                    <header onClick={(e) => setToggleFilters(toggleFilters !== "Gender" ? e.currentTarget.innerText : null)} className="panel-heading p-2" style={{ borderRadius: "6px", fontWeight: "500", textAlign: "center", fontSize: "80%", display: "flex", justifyContent: "center", alignItems: "center", gap: "6px" }}>
                                        <GenderAmbiguous size="10px" />  Gender
                                    </header>
                                    <div className={`panel-body  bottom-0 start-0 p-0 m-0 ${toggleFilters === "Gender" ? "d-block" : "d-none"} d-md-block`} style={{ left: "0", minHeight: "max-content", zIndex: "3", height: "max-content", width: "100%" }}>
                                        <ul className="nav prod-cat px-0 m-0" style={{ minHeight: "max-content", height: "max-content", width: "100%" }}>
                                            <li className="panel-body-li" style={{ display: "flex", flexDirection: "column", alignItems: "flex-start", width: "100%", minWidth: "100%", height: "max-content", minHeight: "max-content", padding: "5% 10% 4% 10%", background: "white", gap: "4px" }}>

                                                {localStorage.getItem("gender") && JSON.parse(localStorage.getItem("gender")).map((v, i) => {
                                                    return <span key={i} className="p-0 m-0" style={{ display: "flex", width:"100%", maxWidth:"100%", flexDirection: "row", justifyContent: "space-between", alignItems: "center", gap: "6px" }}>
                                                        <button className="active d-flex justify-content-center align-items-center p-0" style={{ position: "relative", width: "20px", height: "20px", display: "flex", flexDirection: "column", background: `${search_options.gender !== v.gender ? "white" : "green"}`, color: "white", border: "1px solid grey", borderRadius: "3px" }}>
                                                            <input type="radio" value={v.gender.slice(0,1)} name="category" onChange={(e) => setSearch_options({ ...search_options, gender: e.target.value })} id="" style={{ position: "absolute", width: "100%", height: "100%", opacity: "0" }} />
                                                            {
                                                                search_options.gender !== `${v.gender.slice(0,1)}` ?
                                                                    <span className="p-0 m-0" style={{ minHeight: "20px", minWidth: "20px" }}></span>
                                                                    :
                                                                    <span className="p-0 m-0" style={{ minHeight: "20px", minWidth: "20px", display: "grid", placeItems: "center", backgroundColor: "green", color: "whitesmoke" }}>
                                                                        <Check size="100%" />
                                                                    </span>
                                                            }

                                                        </button>
                                                        <p className="p-0 m-0" style={{ fontSize: "12px", fontWeight: "500", color: "grey" }}>{v.gender.length > 0 ? v.gender : "All"}</p>
                                                    </span>
                                                })
                                                }

                                            </li>
                                        </ul>
                                    </div>
                                </section>
                            </div>

                            <div className="col-3  col-md-12 p-0 mb-2" style={{ height: "max-content", minWidth:"65px" }}>
                                <section className="panel mt-0 bg-white p-0 mx-auto" style={{ height: "max-content", width: "90%", minHeight: "max-content", display: "flex", flexDirection: "column", justifyContent: "flex-start", borderRadius: "6px" }}>
                                    <header onClick={(e) => setToggleFilters(toggleFilters !== "Category" ? e.currentTarget.innerText : null)} className="panel-heading p-2" style={{ borderRadius: "6px", fontWeight: "500", textAlign: "center", fontSize: "80%", display: "flex", justifyContent: "center", alignItems: "center", gap: "6px" }}>
                                        <UiChecksGrid size="10px" />  Category
                                    </header>
                                    <div className={`panel-body  bottom-0 start-0 p-0 m-0 ${toggleFilters === "Category" ? "d-block" : "d-none"} d-md-block`} style={{ left: "0", minHeight: "max-content", zIndex: "3", height: "max-content", width: "100%", background: "white" }}>
                                        <ul className="nav prod-cat px-0 m-0" style={{ minHeight: "max-content", height: "max-content", width: "100%" }}>
                                            <li className="panel-body-li" style={{ width: "100%", minWidth: "100%", height: "max-content", minHeight: "20vh", maxHeight: "45vh", overflowY: "auto", padding: "5% 10% 4% 10%", background: "white", display: "flex", flexDirection: "column", alignItems: "flex-start", justifyContent:"flex-start", gap: "4px" }}>

                                                {localStorage.getItem("categories") && JSON.parse(localStorage.getItem("categories")).map((c, i) => {
                                                    return <span className="p-0 m-0" key={i} style={{ display: "flex", width:"100%", maxWidth:"100%", flexDirection: "row", justifyContent: "space-between", alignItems: "center", gap: "6px" }}>
                                                        <button className="active d-flex justify-content-center align-items-center p-0" style={{ position: "relative", width: "20px", height: "20px", display: "flex", flexDirection: "column", background: `${search_options.category !== c ? "white" : "green"}`, color: "white", border: "1px solid grey", borderRadius: "3px" }}>
                                                            <input type="radio" value={c} name="category" onChange={(e) => setSearch_options({ ...search_options, category: e.target.value })} id="" style={{ position: "absolute", width: "100%", height: "100%", opacity: "0" }} />
                                                            {
                                                                search_options.category !== `${c}` ?
                                                                    <span className="p-0 m-0" style={{ minHeight: "20px", minWidth: "20px" }}></span>
                                                                    :
                                                                    <span className="p-0 m-0" style={{ minHeight: "20px", minWidth: "20px", display: "grid", placeItems: "center", backgroundColor: "green", color: "whitesmoke" }}>
                                                                        <Check size="100%" />
                                                                    </span>
                                                            }

                                                        </button>
                                                        <p className="p-0 m-0" style={{ fontSize: "12px", fontWeight: "500", color: "grey" }}>{c.length > 0 ? c : "All"}</p>
                                                    </span>
                                                })
                                                }

                                            </li>
                                        </ul>
                                    </div>
                                </section>
                            </div>

                            <div className="col-2  col-md-12 p-0 mb-2" style={{ height: "max-content", minWidth:"40px" }}>
                                <section className="panel mx-auto mt-0 py-2" style={{ height: "max-content", background: "white", width: "90%", borderRadius: "6px" }}>
                                    <header onClick={(e) => setToggleFilters(toggleFilters !== "Price" ? e.currentTarget.innerText : null)} className="panel-heading m-0 p-0" style={{ borderRadius: "6px", fontWeight: "500", fontSize: "80%", display: "flex", justifyContent: "center", alignItems: "center", gap: "3px" }}>
                                        <CurrencyRupee size="10px" /> Price
                                    </header>

                                    <div className={`panel-body  bottom-0 start-0 p-0 py-2 m-0 ${toggleFilters === "Price" ? "d-block" : "d-none"} d-md-block`} style={{ left: "0", minHeight: "max-content", zIndex: "3", height: "max-content", width: "100%", background: "white" }}>
                                        <input className="col col-10 text-center" defaultValue="0" onChange={(e) => setFilterPrice({ ...filterPrice, from : e.target.value })} style={{ opacity: "1", position: "relative", display: "block", border: "1px solid grey", left: "8%" }} type="number" name="" id="" />
                                        
                                        <input className="col col-10 text-center mt-2" defaultValue="9999999" onChange={(e) => setFilterPrice({ ...filterPrice, to: e.target.value })} style={{ opacity: "1", position: "relative", display: "block", border: "1px solid grey", left: "8%" }} type="number" name="" id="" />

                                        <button onClick={filterPriceHandler} className="btn btn-success mx-auto mt-3" style={{maxWidth:"90"}}>Search</button>

                                    </div>
                                </section>
                            </div>

                            <div className="col-2  col-md-12 p-0 mb-2" style={{ height: "max-content" }}>
                                <section className="panel mx-auto mt-0 py-2" style={{ width: "90%", background: "white", borderRadius: "6px" }}>
                                    <header onClick={(e) => setToggleFilters(toggleFilters !== "Filter" ? e.currentTarget.innerText : null)} className="panel-heading m-0 p-0" style={{ borderRadius: "6px", fontWeight: "500", fontSize: "80%", display: "flex", justifyContent: "center", alignItems: "center", gap: "3px" }}>
                                        <FunnelFill size="10px" />  Filter
                                    </header>
                                    <div className={`panel-body  bottom-0 start-0 p-0 py-2 m-0 ${toggleFilters === "Filter" ? "d-block" : "d-none"} d-md-block`} style={{ left: "0", minHeight: "max-content", zIndex: "3", height: "max-content", width: "100%", background: "white" }}>
                                        {/* <form role="form product-form"> */}
                                        <div>

                                            <div className="form-group mt-2">
                                                <label style={{ fontWeight: "500", width: "90%", margin: "0 auto", textAlign: "left" }}>Brand</label>
                                                {/* <select onChange={(e) => setSearch_options({ ...search_options, brand: e.target.value })} className="form-control hasCustomSelect mx-auto" style={{ appearance: "menulist-button", width: "90%", height: "34px", fontSize: "12px" }}> */}
                                                <select onChange={(e) => setFilterValues({ ...filterValues, brand: e.target.value })} className="form-control hasCustomSelect mx-auto" style={{ appearance: "menulist-button", width: "90%", height: "34px", fontSize: "12px" }}>

                                                    {
                                                        localStorage.getItem("brands") && JSON.parse(localStorage.getItem("brands")).map((pv, pi) => {
                                                            return <option key={pi} value={pv}>{pv.length > 0 ? pv : "All"}</option>
                                                        })
                                                    }
                                                </select>
                                                
                                            </div>
                                            <div className="form-group mt-2">
                                                <label style={{ fontWeight: "500", width: "90%", margin: "0 auto", textAlign: "left" }}>Color</label>
                                                {/* <select onChange={(e) => setSearch_options({ ...search_options, color: e.target.value })} className="form-control hasCustomSelect mx-auto" style={{ appearance: "menulist-button", width: "90%", height: "34px", fontSize: "12px" }}> */}
                                                <select onChange={(e) => setFilterValues({ ...filterValues, color: e.target.value })} className="form-control hasCustomSelect mx-auto" style={{ appearance: "menulist-button", width: "90%", height: "34px", fontSize: "12px" }}>

                                                    {
                                                        localStorage.getItem("colors") && JSON.parse(localStorage.getItem("colors")).map((pcv, pci) => {
                                                            return <option key={pci} value={pcv}>{pcv.length > 0 ? pcv : "All"}</option>
                                                        })
                                                    }
                                                </select>
                                            </div>
                                            <div className="form-group mt-2">
                                                <label style={{ fontWeight: "500", width: "90%", margin: "0 auto", textAlign: "left" }}>Size</label>
                                                {/* <select onChange={(e) => setSearch_options({ ...search_options, size: e.target.value })} className="form-control hasCustomSelect mx-auto" style={{ appearance: "menulist-button", width: "90%", height: "34px", fontSize: "12px" }}> */}
                                                <select onChange={(e) => setFilterValues({ ...filterValues, size: e.target.value })} className="form-control hasCustomSelect mx-auto" style={{ appearance: "menulist-button", width: "90%", height: "34px", fontSize: "12px" }}>

                                                    {
                                                        localStorage.getItem("sizes") && JSON.parse(localStorage.getItem("sizes")).map((psv, psi) => {
                                                            return <option key={psi} value={psv}>{psv.length > 0 ? psv : "All"}</option>
                                                        })
                                                    }

                                                </select>
                                            </div>
                                            <button onClick={ submitFilter } className="btn btn-primary mt-2 mx-auto" style={{ width: "90%" }}>Filter</button>
                                        </div>

                                    </div>
                                </section>

                            </div>

                            <div className="col-2  col-md-12 p-0 mb-2" style={{ height: "max-content" }}>
                                <section className="panel mt-0 bg-white p-0 mx-auto" style={{ height: "max-content", width: "90%", minHeight: "max-content", display: "flex", flexDirection: "column", justifyContent: "flex-start", borderRadius: "6px" }}>
                                    <header onClick={(e) => setToggleFilters(toggleFilters !== "Category" ? e.currentTarget.innerText : null)} className="panel-heading p-2" style={{ borderRadius: "6px", fontWeight: "500", textAlign: "center", fontSize: "80%", display: "flex", justifyContent: "center", alignItems: "center", gap: "6px" }}>
                                        <FilterRight size="12px" />  Sort
                                    </header>
                                
                                </section>
                            </div>
                        </div>

                    </div>

                    <div className="col-md-9 col-lg-10 position-relative px-0" style={{ maxWidth: "100vw" }}>

                    <section className="panel bg-light bg-white py-2 px-1" style={{ height: "8vh", display: "flex", alignItems: "center", justifyContent: "flex-end", borderRadius: "4px", minWidth:"100%", maxWidth:"100%" }} >
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

                        <div className="row product-list" style={{ minHeight: "75vh", padding:"0 5px 0 7px" }}>
                            {product.success && product.products.map((v, i) => {

                                return <div className="col col-6 col-md-4 col-lg-3 p-0 p-1" key={v._id} >
                                    <section className="panel p-0 p-1">
                                        <div className="pro-img-box p-0">
                                            <NavLink to={`details/${v._id}`}>
                                                <img src={v.images[0].url} alt={v.images[0].url} />
                                            </NavLink>
                                            {cart.filter(cv => cv._id === v._id)[0] !== undefined ?
                                                <button onClick={() => dispatch(Remove_from_cart_action(v._id, -1))} className="adtocart" style={{ display: "flex", justifyContent: "center", alignItems: "center", background: "green" }}>
                                                    <CartCheck style={{ marginBottom: "2px", fontSize: "120%" }} />
                                                </button> :
                                                <button onClick={() => dispatch(Add_to_cart_action(v._id, 1)) } className="adtocart" style={{ display: "flex", justifyContent: "center", alignItems: "center", background: "red" }}>
                                                    <CartPlus style={{ marginBottom: "2px", fontSize: "120%" }} />
                                                </button>
                                            }
                                        </div>

                                        <div className="panel-body position-relative text-center py-2">
                                            <h4 className="py-1 pt-2 text-center m-0 mt-2">
                                                <span className="pro-title w-100 text-center p-0 m-0" style={{ maxWidth: "100%", display: "-webkit-box", overflow: "hidden", WebkitLineClamp: "1", WebkitBoxOrient: "vertical" }}>
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