
import { useEffect, useState } from "react";
import "./notificationToaster.css";

const NotificationToaster = ({state}) => {
    const [notificationDisplay, setNotificationDisplay] = useState("none");
    useEffect(()=>{
        if(state.success === true && state.error === null ){
            setNotificationDisplay("flex")
        }
        else if(state.error !== null && state.success === false){
            setNotificationDisplay("flex")
        }
        else{
            setNotificationDisplay("none")
        }

        setTimeout(()=>{
            setNotificationDisplay("none")
        },3000)
    },[state.success, state.error])

    return(
        <div className="container-fluid notification_box" style={{background:`${state.success === true && state.error ===null ? "green"  : state.success === false && state.error !== null ? "red" : "transparent"}`, display:`${notificationDisplay}`}}>
            {/* <div className="notification_message">{state.user.message}</div> */}
        </div>
    )
}

export default NotificationToaster