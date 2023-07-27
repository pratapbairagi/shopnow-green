
import "../home/recommended_sec/recommendedCard.scss"
import { NavLink } from 'react-router-dom';


const TrendingCard = ({ products }) => {

    return (

           <div className="product-card" style={{background:"white", border:"1px solid #edecec"}}>
            {/* trending card */}
            <div className="product-tumb" style={{background:"white", padding:"5px 5px 2px 5px"}}>
            <img style={{ width: "90%" }} src={products.images[0]?.url} alt={products.title} />
            </div>

                <div className="product-details" style={{height:"80%", padding:"5px 8px 8px 8px"}} >
                <div className="clearfix mb-1 d-flex flex-column" style={{width:"100%"}}>
                    <span title={products.title} className="product-catagory m-0 text-start" style={{width:"max-content", maxWidth:"94%", display:"-webkit-box", overflow:"hidden", WebkitLineClamp:"1", WebkitBoxOrient:"vertical"}}>{products.title}</span>
                    <strong className="float-end price-hp mt-1" style={{ fontSize: "70%", width:"max-content", alignSelf:"end" }}>$ {products.price}/-</strong>
                </div>

                <div className="product-links">

                <h5 className="card-title p-0 px-1 m-0 text-center" style={{ fontSize: "70%", width:"100%", display:"-webkit-box", overflow:"hidden", WebkitLineClamp:"2", WebkitBoxOrient:"vertical" }}>{products.description}</h5>

						<NavLink style={{marginRight:"3px", cursor:"pointer"}} to={`/details/${products._id}`}>
                        <div className="text-center" style={{marginTop:"8px"}}>
                            <button className="btn btn-outline-secondary btn-sm" style={{fontSize:"70%"}}>Veiw Details</button>
                        </div>
						</NavLink>

						
					</div>

                    {/* <div className="card-body px-1 py-2" style={{ height:"100%"}}>
                        <div className="clearfix mb-1 d-flex flex-column" style={{width:"100%"}}>
                            <span className=" float-start badge rounded-pill bg-primary" style={{width:"max-content", fontSize:"70%"}}>{products.title}</span>
                            <span className="float-end price-hp mt-1" style={{ fontSize: "70%", width:"max-content", alignSelf:"end" }}>$ {products.price}/-</span>
                        </div>
                        <h5 className="card-title px-0" style={{ fontSize: "80%", display:"-webkit-box", overflow:"hidden", WebkitLineClamp:"3", WebkitBoxOrient:"vertical" }}>{products.description}</h5>
                        <NavLink to={`/details/${products._id}`}>
                        <div className="text-center" style={{marginTop:"14px"}}>
                            <span href="#" className="btn btn-warning px-2 py-1" style={{fontSize:"70%"}}>Veiw Details</span>
                        </div>
                        </NavLink>
                    </div> */}
                </div>
            


        </div>


        // <div className="" style={{ maxWidth: "max-content", minWidth:"180px", overFlow: "scroll" }}>
        //     {/* trending card */}
        //     <div className="col m-0" style={{ maxHeight: "300px"}}>
        //         <div className="card shadow-sm " style={{width:"min-content", minWidth:"175px", aspectRatio:"1/.91" }}>
        //             <img style={{height:"100%"}} src={products.images[0]?.url} className="card-img-top" alt="..." />
        //             <div className="card-body px-1 py-2" style={{ height:"100%"}}>
        //                 <div className="clearfix mb-1 d-flex flex-column" style={{width:"100%"}}>
        //                     <span className=" float-start badge rounded-pill bg-primary" style={{width:"max-content", fontSize:"70%"}}>{products.title}</span>
        //                     <span className="float-end price-hp mt-1" style={{ fontSize: "70%", width:"max-content", alignSelf:"end" }}>$ {products.price}/-</span>
        //                 </div>
        //                 <h5 className="card-title px-0" style={{ fontSize: "80%", display:"-webkit-box", overflow:"hidden", WebkitLineClamp:"3", WebkitBoxOrient:"vertical" }}>{products.description}</h5>
        //                 <NavLink to={`/details/${products._id}`}>
        //                 <div className="text-center" style={{marginTop:"14px"}}>
        //                     <span href="#" className="btn btn-warning px-2 py-1" style={{fontSize:"70%"}}>Veiw Details</span>
        //                 </div>
        //                 </NavLink>
        //             </div>
        //         </div>
        //     </div>


        // </div>
    )
}

export default TrendingCard