import { useNavigate } from "react-router-dom";
import "./brands.scss";

const Brands = ({productsFilters}) => {
    const navigate = useNavigate()

    console.log(productsFilters)
    
    return (
        <div className="p-0 m-0 w-100 bg-light py-2">
            <h5 className="mt-2" style={{margin:"auto", marginTop:"10px", borderBottom:"2px solid rgb(238, 236, 236)", width:"max-content", color:"grey", fontSize:"80%"}}>Our Brands</h5>
        <div className="container brand_container mt-2 px-2" style={{background:"white"}}>
        {/* <div className="card"> */}
            
            { productsFilters !== null && productsFilters !== undefined && productsFilters.length > 0 && productsFilters.map((v,i)=>{ 
           return <div key={i} onClick={()=> navigate(`/${v}`) } className="face face1 m-0" style={{border:"1px solid rgb(238, 236, 236)", height:"max-content", padding:"6px 10px", cursor:"pointer"}}>
                <div className="content">
                    {/* <img style={{ maxHeight:"50px"}} src="https://brandongaille.com/wp-content/uploads/2013/06/H-and-M-Company-Logo-Image.jpg" alt="brand 1" /> */}
                    <h6 className="p-0 m-0 text-muted" style={{width:"max-content", whiteSpace:"nowrap", textAlign:"center", fontSize:"80%"}}>{v}</h6>
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