import { useNavigate } from "react-router-dom";
import "./brands.scss";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import HeadingBrandSkeleton from "../skeleton/brandHeadingSkeleton";
import BrandSkeleton from "../skeleton/brandSkeleton";

const Brands = ({load}) => {
    const navigate = useNavigate();
    const { productsFilter, loading, success, error } = useSelector(state => state.product);

    const [productsFilters, setProductsFilters] = useState([]);
    let uniqueBrand = new Set();

    useEffect(() => {

        if (productsFilter.length > 0) {
            productsFilter.forEach((obj) => {
                uniqueBrand.add(obj.brand.trim())
            })
            setProductsFilters(Array.from(uniqueBrand))
        }
    }, [productsFilter, loading])

    return (
        <div className="p-0 m-0 w-100 bg-light pt-2 pb-3" style={{ height: "max-content" }}>
            {load ? <HeadingBrandSkeleton /> :
                productsFilters.length > 0 &&
                <h5 className="" style={{ margin: "10px auto", borderBottom: "2px solid rgb(238, 236, 236)", width: "max-content", color: "grey", fontSize: "80%" }}>Our Brands</h5>
            }
            <div className="container brand_container m-0 px-2 py-0">

            {load ? <BrandSkeleton /> :
                productsFilters.length > 0 &&
                
                productsFilters !== null && productsFilters !== undefined && productsFilters.map((v, i) => {
                    return <div key={i} onClick={() => navigate(`/${v}`)} className="face face1 m-0" style={{ border: "1px solid rgb(238, 236, 236)", height: "max-content", padding: "6px 10px", cursor: "pointer", background: "white", borderRadius: "4px" }}>
                        <div className="content">
                            <h6 className="p-0 m-0 text-muted" style={{ width: "max-content", whiteSpace: "nowrap", textAlign: "center", fontSize: "80%" }}>{v.toUpperCase()}</h6>
                        </div>
                    </div>
                })
                }

            </div>
        </div>
    )
}
export default Brands