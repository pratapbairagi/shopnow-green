import { CheckCircle } from "react-bootstrap-icons";
import {useNavigate} from "react-router-dom"



const LoginSuccess = () => {
    const navigate = useNavigate()
    return (<div className="container-fluid" style={{height:"92vh", display:"grid", placeItems:"center", background:"grey"}}>
        <div className="row p-0 m-0" style={{ maxWidth:"500px", width:"90%", borderRadius:"6px"}}>
            <div className="col-12 bg-success" style={{height:"170px", borderTopLeftRadius:"6px", borderTopRightRadius:"6px", display:"grid", placeItems:"center"}}>
                <CheckCircle size="90px" color="white"/>
            </div>
            <div className="col-12 bg-light" style={{height:"140px", borderBottomLeftRadius:"6px", borderBottomRightRadius:"6px", display:"grid", placeItems:"center"}}>
                <div className="googlr-login-notification">
                    <strong>Great !</strong>
                    <p style={{fontSize:"12px", color:"grey"}}>You have successfully logged in with google.</p>
                    <button onClick={()=> navigate('/')} className="btn btn-sm btn-success px-4" style={{borderRadius:"20px"}}>Home</button>
                </div>
            </div>
        </div>
    </div>)
}

export default LoginSuccess