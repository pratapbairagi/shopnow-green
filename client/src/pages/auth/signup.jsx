import { useState } from "react";
import { useDispatch } from "react-redux";
import Input from "../../asset/atoms";
import { User_register_action } from "../../redux/userAction";
import "./signup.css";

const Signup = () => {

    const inputCss = {
        width: "100%", borderRadius: "4px", outline: "none", fontSize: "12px", color: "grey", padding: "4px 8px", border: "1px solid rgb(236, 231, 231)"
    }

    // user
    const [user, setUser] = useState({
        name: "",
        email: "",
        password: "",
        confirmPassword: "",
        tnc: ""
    })

    // onchange user input handler
    const fun = (e) => {
        const { name, value } = e.target;
            setUser({ ...user, [name]: value  })
                     
    }


    // register user
    const dispatch = useDispatch()
    const submitRegisterUser = (e) => {
        e.preventDefault()
        if (user.name && user.email && user.tnc && user.password && user.confirmPassword) {
            if (user.password === user.confirmPassword) {
                dispatch(User_register_action(user));
            }
            else {
                alert("Password and Confirm Password does not match !")
            }
        }
        else {
            alert("error");
        }
    };

     // authFormToggle
     const authFormToggle = () => {
        const auth_form_login_col_parent = document.querySelector("#auth_form_login_col");
        const auth_form_login_col_parent_width = auth_form_login_col_parent.clientWidth;

        auth_form_login_col_parent.parentElement.scrollLeft -= auth_form_login_col_parent_width
        
    }

    return (<div className="row di-flex flex-column flex-md-row p-0 m-0" style={{ position: "relative", minWidth: "100%" }}>

        <div className="col nonFormCol col-12 col-md-6 signup_auth_form_parent_col justify-content-center justify-content-md-end" style={{ display: "flex", alignItems: "center" }}>
            
        </div>

        <div  className="col formCol col-12 col-md-6 px-5 py-2 signup_auth_form_parent_col" style={{ position: "relative" }}>
            <h5>SIGN-UP</h5>
            <form action="" className="auth_form">

                <fieldset >
                    <label htmlFor="name">Full Name</label>
                    <Input placeholder="Ex : John Doe" id="name" css={inputCss} classname="" type="text" name="name" defaultValue="" fun={fun} />
                </fieldset>

                <fieldset >
                    <label htmlFor="email">Email</label>
                    <Input placeholder="Ex : John Doe" id="email" css={inputCss} classname="" type="email" name="email" defaultValue="" fun={fun} />
                </fieldset>

                <fieldset >
                    <label htmlFor="password">Password</label>
                    <Input placeholder="Ex : Abcd123@  atleast 3 characters" id="password" css={inputCss} classname="" type="password" name="password" defaultValue="" fun={fun} />
                </fieldset>

                <fieldset >
                    <label htmlFor="confirmPassword">Re-Password</label>
                    <Input placeholder="confirmPassword" id="confirmPassword" css={inputCss} classname="" type="password" name="confirmPassword" defaultValue="" fun={fun} />
                </fieldset>


                <fieldset style={{ marginBottom: "8px", flexDirection: "row" }}>
                    <label style={{ width: "max-content", minWidth: "76px", height: "1.6rem", lineHeight: "1.6rem", borderTopLeftRadius: "3px", borderBottomLeftRadius: "3px", whiteSpace: "nowrap", fontSize: "10px", fontWeight: "400", padding: "0 6px", color: "grey", textAlign: "left" }} htmlFor="tnc">I agree with the term & condition !</label>
                    <Input placeholder="" id="tnc" style={{ width: "100%", fontSize: "12px" }} type="checkbox" name="tnc" defaultValue="true" fun={fun} />
                </fieldset>


                <button onClick={submitRegisterUser} className="btn btn-sm w-100 btn-success">SIGNUP</button>

            </form>

            <div className="dont_have_account">
                <span >Already have an account?</span>
                <button onClick={authFormToggle} >Login here</button>
            </div>


        </div>

    </div>
    )
}

export default Signup