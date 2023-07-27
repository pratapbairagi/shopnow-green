import { useSelector } from "react-redux";

const { Navigate, Outlet } = require("react-router-dom");


const ProtectedRoute = () => {

    const user = useSelector(state=> state.user_register)

    return ( user.auth === true ?   <Outlet  /> : <Navigate replace to="/auth"/>  )
}

export default ProtectedRoute