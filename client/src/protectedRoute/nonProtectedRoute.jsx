import { useSelector } from "react-redux"
import { Navigate, Outlet } from "react-router-dom"


const NonProtectedRoute = () => {
    const user = useSelector(state=> state.user_register)

    return( user.auth === false ? <Outlet/> : <Navigate replace to="/"/> )
}

export default NonProtectedRoute