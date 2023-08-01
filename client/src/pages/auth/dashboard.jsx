import { useEffect, useState } from "react";
import { BagCheck, BoxArrowRight, CaretRight, Cart2, Envelope, People, Person, PersonGear, Star, UiRadiosGrid } from "react-bootstrap-icons";
import { useDispatch, useSelector } from "react-redux";
import { user_clear_error_action, user_clear_success_action } from "../../redux/userAction";
import ProductList from "./admin/productList/productList";
import UsersList from "./admin/userslist/usersList";
import "./dashboard.css";
import Profile from "./profile/profile";
import CartComponent from "../../components/cartComponent/cartComponent";


const Dashboard = () => {

    const dispatch = useDispatch();
    const state = useSelector(state => state.user_register);

    const [activeToggle, setActiveToggle] = useState({ display: "none", col: "col-12" })
    const userMenuToggle = (e) => {
        if (activeToggle.display === "none") {
            setActiveToggle({ display: "flex", col: "col-10" })
            document.getElementById("id").style.transform = "rotateZ(180deg)"
        }
        else {
            setActiveToggle({ display: "none", col: "col-12" })
            document.getElementById("id").style.transform = "rotateZ(0deg)"
        }
    };

    // user_menu_buttons
    const user_menu_buttons = document.querySelectorAll("#user_menu_buttons button")

    user_menu_buttons.forEach((v, i) => {
        v.addEventListener("click", (e) => {

            const sections = document.querySelectorAll("#col2 .sec");

            sections.forEach((el, uniq) => {
                el.classList.remove("activeMenu");
                user_menu_buttons[uniq]?.classList.remove("activeBtn")
                if (uniq === i) {

                    user_menu_buttons[i]?.classList.add("activeBtn")
                    sections[i]?.classList.add("activeMenu");
                }
            })

        })
    });

    // clear user action success
    useEffect(() => {
        if (state.success) {
            setTimeout(() => {
                dispatch(user_clear_success_action())
            }, 3000)
        }
        if (state.error !== null) {
            dispatch(user_clear_error_action())
        }
    }, [state.success, state.error, dispatch])

    return (
        <div className="container-fluid dashboard_container" style={{ overflow: "hidden", height: "100vh" }}>

            <div className="row" style={{ position: "relative", height: "max-content", minHeight: "100%" }}>

                <button id="id" onClick={(e) => userMenuToggle(e.currentTarget)} style={{ width: "18px", transition: ".3s linear", borderRadius: "50%", boxShadow: "black 2px 2px 8px -5px", zIndex: "1", height: "18px", display: "flex", justifyContent: "center", align: "center", padding: "1px 2px 4px 2px", background: "var(--floral-white)", color: "var(--dark-red)", position: "absolute", top: "4px", left: "4px" }}>
                    <CaretRight />
                </button>


                <div className="col col1 col-2 dashboard_options_container" style={{ display: `${activeToggle.display}` }}>
                    <div className="dashboard_options" style={{ width: "100vw", display: "flex" }}>

                        <span style={{ width: "100%", display: "block", borderBottom: "1px solid grey" }}></span>

                        <div className="user_menu_buttons" id="user_menu_buttons">

                            <button className="row activeBtn mt-4">
                                <span className="col-12 col-md-3" style={{ maxWidth: "2rem", display: "grid", placeItems: "center", height: "100%" }}> <Person size="16px" color="blue" /> </span>
                                <span className="col-12 col-md-5 d-none d-md-flex" style={{ fontSize: "12px", fontWeight: "600", textAlign: "left", justifyContent: "flex-start", alignItems: "center", height: "100%", color: "blue" }}> Profile </span>
                            </button>

                            <button className="row mt-2">
                                <span className="col-12 col-md-3" style={{ maxWidth: "2rem", display: "grid", placeItems: "center", height: "100%" }}> <Cart2 size="16px" color="blue" /> </span>
                                <span className="col-12 col-md-5 d-none d-md-flex" style={{ fontSize: "12px", fontWeight: "600", textAlign: "left", justifyContent: "flex-start", alignItems: "center", height: "100%", color: "blue" }}> Cart </span>
                            </button>

                            <button className="row mt-2">
                                <span className="col-12 col-md-3" style={{ maxWidth: "2rem", display: "grid", placeItems: "center", height: "100%" }}> <BagCheck size="16px" color="blue" /> </span>
                                <span className="col-12 col-md-5 d-none d-md-flex" style={{ fontSize: "12px", fontWeight: "600", textAlign: "left", justifyContent: "flex-start", alignItems: "center", height: "100%", color: "blue" }}> Orders </span>
                            </button>
                            {state.auth &&
                                state.user.role === "admin" &&
                                <>
                                    <button className="row mt-2">
                                        <span className="col-12 col-md-3" style={{ maxWidth: "2rem", display: "grid", placeItems: "center", height: "100%" }}> <People size="16px" color="blue" /> </span>
                                        <span className="col-12 col-md-5 d-none d-md-flex" style={{ fontSize: "12px", fontWeight: "600", textAlign: "left", justifyContent: "flex-start", alignItems: "center", height: "100%", color: "blue" }}> Users </span>
                                    </button>

                                    <button className="row mt-2">
                                        <span className="col-12 col-md-3" style={{ maxWidth: "2rem", display: "grid", placeItems: "center", height: "100%" }}> <UiRadiosGrid size="16px" color="blue" /> </span>
                                        <span className="col-12 col-md-5 d-none d-md-flex" style={{ fontSize: "12px", fontWeight: "600", textAlign: "left", justifyContent: "flex-start", alignItems: "center", height: "100%", color: "blue" }}> Products </span>
                                    </button>

                                    <button className="row mt-2">
                                        <span className="col-12 col-md-3" style={{ maxWidth: "2rem", display: "grid", placeItems: "center", height: "100%" }}> <Star size="16px" color="blue" /> </span>
                                        <span className="col-12 col-md-5 d-none d-md-flex" style={{ fontSize: "12px", fontWeight: "600", textAlign: "left", justifyContent: "flex-start", alignItems: "center", height: "100%", color: "blue" }}> Reviews </span>
                                    </button>

                                    <button className="row mt-2">
                                        <span className="col-12 col-md-3" style={{ maxWidth: "2rem", display: "grid", placeItems: "center", height: "100%" }}> <Envelope size="16px" color="blue" /> </span>
                                        <span className="col-12 col-md-5 d-none d-md-flex" style={{ fontSize: "12px", fontWeight: "600", textAlign: "left", justifyContent: "flex-start", alignItems: "center", height: "100%", color: "blue" }}> Messages </span>
                                    </button>
                                </>
                            }

                            <button className="row mt-2">
                                <span className="col-12 col-md-3" style={{ maxWidth: "2rem", display: "grid", placeItems: "center", height: "100%" }}> <PersonGear size="16px" color="blue" /> </span>
                                <span className="col-12 col-md-5 d-none d-md-flex" style={{ fontSize: "12px", fontWeight: "600", textAlign: "left", justifyContent: "flex-start", alignItems: "center", height: "100%", color: "blue" }}> Setting </span>
                            </button>

                            <button className="row mt-2">
                                <span className="col-12 col-md-3" style={{ maxWidth: "2rem", display: "grid", placeItems: "center", height: "100%" }}> <BoxArrowRight style={{ marginLeft: "2px" }} size="16px" color="blue" /> </span>
                                <span className="col-12 col-md-5 d-none d-md-flex" style={{ fontSize: "12px", fontWeight: "600", textAlign: "left", justifyContent: "flex-start", alignItems: "center", height: "100%", color: "blue" }}> Logout </span>
                            </button>

                        </div>

                    </div>

                </div>

                <div id="col2" className={`col ${activeToggle.col}  col2`} style={{ minHeight: "100vh", position: "relative", height: "max-content" }}>

                    <div className="sec activeMenu" style={{ height:"100vh", overflowX: "scroll" }}>
                        <Profile state={state} />
                    </div>

                    <div className="sec" style={{height:"100vh", flexDirection:"column", justifyContent:"center", alignItems:"center"}}>
                        <h3>Cart</h3>
                        <div className="container-fluid cart-container" style={{ maxWidth: "90%", height: "max-content", width: "100%", transition: ".5s linear", background: "white", borderTopLeftRadius: "6px", borderBottomLeftRadius: "6px", boxShadow: "0 3px 8px rgb(0, 0, 0, 0.15)" }}>
                            <CartComponent />
                        </div>
                    </div>

                    <div className="sec" style={{height:"100vh", minHeight:"100vh"}}>
                        <h3>Orders</h3>
                    </div>
                    {state.auth &&
                        state.user.role === "admin" &&
                        <>
                            <div className="sec" style={{ height: "100vh", width: "100%", overflowX: "scroll" }}>
                                <UsersList state={state} />
                            </div>

                            <div className="sec" style={{height:"100vh"}}>
                                <ProductList />
                            </div>

                            <div className="sec" style={{height:"100vh"}}>
                                <h3>Reviews</h3>
                            </div>

                            <div className="sec" style={{height:"100vh"}}>
                                <h3>Messages</h3>
                            </div>
                        </>
                    }

                    <div className="sec">
                        <h3>Settings</h3>
                    </div>

                    <div className="sec">
                        <h3>Logout</h3>
                    </div>

                </div>

            </div>
        </div>
    )
};

export default Dashboard