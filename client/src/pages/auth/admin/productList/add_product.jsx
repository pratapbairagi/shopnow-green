import {X, XLg } from "react-bootstrap-icons";
import Input from "../../../../asset/atoms";




const Add_product = ({ createProduct_handler_, close_add_product_form_handler, productChange, createNew_product_submit, setProductChange }) => {


    return (

        <div id="add_product_form" className="add_product_form container-fluid" style={{ width: "100%", height: "100%", flexWrap: "wrap", background: "white", position: "absolute", top: "0", left: "0", zIndex: "1", display: "none", backgroundColor: "white" }}>

            {/* close add from button */}
            <button onClick={close_add_product_form_handler} style={{ minWidth: "2rem", width: "max-content", aspectRatio: "1/1", fontSize: "calc(6px + 0.390625vw)", border: "none", borderRadius: "3px", color: "grey", position: "absolute", top: "0", right: "6px" }}>
                <XLg />
            </button>

            <div className="row p-0" style={{ alignContent: "flex-start", marginTop: "2rem", rowGap:"5px" }}>
                <div className="col col-12 col-md-6" style={{ height: "max-content", display: "flex", flexDirection: "column" }}>
                    <label className="m-0" style={{ marginTop: "6px", fontSize: "calc(8px + 0.390625vw)", width: "100%", textAlign: "left" }} htmlFor="title">Title</label>
                    <Input type="text" name="title" id="title" fun={createProduct_handler_} placeholder="Product Title" defaultValue={productChange.title} css={{ border: "2px solid rgb(243, 238, 238)", outline: "none", color: "grey", padding: "4px 8px", fontSize: "calc(8px + 0.390625vw)", width: "100%" }} />
                </div>

                <div className="col col-12 col-md-6" style={{ border: "1px solid white", height: "max-content", display: "flex", flexDirection: "column" }}>
                    <label className="m-0" style={{ marginTop: "6px", fontSize: "calc(8px + 0.390625vw)", width: "100%", textAlign: "left" }} htmlFor="category">Category</label>
                    <Input type="text" name="category" id="category" fun={createProduct_handler_} placeholder="Product category" defaultValue={productChange.category} css={{ border: "2px solid rgb(243, 238, 238)", outline: "none", color: "grey", padding: "4px 8px", fontSize: "calc(8px + 0.390625vw)", width: "100%" }} />
                </div>

                <div className="col col-12 col-md-6" style={{ border: "1px solid white", height: "max-content", display: "flex", flexDirection: "column" }}>
                    <label className="m-0" style={{ marginTop: "6px", fontSize: "calc(8px + 0.390625vw)", width: "100%", textAlign: "left" }} htmlFor="description">Description</label>
                    <Input type="text" name="description" id="description" fun={createProduct_handler_} placeholder="Product Description" defaultValue={productChange.description} css={{ border: "2px solid rgb(243, 238, 238)", outline: "none", color: "grey", padding: "4px 8px", fontSize: "calc(8px + 0.390625vw)", width: "100%" }} />
                </div>

                <div className="col col-12 col-md-6" style={{ border: "1px solid white", height: "max-content", display: "flex", flexWrap: "wrap" }}>
                    <label className="m-0" style={{ marginTop: "6px", fontSize: "calc(8px + 0.390625vw)", width: "100%", textAlign: "left" }} htmlFor="images">Image (max 3 images allowed)</label>
                    <Input type="file" multi={true} name="images" id="images" fun={createProduct_handler_} placeholder="Product image" defaultValue={""} css={{ border: "2px solid rgb(243, 238, 238)", outline: "none", color: "grey", padding: "4px 8px", fontSize: "calc(8px + 0.390625vw)", width: "48%" }} />

                    <div className="images_upload" style={{ width: "48%", maxWidth: "50%", overflow: "scroll", gap: "2px", display: "flex", justifyContent: "flex-end" }}>
                        {productChange.images.length > 0 && productChange.images.map((im, ind) => {
                            return (<img key={ind} style={{ width: "2rem", height: "2rem", placeSelf: "flex-end", border: "1px solid green", display: "block" }} src={im.url} alt={im.url} />)
                        })}
                    </div>


                </div>


                <div className="col col-12 col-md-6" style={{ border: "1px solid white", height: "max-content", display: "flex", flexDirection: "column" }}>
                    <label className="m-0" style={{ marginTop: "6px", fontSize: "calc(8px + 0.390625vw)", width: "100%", textAlign: "left" }} htmlFor="price">Price</label>
                    <Input type="number" name="price" id="price" fun={createProduct_handler_} placeholder="Product price" defaultValue={productChange.price} css={{ border: "2px solid rgb(243, 238, 238)", outline: "none", color: "grey", padding: "4px 8px", fontSize: "calc(8px + 0.390625vw)", width: "100%" }} />
                </div>

                <div className="col col-12 col-md-6" style={{ border: "1px solid white", height: "max-content", display: "flex", flexDirection: "column" }}>
                    <label className="m-0" style={{ marginTop: "6px", fontSize: "calc(8px + 0.390625vw)", width: "100%", textAlign: "left" }} htmlFor="price">Brand</label>
                    <Input type="text" name="brand" id="brand" fun={createProduct_handler_} placeholder="Product Brand" defaultValue={productChange.brand} css={{ border: "2px solid rgb(243, 238, 238)", outline: "none", color: "grey", padding: "4px 8px", fontSize: "calc(8px + 0.390625vw)", width: "100%" }} />
                </div>
                {/* { productChange.color?.map((v,i)=> <input key={i} onChange={(e)=> { 
                    setProductChange({...productChange })
                 } } onKeyUp={(e)=> {   e.key === "Enter" &&   setProductChange({
                    ...productChange,
                    color : [...productChange.color , { type : "text", value : e.target.value , id : i+1}]
                });
                
                 }} defaultValue={``} />) } */}

                <div className="col col-12 col-md-6" id="colorInputs" style={{ height: "max-content", display: "flex", flexDirection: "column" }}>
                    <label className="m-0" style={{ marginTop: "6px", fontSize: "calc(8px + 0.390625vw)", width: "100%", textAlign: "left" }} htmlFor="price">Color {productChange.color.length !== 0 && ": Enter space button to confirm color"}</label>
                    <div style={{ width: "100%", maxWidth:"100%", display: "flex", gap: "4px", margin: "4px 0", overflowX: "auto" }}>
                        {productChange.color.map((v, i) => {
                            return <div key={i} style={{display:"flex", width:"max-content", gap:"2px", maxWidth:"100%"}}>
                                <input style={{ width: "fit-content", maxWidth: "60px", border: "1px solid whitesmoke", padding: "1px 3px", outline:"none", fontSize: "80%" }} key={i} type="text" onChange={(e) => {
                                    setProductChange(
                                        {
                                            ...productChange
                                        }
                                    )
                                }}
                                onKeyUp={ (e)=> {   
                                    e.keyCode === 32 &&   
                                    setProductChange({
                                    ...productChange, 
                                    color : [...productChange.color , { value_type : "text", value : e.target.value , id : i+2}]
                                })

                                 e.currentTarget.style.border = `1px solid ${e.target.value}`
                                 e.currentTarget.style.color = `grey`
                                //  e.currentTarget.style.backgroundColor = `${e.target.value=== "white" && "grey"}`
                                 }
                                }
                                name="color" id="color" placeholder={`color ${v.id}`} defaultValue={``} css={{ border: "2px solid rgb(243, 238, 238)", outline: "none", color: "grey", padding: "4px 8px", fontSize: "calc(8px + 0.390625vw)", width: "100%" }} />
                                <div className="btn btn-danger p-0 px-1 rounded-0" onClick={(e)=> setProductChange(
                                    {
                                        ...productChange,
                                        color: productChange.color.filter((dcv,dci)=> dci !== i)
                                    }
                                ) } ><X style={{fill:"white", fontSize:"100%", padding:"0"}} />
                                </div>
                            </div>

                        })

                        }
                    </div>
                    { productChange.color.length === 0 && <button onClick={() => {
                        return setProductChange({
                            ...productChange,
                            color: [...productChange.color, { type: "text", value: "", id: productChange.color.length+1 }]
                        })
                    }}>Color + </button> 
                    }
                </div>

                <div className="col col-12 col-md-6" style={{ border: "1px solid white", height: "max-content", display: "flex", flexDirection: "column" }}>
                    <label className="m-0" style={{ marginTop: "6px", fontSize: "calc(8px + 0.390625vw)", width: "100%", textAlign: "left" }} htmlFor="price">Size  {productChange.size.length !== 0 && ": Enter space button to confirm size"}</label>
                    {/* <Input type="number" name="size" id="size" fun={createProduct_handler_} placeholder="Product Size" defaultValue={productChange.size} css={{ border: "2px solid rgb(243, 238, 238)", outline: "none", color: "grey", padding: "4px 8px", fontSize: "calc(8px + 0.390625vw)", width: "100%" }} /> */}
                    <div style={{ width: "100%", maxWidth:"100%", display: "flex", gap: "4px", margin: "4px 0", overflowX: "auto" }}>
                        {productChange.size.map((v, i) => {
                            return <div key={i} style={{display:"flex", width:"max-content", gap:"2px", maxWidth:"100%"}}>
                                <input style={{ width: "fit-content", maxWidth: "60px", border: "1px solid whitesmoke", padding: "1px 3px", outline:"none", fontSize: "80%" }} key={i} type="text" onChange={(e) => {
                                    setProductChange(
                                        {
                                            ...productChange
                                        }
                                    )
                                }}
                                onKeyUp={ (e)=> {   
                                    e.keyCode === 32 &&   
                                    setProductChange({
                                    ...productChange, 
                                    size : [...productChange.size , { value_type : "number", value : e.target.value , id : i+2}]
                                })

                                 e.currentTarget.style.border = `2px solid grey`
                                 e.currentTarget.style.color = `green`
                                 }
                                }
                                name="color" id="color" placeholder={`size ${v.id}`} defaultValue={``} css={{ border: "2px solid rgb(243, 238, 238)", outline: "none", color: "grey", padding: "4px 8px", fontSize: "calc(8px + 0.390625vw)", width: "100%" }} />
                                <div className="btn btn-danger p-0 px-1 rounded-0" onClick={(e)=> setProductChange(
                                    {
                                        ...productChange,
                                        size: productChange.size.filter((dcv,dci)=> dci !== i)
                                    }
                                ) } ><X style={{fill:"white", fontSize:"100%", padding:"0"}} />
                                </div>
                            </div>
                        })
                        }
                    </div>
                    { productChange.size.length === 0 && <button onClick={() => {
                        return setProductChange({
                            ...productChange,
                            size: [...productChange.size, { type: "number", value: "", id: productChange.size.length+1 }]
                        })
                    }}>size + </button> 
                    
                    }
                </div>

                <div className="col col-6 my-2" style={{ border: "1px solid white", height: "max-content", display: "flex", flexDirection: "column" }}>
                    <label className="m-0" style={{ marginTop: "6px", fontSize: "calc(8px + 0.390625vw)", width: "100%", textAlign: "left" }} htmlFor="stock">Gender</label>
                    {/* <Input type="number" name="size" id="size" fun={updateProduct_handler_} placeholder="Product Size" defaultValue={product.size} css={{ border: "2px solid rgb(243, 238, 238)", outline: "none", color: "grey", padding: "4px 8px", fontSize: "calc(8px + 0.390625vw)", width: "100%" }} /> */}
                    <select name="gender" defaultValue={productChange.gender} onChange={(e)=> setProductChange( {...productChange, gender : e.target.value} ) } >
                        <option value="">Select Option</option>
                        <option value="male">Male</option>
                        <option value="female">Female</option>
                    </select>
                </div>

                <div className="col " style={{ width: "50%", border: "1px solid white", height: "max-content", display: "flex", flexDirection: "column" }}>
                    <label className="m-0" style={{ marginTop: "6px", fontSize: "calc(8px + 0.390625vw)", width: "100%", textAlign: "left" }} htmlFor="stock">Stock</label>
                    <Input type="number" name="stock" id="stock" fun={createProduct_handler_} placeholder="Product stock" defaultValue={productChange.stock} css={{ border: "2px solid rgb(243, 238, 238)", outline: "none", color: "grey", padding: "4px 8px", fontSize: "calc(8px + 0.390625vw)", width: "100%" }} />
                </div>

                <label className="m-0" style={{ marginTop: "6px", fontSize: "calc(8px + 0.390625vw)", width: "100%", textAlign: "left" }} htmlFor="offer">Offer Available ?</label>

                <div className="col col-6" style={{ width: "100%", height: "2rem", display: "flex", alignItems: "center", justifyContent: "flext-start", paddingLeft: "13px" }}>
                    <Input type="number" name="offer" id="offer" fun={createProduct_handler_} placeholder="Product Offer Percentage" defaultValue={productChange.offer.percentage} css={{ border: "2px solid rgb(243, 238, 238)", outline: "none", color: "grey", padding: "4px 8px", fontSize: "calc(8px + 0.390625vw)" }} />
                </div>

            </div>

            <button id="add_product_btn" onClick={createNew_product_submit} style={{ width: "100%", height: "2.5rem", border: "none", borderRadius: "3px", fontWeight: "600", color: "grey", marginTop: "16px" }}>Add Product</button>

        </div>
    )
}

export default Add_product