import { useNavigate } from "react-router-dom";
import "./brands.scss";

const Brands = ({productsFilter}) => {
    const navigate = useNavigate()
    
    return (
        <div className="p-0 m-0 w-100 bg-light mt-2">
            <h5 className="py-1 px-2" style={{marginLeft:"auto", borderTopRadius:"4px", textAlign:"center", width:"max-content", color:"grey", background:"rgb(193, 191, 191)"}}>Our Brands</h5>
        <div className="container brand_container m-0 px-2" style={{borderTop:"1px dashed white", background:"rgb(193, 191, 191)"}}>
        {/* <div className="card"> */}
            
            { productsFilter !== null  && productsFilter.map((v,i)=>{ 
           return <div key={i} onClick={()=> navigate(`/${v.brand}`) } className="face face1 m-0" style={{border:"1px solid rgb(238, 236, 236)", height:"max-content", padding:"6px 10px", cursor:"pointer"}}>
                <div className="content">
                    {/* <img style={{ maxHeight:"50px"}} src="https://brandongaille.com/wp-content/uploads/2013/06/H-and-M-Company-Logo-Image.jpg" alt="brand 1" /> */}
                    <h6 className="p-0 m-0 text-muted" style={{width:"max-content", whiteSpace:"nowrap", textAlign:"center", fontSize:"80%"}}>{v.brand}</h6>
                </div>
            </div> })
            }

            {/* <div className="face face2">
                <div className="content">
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cum cumque minus iste veritatis provident at.</p>
                        <a href="#h&m">Read More</a>
                </div>
            </div> */}
        {/* </div> */}
        
    </div>
    </div>
    )
}
export default Brands