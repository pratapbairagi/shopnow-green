import {Search, XLg} from "react-bootstrap-icons"
import { useDispatch } from "react-redux"
import { get_all_products_action } from "../../redux/product/product_actions"
import { useLocation, useNavigate } from "react-router-dom";
import { useState } from "react";

const SearchBar = ({toggleSearchBar, search_options, setSearch_options}) => {

    const navigate = useNavigate()
    const {pathname} = useLocation()
    const [search, setSearch] = useState("")

    const submitSearch = () => {
        if(search.length > 1){
        setSearch_options({...search_options, name : search})
        navigate("/shop")
        }
    }

    // cancel search
    const cancelSearch = () => {
        setSearch_options({...search_options, name : ""})
        setSearch("")
        document.getElementById(toggleSearchBar).style.top = "-100%"
    }

    return(
        <div id={toggleSearchBar} className="d-flex" style={{width:"100%", maxWidth:"1200px", display:"flex", flexDirection:"column", padding:"0 0 20px 0", boxShadow:"grey 0 15px 10px -18px", justifyContent:"center", alignItems:"center", gap:"0", borderBottomLeftRadius:"8px", borderBottomRightRadius:"8px", background:"var(--white)", position:"fixed", top:"-100%", transition:".5s linear", margin:"auto", zIndex:"10", height:"20vh"  }}>
           <h4 className="text-success mt-1 p-0">SEARCH</h4>
            <div className="m-0" style={{display:"flex", padding:"2px", width:"80%", maxWidth:"400px",  minWidth:"200px", position:"relative", right:"0", height:"2.5rem", border:"1px solid grey", borderRadius:"8px"}}>
            <input defaultValue={search} placeholder="Search..." onChange={(e)=>{ 
               return setSearch(e.target.value)
                // e.target.value.length !== 0 && pathname !== "/shop" && navigate("/shop") 
                // e.target.value.length === 0 && navigate(-1)
                }} className="py-1 px-3" style={{height:"100%", outline:"none", borderRadius:"8px", borderTopRightRadius:"0", borderBottomRightRadius:"0", color:"grey",  width:"calc(100% - 30px)", display:"block", padding:"1px 6px"}} type="search" name="" id="" />
            <button onClick={()=> submitSearch() } className="btn btn-success d-flex justify-content-center align-items-center "><Search size="20"/></button>
            </div>

            <button onClick={()=> document.getElementById(toggleSearchBar).style.top = "-100%"} style={{width:"25px", height:"25px", position:"absolute", bottom:"12px", background:"transparent", right:"6px", display:"grid", placeItems:"center"}}>
                <XLg size="16"/>
            </button>

            { search.length > 1 && <button className="btn btn-dander btn-sm rounded-0 d-flex " onClick={()=> cancelSearch() } style={{width:"25px", height:"25px", position:"absolute", bottom:"7px", background:"transparent", left:"6px", display:"grid", placeItems:"center"}}>
                <div style={{color:"grey"}}>Cancel</div>
            </button>}
        </div>
    )
}

export default SearchBar