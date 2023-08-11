import { useNavigate } from "react-router-dom"
import "./error404.css"
import error404 from "./pageNotFound.jpg"

const PageNotFound404 = () => {
    const navigate = useNavigate()
    return (
        <div className="container-fluid p-0 error404_container" style={{ display:"flex", flexDirection:"column", justifyContent:"center", alignItems:"center"}}>
            {/* <div style={{width:"100%", height:"auto", background}}>

            </div> */}
            <img style={{ maxHeight:"50vh"}} src={error404} alt="error_404" />
            <h1 className="" id="oops">Oops</h1>
            <p id="who">Who spilled the paint?</p>
            <p id="wrong">This is wrong. This page does no longer exist, or it never had. </p>
            <button onClick={()=> navigate("/")} class="homebutton mt-1">GO BACK HOME</button>

        </div>
    )
}

export default PageNotFound404