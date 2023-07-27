
// import MoreVertIcon from '@mui/icons-material/MoreVert';
import { NavLink } from 'react-router-dom';


const TrendingCard = ({ products }) => {

    return (

        <div className="" style={{ maxWidth: "max-content", minWidth:"180px", overFlow: "scroll" }}>
            {/* trending card */}
            <div className="col m-0" style={{ maxHeight: "300px"}}>
                <div className="card shadow-sm " style={{width:"min-content", minWidth:"175px", aspectRatio:"1/.91" }}>
                    <img style={{height:"100%"}} src={products.images[0]?.url} className="card-img-top" alt="..." />
                    <div className="card-body px-1 py-2" style={{ height:"100%"}}>
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
                    </div>
                </div>
            </div>


        </div>
    )
}

export default TrendingCard