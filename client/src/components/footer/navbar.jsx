import { NavLink } from "react-router-dom";
import { Search, Cart, PersonCircle, List, XSquare } from "react-bootstrap-icons";
import GuestCart from "../cart/cart";
import { useEffect, useState } from "react";
import SearchBar from "../searchBar/searchbar";
import User from "../user/User";
import { useSelector } from "react-redux";


const Navbar = ({search_options, setSearch_options}) => {
    const toggleHandlerMenu = () => {
        let nav = document.getElementById("mid-nav");
        if (nav.style.right === "-100%") {
            nav.style.right = "0%";
        }
        else {
            nav.style.right = "-100%"
        }
    }

    const [toggleCart, setToggleCart] = useState("cart");
    const toggleHandlerCart = (toggleBtn) => {
        if(toggleBtn === "cart") {
            document.getElementById(toggleCart).style.right = "0"
        }
    }

    // toggle search bar
    const [toggleSearchBar, settToggleSearchBar] = useState("search");
    const toggleHandlerSearchBar = (toggleBtn) => {
        if(toggleBtn === "search") {
            document.getElementById(toggleSearchBar).style.top = "0"
        }
    }

    // toggle user

    const [toggleUser, setToggleUser] = useState("user");
    const toggleUserHandler = (toggleBtn) => {
        document.getElementById(toggleUser).classList.toggle("activeToggle");
    }

    // cart
    const  {cart} = useSelector(state=> state.cart)
    const [cartCount, setCartCount] = useState(0);
    useEffect(()=>{
        if(cart){
            let x = 0;
            if(cart.length > 0){
                for(let z = 0; cart.length > z; z++){
                    x +=+Number(cart[z].qty)
                }
                setCartCount(x)
            }
        }
    }, [cart])

    return (
        <nav className="container-fluid nav-container">
            <button onClick={toggleHandlerMenu} className="d-block d-md-none" style={{ position: "fixed", zIndex:"1", top: "11.8vh", right: "5.5vw", background: "transparent", border: "none", }}><List size="23" color="var(--dark-red)" /></button>
            <GuestCart toggleCart={toggleCart} setToggleCart={setToggleCart} />
            <SearchBar toggleSearchBar={toggleSearchBar} search_options={search_options} setSearch_options={setSearch_options}/>

            <div className="nav pt-2">

                <NavLink to='/' className="navlogo">logo</NavLink>

                <ul className="mid-nav" id="mid-nav" style={{ right: "-100%" }}>
                    <button onClick={toggleHandlerMenu} style={{ position: "absolute", top: "0", left: "-26px", border: "none", background: "transparent" }}><XSquare size="24" color="white" /></button>
                    <li><NavLink onClick={toggleHandlerMenu} to="/">HOME</NavLink></li>
                    <li><NavLink onClick={toggleHandlerMenu} to="/about">ABOUT</NavLink></li>
                    <li><NavLink onClick={toggleHandlerMenu} to="/shop">SHOP</NavLink></li>
                    {/* <li><NavLink to="/product">PRODUCT</NavLink></li> */}
                    <li><NavLink onClick={toggleHandlerMenu} to="/contact">CONTACT</NavLink></li>
                </ul>

                <ul className="right-nav">
                    <li onClick={() => toggleHandlerSearchBar("search")}><Search className="icon-btn" /></li>
                    <li style={{position:"relative", width:"20px", height:"26px", display:"grid", placeItems:"center"}} onClick={() => toggleHandlerCart("cart")}>
                        <Cart className="icon-btn" style={{width:"80%", height:"80%"}} />
                        <span className="p-0" style={{position:"absolute", color:"white", fontSize:"60%", top:"-2px", right:"-5px", width:"16px", height:"16px", background:"green", borderRadius:"50%", display:"grid", placeItems:"center"}}>{
                        cartCount
                        }</span>
                        </li>
                    <span style={{ border: "1px solid var(--dark-red)", height: "3.5vh", marginBottom: "-1vh" }}></span>
                    <li style={{position:"relative"}} onClick={() => toggleUserHandler("user")}><PersonCircle className="icon-btn" size="22px"  />
                        
                        <User toggleUser={toggleUser} />

                    </li>
                </ul>

            </div>

        </nav>
    )
}

export default Navbar