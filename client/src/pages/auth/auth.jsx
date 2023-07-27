
import { useSelector } from "react-redux"
import Signin from "./signin"
import Signup from "./signup"


const Auth = () => {

    return (
        <div className="container-fluid py-5 px-0  m-0 d-flex flex-col" style={{overflow:"hidden", justifyContent:"flex-start", maxWidth:"100%"}}>
                   
                    <Signin/>

                    <Signup/>
        </div>
    )
}

export default Auth