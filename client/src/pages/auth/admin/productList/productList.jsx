import { PencilSquare, Trash3, XLg } from "react-bootstrap-icons";
// import Pagination from '@mui/material/Pagination';
// import PaginationItem from '@mui/material/PaginationItem';
import Stack from '@mui/material/Stack';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { clear_success, create_product_action, delete_product_action, edit_product_action, get_all_products_action } from "../../../../redux/product/product_actions";
import Spinner from "../../../../components/spinner/spinner";
import NotificationToaster from "../../../../components/notificationToaster/notificationToaster";
import Add_product from "./add_product";
import ProductNotificationRoaster from "../../../../components/product_notification_toaster/productNotificationToaster";
import Update_product from "./update_product";
import { Pagination } from "antd";

const ProductList = ({search_options, setSearch_options}) => {

    const products = useSelector(state => state.product);
    const dispatch = useDispatch();

    // 
    const productCheck = () => {
            dispatch(get_all_products_action(search_options.name, search_options.category, search_options.price, search_options.brand, search_options.color, search_options.size, search_options.gender, search_options.currentpage, search_options.rating, search_options.date, search_options.pricesort))
    }

    useEffect(()=>{
        productCheck()
    },[search_options])
    // 

    let [product, setProduct] = useState({
        title: "",
        category: "",
        // description: "",
        description: {},
        images: [],
        stock: "",
        price: 0,
        brand: "",
        color: [
            {
                value_type: "text",
                value: "",
                id: 1
            }
        ],
        size: [
            {
                value_type: "number",
                value: "",
                id: 1
            }
        ],
        gender: "",
        offer: 0,
        id: "",
        oldImage: [],
        newImage: []
    });


    // onchange update
    const updateProduct_handler_ = (e) => {

        const { name, value } = e.target;

        if (name !== "images") {
            setProduct({ ...product, [name]: value })
        } else {

            const files = Array.from(e.target.files);
            files.forEach(element => {
                const reader = new FileReader();

                reader.onload = () => {
                    if (reader.DONE) {
                        setProduct({ ...product, newImage: product.newImage.push( { url: reader.result } ) });

                        setProduct({ ...product, images: [...product.images, { url: reader.result }] });

                    }

                }
                reader.readAsDataURL(element)
            });
        }

    }

    // onchange create
    const createProduct_handler_ = (e) => {

        const { name, value } = e.target;

        if (name !== "images") {
            setProduct({ ...product, [name]: value })
        } else {

            const files = Array.from(e.target.files);
            files.forEach(element => {
                const reader = new FileReader();

                reader.onload = () => {
                    if (reader.DONE) {
                        // setProduct({ ...product, newImage: product.newImage.push( { url: reader.result } ) });

                        setProduct({ ...product, images: [...product.images, { url: reader.result }] });

                    }

                }
                reader.readAsDataURL(element)
            });
        }

    }


    // createNew_product_submit
    const createNew_product_submit = () => {

        if (product.id) {
            dispatch(edit_product_action(product))
        }
        else {

            dispatch(create_product_action(product))
        }
    }

    // close add product add product from
    const close_add_product_form_handler = () => {
        document.getElementById("add_product_form").style.display = "none"
    }

    // delete prod handler
    const deleteProduct_handler = (id) => {
        dispatch(delete_product_action(id))
    }

    const [product_form, setProduct_form] = useState(null)

    // add product form handler
    const add_product_form_handler = (x) => {

        setProduct_form(x)
        document.getElementById("add_product_form").style.display = "flex"
        document.getElementById("add_product_btn").innerHTML = "Add Product";

        setProduct({
            ...product,
            title: "",
            category: "",
            price: 0,
            brand: "",
            color: [],
            size: [],
            gender: "",
            description: {},
            images: [],
            stock: 0,
            offer: 0,
            id: "",
            oldImage: [],
            newImage: []
        })
    };

    // update product : get product from handler
    const getProduct_handler = (pro) => {

        document.getElementById("add_product_form").style.display = "flex"
        document.getElementById("add_product_btn").innerHTML = "Edit Product";

        setProduct({
            ...product,
            title: pro.title,
            category: pro.category,
            price: pro.price,
            brand: pro.brand,
            color: pro.color,
            size: pro.size,
            gender: pro.gender,
            description: pro.description,
            images: pro.images,
            stock: pro.stock,
            offer: pro.offer.percentage,
            id: pro._id,
            oldImage: pro.images,
            newImage: []
        })
    }

    return (
        <div className="container-fluid d-block">
            {products.loading && <Spinner />}
            { window.location.pathname === "/profile" && localStorage.getItem("product_create_success") && <NotificationToaster state={products} />}
            {/* {products.success && window.location.pathname === "/profile" && } */}
            <h5 style={{ color: "grey", margin: "3px auto" }}>Products</h5>




            <div className="row p-0" style={{ overflowX: "scroll", maxHeight: "76vh", position: "relative" }}>
                {product_form === "add" && <Add_product createProduct_handler_={createProduct_handler_} close_add_product_form_handler={close_add_product_form_handler} productChange={product} createNew_product_submit={createNew_product_submit} setProductChange={setProduct} />}

               { product_form !== "add"  && < Update_product updateProduct_handler_={updateProduct_handler_} close_add_product_form_handler={close_add_product_form_handler} product={product} createNew_product_submit={createNew_product_submit} setProduct={setProduct} />}

                {/* column first : start */}
                <div className="col col-12 px-1 py-1" style={{ height: "100%", display: "flex", justifyContent: "center", alignItems: "start", minHeight: "70.5vh" }}>
                    <div className="table-responsive" style={{ overflow: "scroll", maxHeight: "70vh", position: "relative" }}>
                        <table className="table" style={{ fontSize: "calc(8px + 0.390635vw)" }}>
                            <thead style={{ position: "sticky", top: "0", color: "grey", background: "whitesmoke" }}>
                                <tr>
                                    <th style={{ width: "max-content", whiteSpace: "nowrap", fontSize: "calc(7px + 0.390625vw)" }}>S No.</th>
                                    <th style={{ width: "max-content", whiteSpace: "nowrap", fontSize: "calc(7px + 0.390625vw)" }}>ID</th>
                                    <th style={{ width: "max-content", whiteSpace: "nowrap", fontSize: "calc(7px + 0.390625vw)", minWidth:"70px" }}>Title</th>
                                    <th style={{ width: "max-content", whiteSpace: "nowrap", fontSize: "calc(7px + 0.390625vw)" }}>Price</th>
                                    <th style={{ width: "max-content", whiteSpace: "nowrap", fontSize: "calc(7px + 0.390625vw)" }} >Category</th>
                                    <th style={{ width: "max-content", whiteSpace: "nowrap", fontSize: "calc(7px + 0.390625vw)" }}>Description</th>
                                    <th style={{ width: "max-content", whiteSpace: "nowrap", fontSize: "calc(7px + 0.390625vw)" }}>Image</th>
                                    <th style={{ width: "max-content", whiteSpace: "nowrap", fontSize: "calc(7px + 0.390625vw)" }}>Stock</th>
                                    <th style={{ width: "max-content", whiteSpace: "nowrap", fontSize: "calc(7px + 0.390625vw)" }}>Ratings</th>
                                    <th style={{ width: "max-content", whiteSpace: "nowrap", fontSize: "calc(7px + 0.390625vw)" }}>Created</th>
                                    <th style={{ width: "max-content", whiteSpace: "nowrap", fontSize: "calc(7px + 0.390625vw)" }}>Seller</th>
                                    <th style={{ width: "max-content", whiteSpace: "nowrap", fontSize: "calc(7px + 0.390625vw)" }}>edit</th>
                                    <th style={{ width: "max-content", whiteSpace: "nowrap", fontSize: "calc(7px + 0.390625vw)" }}>del</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    // products.length > 0 &&
                                    products.products.map((v, i) => {
                                        return <tr key={v._id}>
                                            <td style={{ fontWeight: "300", fontSize: "calc(5px + 0.390625vw)", minWidth: "50px" }}>{i + 1}</td>
                                            <td style={{ fontWeight: "300", width: "max-content", maxWidth: "4rem", fontSize: "calc(5px + 0.390625vw)", overflow: "hidden", minHeight: "2rem", maxHeight: "2rem", height: "40px", minWidth: "50px" }}>
                                                <span style={{ minWidth: "50px", maxWidth: "100%", overflow: "hidden", WebkitLineClamp: "2", WebkitBoxOrient: "vertical", display: "-webkit-box" }} title={v._id}>{v._id}</span>
                                            </td>
                                            <td style={{ fontWeight: "300", maxWidth: "2rem", fontSize: "calc(5px + 0.390625vw)", minWidth: "70px" }}>{v.title}</td>
                                            <td style={{ fontWeight: "300", maxWidth: "2rem", fontSize: "calc(5px + 0.390625vw)", minWidth: "40px" }}>{v.price}</td>
                                            <td style={{ fontWeight: "300", maxWidth: "2rem", fontSize: "calc(5px + 0.390625vw)", minWidth: "50px" }}>{v.category}</td>
                                            <td style={{ fontWeight: "300", width: "max-content", maxWidth: "4rem", fontSize: "calc(5px + 0.390625vw)", overflow: "hidden", minHeight: "2rem", maxHeight: "2rem", height: "40px", minWidth: "50px" }}>
                                                <span style={{ minWidth: "50px", maxWidth: "100%", overflow: "hidden", WebkitLineClamp: "2", WebkitBoxOrient: "vertical", display: "-webkit-box" }} title={v.description.features}>{v.description.features} </span>
                                            </td>
                                            <td ><img src={v.images[0]?.url} style={{ width: "32px", height: "32px" }} alt="" /></td>
                                            <td style={{ fontWeight: "300", fontSize: "calc(5px + 0.390625vw)" }}>{v.stock}</td>
                                            <td style={{ fontWeight: "300", fontSize: "calc(5px + 0.390625vw)" }}>{v.ratings}</td>
                                            {/* <td style={{ fontWeight: "300", fontSize: "calc(5px + 0.390625vw)" }}>{v.seller}</td> */}
                                            <td style={{ fontWeight: "300", fontSize: "calc(5px + 0.390625vw)" }}>{v.createdAt}</td>
                                            <td style={{ fontWeight: "300", fontSize: "calc(5px + 0.390625vw)" }}>{v.createdAt}</td>
                                            <td><button onClick={() => getProduct_handler(v)} className="btn btn-sm btn-warning rounded-circle" style={{ fontWeight: "300", fontSize: "calc(5px + 0.390625vw)" }}> <PencilSquare color="white" /> </button></td>
                                            <td><button onClick={() => deleteProduct_handler(v._id)} className="btn btn-sm btn-danger" style={{ fontWeight: "300", fontSize: "calc(5px + 0.390625vw)" }}> <Trash3 color="white" /> </button></td>
                                        </tr>
                                    })
                                }
                            </tbody>

                        </table>
                        <Pagination className="p-0 m-0 mx-auto" style={{ zIndex: "6" }} simple defaultCurrent={search_options.currentpage} onChange={(e) => setSearch_options({ ...search_options, currentpage: e })} pageSize={10} total={products.totalProductsWithNoLimit} />
                    </div>

                </div>
                {/* column first : end */}
                <button onClick={() => add_product_form_handler("add")} style={{ color: "whitesmoke", background: "var(--dark-red)" }}>Add Product</button>
            </div>
        </div>
    )
}

export default ProductList