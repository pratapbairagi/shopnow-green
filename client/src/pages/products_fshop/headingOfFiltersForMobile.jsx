import { XLg } from "react-bootstrap-icons"


const HeadingOfFiltersForMobile = ({submitSortCancel, setToggleFilters, text}) => {
    return (
        <div className="d-flex d-md-none" style={{ width: "100%", alignItems: "center", padding: "0px 12px", borderBottom: "1px dashed rgb(220, 220, 220)" }}>
            <span style={{ marginRight: "auto" }}>{text}</span>
            <button onClick={() => submitSortCancel()} className="btn" style={{ marginLeft: "auto", fontWeight: "500", color: "grey" }}>Clear</button>
            <button onClick={()=> setToggleFilters(null)} className="btn mx-2 rounded-0" style={{ position: "absolute", zIndex: "6", right: "0px", top: "-40px", color: "grey" }}><XLg /></button>
        </div>
    )
}

export default HeadingOfFiltersForMobile