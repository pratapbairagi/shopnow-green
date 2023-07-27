import { useEffect, useState } from "react";
import { BoxArrowInRight, BoxArrowRight, PersonGear } from "react-bootstrap-icons"
import { useDispatch, useSelector } from "react-redux"
import { NavLink } from "react-router-dom"
import { user_logout_action } from "../../redux/userAction";


const User = ({ toggleUser }) => {
    const dispatch = useDispatch();

    const state = useSelector(state => state.user_register);

    const [auth, setAuth] = useState(state.auth);
    useEffect(() => {
        setAuth(state.auth);
        // alert("login success")
    }, [state.auth])

    const logoutHandler = () => {
        dispatch(user_logout_action());
    }

    return (
        <div id={toggleUser} className="container-fluid py-4 px-3 container_user_bar">
            <div className="row p-0 m-0" style={{ position: "relative", gap: "6px" }}>







                {!auth ?
                    <NavLink to='/auth' style={{ display: "flex", gap: "4px", padding: "4px 10px", borderRadius: "3px", color: "var(--dark-red)", minWidth: "90%", alignItems: "center", height: "100%" }}>
                        <BoxArrowInRight size="14" />
                        <span style={{ fontSize: "calc(4px + 0.390625vw)", fontWeight: "500" }}>LOGIN</span>
                    </NavLink>
                    :
                    <>
                        <NavLink to='/profile' style={{ display: "flex", gap: "4px", padding: "4px 10px", borderRadius: "3px", color: "var(--dark-red)", minWidth: "90%", alignItems: "center", height: "100%" }}>
                            <PersonGear size="16" />
                            <span style={{ fontSize: "calc(4px + 0.390625vw)", fontWeight: "500" }}>PROFILE</span>
                        </NavLink>

                        <button onClick={logoutHandler} style={{ display: "flex", gap: "4px", padding: "4px 10px", borderRadius: "3px", color: "var(--dark-red)", minWidth: "90%", alignItems: "center", height: "100%" }}>
                            <BoxArrowRight size="16" />
                            <span style={{ fontSize: "calc(4px + 0.390625vw)", fontWeight: "500" }}>LOGOUT</span>
                        </button>
                    </>

                }



            </div>

        </div>
    )
}

export default User