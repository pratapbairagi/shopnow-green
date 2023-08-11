import { CommentOutlined, UserOutlined, LoginOutlined, LogoutOutlined } from '@ant-design/icons';
import { FloatButton } from 'antd';
import React from "react"
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { user_logout_action } from '../redux/userAction';

const UserButton = () => {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const { auth } = useSelector(state => state.user_register);

    const logoutHandler = () => {
        dispatch(user_logout_action());
    }

    return (
        <>
            <FloatButton.Group
                className='nav-fixed-contents-user'
                trigger="click"
                // type="primary"
                style={{
                    height: "max-content",
                    // display: "flex",
                    // flexDirection: "column-reverse",
                    zIndex: "2"
                }}
                icon={<UserOutlined style={{ marginBottom: "5px" }} />}
            >
                {!auth ?
                    <FloatButton onClick={()=> navigate("/auth")} style={{ marginTop: "16px" }} icon={<LoginOutlined style={{ marginBottom: "4px" }} />} />
                    :
                <>
                <FloatButton onClick={()=> navigate("/profile")} style={{ marginTop: "16px" }} icon={<LogoutOutlined style={{ marginBottom: "4px" }} />} />
                <FloatButton onClick={()=>logoutHandler} style={{ marginTop: "16px" }} icon={<UserOutlined style={{ marginBottom: "4px" }} />} /> 
                </>
                }

                {/* <FloatButton icon={<CommentOutlined />} /> */}
            </FloatButton.Group>
        </>
    )
}

export default UserButton