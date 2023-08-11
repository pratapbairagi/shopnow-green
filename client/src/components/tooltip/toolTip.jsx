import { Button, Tooltip } from "antd"
import { useEffect } from "react"


const ToolTip = () => {



    // useEffect(()=>{
    //     document.documentElement.scrollTop = document.documentElement.clientHeight;
    //     document.documentElement.scrollLeft = document.documentElement.clientWidth;
    // },[])

    return (
        <>
        <Tooltip title="added to cart" color="green" trigger="click" >
                Add
        </Tooltip>
        </>
    )
}

export default ToolTip