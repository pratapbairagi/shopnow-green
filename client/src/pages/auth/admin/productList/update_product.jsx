import { X, XLg } from "react-bootstrap-icons";
import Input from "../../../../asset/atoms";

const Update_product = ({ updateProduct_handler_, close_add_product_form_handler, product, createNew_product_submit, setProduct }) => {
    return (

        <div id="add_product_form" className="add_product_form container-fluid" style={{ width: "100%", height: "100%", flexWrap: "wrap", background: "white", position: "absolute", top: "0", left: "0", zIndex: "1", display: "none" }}>

            {/* close add from button */}
            <button onClick={close_add_product_form_handler} style={{ minWidth: "2rem", width: "max-content", aspectRatio: "1/1", fontSize: "calc(6px + 0.390625vw)", border: "none", borderRadius: "3px", color: "grey", position: "absolute", top: "0", right: "6px" }}>
                <XLg />
            </button>

            <div className="row p-0" style={{ alignContent: "flex-start", marginTop: "2rem" }}>
                <div className="col col-12 col-md-6" style={{ height: "max-content", display: "flex", flexDirection: "column" }}>
                    <label className="m-0" style={{ marginTop: "6px", fontSize: "calc(8px + 0.390625vw)", width: "100%", textAlign: "left" }} htmlFor="title">Title</label>
                    <Input type="text" name="title" id="title" fun={updateProduct_handler_} placeholder="Product Title" defaultValue={product.title} css={{ border: "2px solid rgb(243, 238, 238)", outline: "none", color: "grey", padding: "4px 8px", fontSize: "calc(8px + 0.390625vw)", width: "100%" }} />
                </div>

                <div className="col col-12 col-md-6" style={{ border: "1px solid white", height: "max-content", display: "flex", flexDirection: "column" }}>
                    <label className="m-0" style={{ marginTop: "6px", fontSize: "calc(8px + 0.390625vw)", width: "100%", textAlign: "left" }} htmlFor="category">Category</label>
                    <Input type="text" name="category" id="category" fun={updateProduct_handler_} placeholder="Product category" defaultValue={product.category} css={{ border: "2px solid rgb(243, 238, 238)", outline: "none", color: "grey", padding: "4px 8px", fontSize: "calc(8px + 0.390625vw)", width: "100%" }} />
                </div>

                <div className="col col-12 col-md-6" style={{ border: "1px solid white", height: "max-content", display: "flex", flexDirection: "column" }}>
                    <label className="m-0" style={{ marginTop: "6px", fontSize: "calc(8px + 0.390625vw)", width: "100%", textAlign: "left" }} htmlFor="description">Description</label>
                    <div className="d-flex" style={{ flexWrap: "wrap", gap: "4px" }}>
                    <textarea type="text" name="features" id="features" onChange={(e)=> setProduct({...product, description : {...product.description, features : e.target.value }})} placeholder="Product features" defaultValue={product.description.features} style={{ border: "2px solid rgb(243, 238, 238)", outline: "none", color: "grey", padding: "4px 8px", fontSize: "calc(8px + 0.390625vw)", flex: "1 0 160px", background: "white" }} />
                    <textarea type="text" name="warranty" id="warranty" onChange={(e)=> setProduct({...product, description : {...product.description, warranty : e.target.value }})} placeholder="Product warranty" defaultValue={product.description.warranty} style={{ border: "2px solid rgb(243, 238, 238)", outline: "none", color: "grey", padding: "4px 8px", fontSize: "calc(8px + 0.390625vw)", flex: "1 0 160px", background: "white" }} />
                    <textarea type="text" name="returnPolicy" id="returnPolicy" onChange={(e)=> setProduct({...product, description : {...product.description, returnPolicy : e.target.value }})} placeholder="Product returnPolicy" defaultValue={product.description.returnPolicy} style={{ border: "2px solid rgb(243, 238, 238)", outline: "none", color: "grey", padding: "4px 8px", fontSize: "calc(8px + 0.390625vw)", flex: "1 0 160px", background: "white" }} />
                    <textarea type="text" name="sellerAndContact" id="sellerAndContact" onChange={(e)=> setProduct({...product, description : {...product.description, sellerAndContact : e.target.value }})} placeholder="Product sellerAndContact" defaultValue={product.description.sellerAndContact} style={{ border: "2px solid rgb(243, 238, 238)", outline: "none", color: "grey", padding: "4px 8px", fontSize: "calc(8px + 0.390625vw)", flex: "1 0 160px", background: "white" }} />
                    <textarea type="text" name="other" id="other" onChange={(e)=> setProduct({...product, description : {...product.description, other : e.target.value }})} placeholder="Product other" defaultValue={product.description.other} style={{ border: "2px solid rgb(243, 238, 238)", outline: "none", color: "grey", padding: "4px 8px", fontSize: "calc(8px + 0.390625vw)", flex: "1 0 160px", background: "white" }} />
                    </div>
                </div>

                <div className="col col-12 col-md-6" style={{ border: "1px solid white", height: "max-content", display: "flex", flexWrap: "wrap" }}>
                    <label className="m-0" style={{ marginTop: "6px", fontSize: "calc(8px + 0.390625vw)", width: "100%", textAlign: "left" }} htmlFor="images">Image</label>
                    <Input type="file" multi={true} name="images" id="images" fun={updateProduct_handler_} placeholder="Product image" defaultValue={""} css={{ border: "2px solid rgb(243, 238, 238)", outline: "none", color: "grey", padding: "4px 8px", fontSize: "calc(8px + 0.390625vw)", width: "48%" }} />
                    <div className="images_upload" style={{ width: "48%", maxWidth: "50%", overflow: "scroll", gap: "2px", display: "flex", justifyContent: "flex-end" }}>
                        {product.oldImage.length > 0 && product.images.map((im, ind) => {
                            return <img key={ind} style={{ width: "2rem", height: "2rem", placeSelf: "flex-end" }} src={im.url} alt="" />
                        })}
                    </div>

                </div>

                <div className="col col-6 " style={{ width: "50%", border: "1px solid white", height: "max-content", display: "flex", flexDirection: "column" }}>
                    <label className="m-0" style={{ marginTop: "6px", fontSize: "calc(8px + 0.390625vw)", width: "100%", textAlign: "left" }} htmlFor="price">Price</label>
                    {/* <div>{product.price}</div> */}
                    <Input type="number" name="price" id="price" fun={updateProduct_handler_} placeholder="Product price" defaultValue={product.price} css={{ border: "2px solid rgb(243, 238, 238)", outline: "none", color: "grey", padding: "4px 8px", fontSize: "calc(8px + 0.390625vw)", width: "100%" }} />
                </div>

                <div className="col col-6" style={{ width: "50%", border: "1px solid white", height: "max-content", display: "flex", flexDirection: "column" }}>
                    <label className="m-0" style={{ marginTop: "6px", fontSize: "calc(8px + 0.390625vw)", width: "100%", textAlign: "left" }} htmlFor="stock">Brand</label>
                    <Input type="text" name="brand" id="brand" fun={updateProduct_handler_} placeholder="Product Brand" defaultValue={product.brand} css={{ border: "2px solid rgb(243, 238, 238)", outline: "none", color: "grey", padding: "4px 8px", fontSize: "calc(8px + 0.390625vw)", width: "100%" }} />
                </div>

                {/* <div className="col my-2" style={{ width: "50%", minWidth: "70px", border: "1px solid white", height: "max-content", display: "flex", flexDirection: "column" }}>
                    <label className="m-0" style={{ marginTop: "6px", fontSize: "calc(8px + 0.390625vw)", width: "100%", textAlign: "left" }} htmlFor="stock">Color</label>
                    <Input type="color" name="color" id="color" fun={updateProduct_handler_} placeholder="Product Color" defaultValue={product.color} css={{ border: "2px solid rgb(243, 238, 238)", outline: "none", color: "grey", padding: "4px 8px", fontSize: "calc(8px + 0.390625vw)", width: "100%" }} />
                </div> */}

                <div className="col my-2" style={{ width: "50%", border: "1px solid white", height: "max-content", display: "flex", flexDirection: "column" }}>
                    <label className="m-0" style={{ marginTop: "6px", fontSize: "calc(8px + 0.390625vw)", width: "100%", textAlign: "left" }} htmlFor="stock">Gender</label>
                    {/* <Input type="number" name="size" id="size" fun={updateProduct_handler_} placeholder="Product Size" defaultValue={product.size} css={{ border: "2px solid rgb(243, 238, 238)", outline: "none", color: "grey", padding: "4px 8px", fontSize: "calc(8px + 0.390625vw)", width: "100%" }} /> */}
                    <select defaultChecked="" name="gender" onChange={updateProduct_handler_} >
                        <option value="">All</option>
                        <option value="m">Male</option>
                        <option value="f">Female</option>
                    </select>
                </div>

                {/* <div className="col my-2" style={{ width: "50%", minWidth:"70px", border: "1px solid white", height: "max-content", display: "flex", flexDirection: "column" }}>
                <label className="m-0" style={{ marginTop: "6px", fontSize: "calc(8px + 0.390625vw)", width: "100%", textAlign: "left" }} htmlFor="stock">Size</label>
                <Input type="number" name="size" id="size" fun={updateProduct_handler_} placeholder="Product Size" defaultValue={product.size} css={{ border: "2px solid rgb(243, 238, 238)", outline: "none", color: "grey", padding: "4px 8px", fontSize: "calc(8px + 0.390625vw)", width: "100%" }} />
            </div> */}

                <div className="col col-12 col-md-6" id="colorInputs" style={{ height: "max-content", display: "flex", flexDirection: "column" }}>
                    <label className="m-0" style={{ marginTop: "6px", fontSize: "calc(8px + 0.390625vw)", width: "100%", textAlign: "left" }} htmlFor="price">Size {product.size.length !== 0 && ": Enter space button to confirm size"}</label>
                    <div style={{ width: "100%", maxWidth: "100%", display: "flex", gap: "4px", margin: "4px 0", overflowX: "auto" }}>
                        {product.size.map((v, i) => {
                            return <div key={i} style={{ display: "flex", width: "max-content", gap: "2px", maxWidth: "100%" }}>
                                <input style={{ width: "fit-content", maxWidth: "60px", border: "1px solid whitesmoke", padding: "1px 3px", outline: "none", fontSize: "80%" }} key={i} type="text" onChange={(e) => {
                                    setProduct(
                                        {
                                            ...product
                                        }
                                    )
                                }}
                                    onKeyUp={(e) => {
                                        e.keyCode === 32 &&
                                            setProduct({
                                                ...product,
                                                size: [...product.size, { value_type: "text", value: e.target.value, id: i + 2 }]
                                            })

                                        e.currentTarget.style.border = `1px solid ${e.target.value}`
                                        e.currentTarget.style.color = `grey`
                                        //  e.currentTarget.style.backgroundColor = `${e.target.value=== "white" && "grey"}`
                                    }
                                    }
                                    name="size" id="color" placeholder={`color ${v.id}`} defaultValue={v.value} css={{ border: "2px solid rgb(243, 238, 238)", outline: "none", color: "grey", padding: "4px 8px", fontSize: "calc(8px + 0.390625vw)", width: "100%" }} />
                                <div className="btn btn-danger p-0 px-1 rounded-0" onClick={(e) => setProduct(
                                    {
                                        ...product,
                                        size: product.size.filter((dcv, dci) => dci !== i)
                                    }
                                
                                )} >
                                    <X style={{ fill: "white", fontSize: "100%", padding: "0" }} />
                                </div>
                            </div>

                        })

                        }
                    </div>
                    {product.size.length === 0 && <button onClick={() => {
                        return setProduct({
                            ...product,
                            size: [...product.size, { type: "text", value: "", id: product.size.length + 1 }]
                        })
                    }}>size + </button>
                    }
                </div>

                <div className="col my-2" style={{ width: "50%", minWidth: "70px", border: "1px solid white", height: "max-content", display: "flex", flexDirection: "column" }}>
                    <label className="m-0" style={{ marginTop: "6px", fontSize: "calc(8px + 0.390625vw)", width: "100%", textAlign: "left" }} htmlFor="stock">Stock</label>
                    <Input type="number" name="stock" id="stock" fun={updateProduct_handler_} placeholder="Stock" defaultValue={product.stock} css={{ border: "2px solid rgb(243, 238, 238)", outline: "none", color: "grey", padding: "4px 8px", fontSize: "calc(8px + 0.390625vw)", width: "100%" }} />
                </div>

                <label className="m-0" style={{ marginTop: "6px", fontSize: "calc(8px + 0.390625vw)", width: "100%", textAlign: "left" }} htmlFor="offer">Offer Available ?</label>

                <div className="col col-6" style={{ width: "100%", height: "2rem", display: "flex", alignItems: "center", justifyContent: "flext-start", paddingLeft: "13px" }}>
                    <Input type="number" name="offer" id="offer" fun={updateProduct_handler_} placeholder="Product Offer Percentage" defaultValue={product.offer.percentage} css={{ border: "2px solid rgb(243, 238, 238)", outline: "none", color: "grey", padding: "4px 8px", fontSize: "calc(8px + 0.390625vw)" }} />
                </div>

            </div>
            <button id="add_product_btn" onClick={createNew_product_submit} style={{ width: "100%", height: "2.5rem", border: "none", borderRadius: "3px", fontWeight: "600", color: "grey", marginTop: "16px" }}>Add Product</button>

        </div>
    )
}

export default Update_product