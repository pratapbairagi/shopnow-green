import { XLg } from "react-bootstrap-icons";
import "./cart.scss"
import CartComponent from "../cartComponent/cartComponent";

const GuestCart = ({ toggleCart }) => {

  return (
    <div id={toggleCart} className="container-fluid cart-container" style={{ maxWidth: "90%", height: "100vh", width: "100%", transition: ".5s linear", position: "fixed", top: "0", right: "-100%", background: "white", borderTopLeftRadius: "6px", borderBottomLeftRadius: "6px", zIndex: "10", boxShadow: "0 3px 8px rgb(0, 0, 0, 0.15)" }}>
      <button onClick={(e) => document.getElementById(toggleCart).style.right = "-100%"} style={{ position: "absolute", width: "25px", height: "25px", top: "5px", background: "transparent", left: "5px", padding: "2px", display: "flex", justifyContent: "center", alignItems: "center" }}><XLg size="16" /></button>
      <h2>cart</h2>
    <CartComponent/>

    </div>

  )
}
export default GuestCart