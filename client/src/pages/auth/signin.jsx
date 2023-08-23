import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Input from "../../asset/atoms"
import { User_login_action } from "../../redux/userAction";
import { Facebook, Google, Twitter } from "react-bootstrap-icons";
import "./signup.css"
import axios from "axios";
import { Input as InputAntd, Space } from "antd";
import { EyeInvisibleOutlined, EyeTwoTone } from '@ant-design/icons';
import GoogleSignInButton from "../../components/googleSignInButton/googleSignInButton";


const Signin = () => {

    const sss = useSelector(state => state.user_register)

    const inputCss = {
        width: "100%", borderRadius: "4px", outline: "none", fontSize: "12px", color: "grey", padding: "4px 8px", border: "1px solid rgb(236, 231, 231)"
    };

    // user
    const [user, setUser] = useState({
        email: "",
        password: ""
    })

    // onchange user input handler
    const fun = (e) => {
        const { name, value } = e.target;
        setUser({ ...user, [name]: value })
    };

    // register user
    const dispatch = useDispatch()
    const submitLoginUser = async (e) => {
        e.preventDefault()
        if (user.email && user.password) {
            dispatch(User_login_action(user));

            const config = {
                headers: {
                    "Content-Type": "application/json"
                },
                withCredentials: true
            };

            // this is to get error message while login
            //  await axios.post("https://shopnow-server.vercel.app/website_ecommerce/app/api/login", user, config).catch(er=> document.getElementById("login_error").innerHTML = er.response.data.message )
            await axios.post(`${process.env.REACT_APP_SERVER_URL}/website_ecommerce/app/api/login`, user, config).catch(er => document.getElementById("login_error").innerHTML = er.response.data.message)

        }
        else {
            document.getElementById("login_error").innerHTML = "Please fill both login credentials !"
        }
    };

    useEffect(() => {
        document.getElementById("login_error").innerHTML = ""
    }, [user])

    // authFormToggle
    const authFormToggle = () => {
        const auth_form_login_col_parent = document.querySelector("#auth_form_login_col");
        const auth_form_login_col_parent_width = auth_form_login_col_parent.clientWidth;

        auth_form_login_col_parent.parentElement.scrollLeft = auth_form_login_col_parent_width

    };

    return (<div id="auth_form_login_col" className="row di-flex flex-column flex-md-row p-0 m-0" style={{ position: "relative", minWidth: "100%", justifyContent: "center", alignContent: "center" }}>

        <div className="col noFormCol col-12 col-md-6 signin_auth_form_parent_col" style={{ display: "flex", alignItems: "center", justifyContent: "center" }}>

        </div>

        <div className="col formCol col-12 col-md-6 px-5 py-2 auth_form_parent_col" style={{ display: "flex", flexDirection: "column", justifyContent: "center", background: "white" }}>
            <h5>LOGIN</h5>
            <form action="" className="auth_form">

                <fieldset className="mt-2"  >
                    <label htmlFor="email">Email</label>
                    <Input placeholder="Ex : example@gmail.com" id="email" css={inputCss} classname="" type="email" name="email" defaultValue="" fun={fun} />
                </fieldset>


                <fieldset >
                    <label htmlFor="password">Password</label>
                    {/* <Input placeholder="Ex : Abcd123@  atleast 3 characters" id="password" css={inputCss} classname="" type="password" name="password" defaultValue="" fun={fun} /> */}
                    <Space direction="vertical" style={{ width: "100%" }}>
                        <InputAntd.Password
                            type="password"
                            name="password"
                            onChange={(e) => setUser({ ...user, password: e.target.value })}
                            style={{ width: "100% !important", outline: "none" }}
                            placeholder="Ex : Abcd123@  atleast 3 characters"
                            iconRender={(visible) => (visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />)}
                        />
                    </Space>
                </fieldset>

                <fieldset className="m-0" style={{ flexDirection: "row", height: "max-content" }}>
                    <label style={{ width: "max-content", minWidth: "76px", height: "1.6rem", lineHeight: "1.6rem", borderTopLeftRadius: "3px", borderBottomLeftRadius: "3px", whiteSpace: "nowrap", fontSize: "10px", fontWeight: "400", padding: "0 6px", color: "grey", textAlign: "left" }} htmlFor="tnc"> Remember me!</label>
                    <Input placeholder="" id="tnc" style={{ width: "100%", fontSize: "12px" }} type="checkbox" name="tnc" defaultValue="true" fun={fun} />
                </fieldset>

                <button onClick={submitLoginUser} className="btn btn-sm w-100 btn-success mt-1">LOGIN</button>
                <span id="login_error" style={{ width: "100%", fontSize: "100%", color: "red" }}></span>
            </form>

            <div className="socials_login">
                <span>Or</span>
                <p>Login with</p>

                <div className="login_with_buttons">

                    <button style={{ border: "1px solid #db4437 " }}>
                        {/* <Google color="#db4437" size="14" /> */}
                        <GoogleSignInButton />
                    </button>
                    <button style={{ border: "1px solid #4267b2 " }}>
                        <Facebook color="#4267b2" size="14" />
                    </button>
                    <button style={{ border: "1px solid #1da1f2 " }}>
                        <Twitter color="#1da1f2" size="14" />
                    </button>

                </div>
            </div>

            <div className="dont_have_account">
                <span >Don't have account?</span>
                <button onClick={authFormToggle} >Sign-up here</button>
            </div>

        </div>

    </div>
    )
}

export default Signin