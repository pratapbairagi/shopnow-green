import { ArrowLeft, ArrowRight } from "react-bootstrap-icons"

const Banner = () => {


    var scrollWidth = 0;
    const bannerChangeHandler = (e) => {
        const imageSec = document.getElementById("imageSec");
        let imgs = imageSec.childElementCount;

        if (e === "+") {
            if (scrollWidth < imageSec.clientWidth * imgs) {
                scrollWidth += +imageSec.clientWidth;
                imageSec.scrollLeft += +imageSec.clientWidth;
            }
            else {
                imageSec.scrollLeft = 0
                scrollWidth = 0
            }
        }
        else if (e === "-") {
            if (scrollWidth > imageSec.clientWidth) {
                scrollWidth-=imageSec.clientWidth;
                imageSec.scrollLeft += -imageSec.clientWidth;
            }
            else {
                imageSec.scrollLeft = imageSec.clientWidth * imgs;
                scrollWidth = imageSec.clientWidth * imgs;
            }
        }
    }

    return (
        <div className="container-fluid banner-container p-0" style={{ overflow: "hidden" }}>
            <div className="row px-4 py-1 d-flex">

                <div className="col order-1 order-sm-1 order-md-0 col-12 col-md-6 " >
                    <div className="d-flex flex-column align-items-center align-items-md-start">
                        <h6>Hurry! Up To 50% Off</h6>
                        <h1 className="text-center text-md-start"> Arrival <span style={{ color: "black" }}> New  </span> <br /> Collection </h1>
                        <button className="btn btn-danger rounded-0" style={{ marginLeft: "8px", marginTop: "14px" }}>Explore Now</button>
                    </div>
                </div>

                <div className="col order-0 order-sm-0 order-md-1 col-12 col-md-6" style={{ position: "relative" }}>

                    <div className="imageSec" id="imageSec" style={{ overflow: "hidden", maxWidth: "90%", display: "flex", justifyContent: "flex-start", maxHeight: "60vh" }}>
                        <img style={{ width: "100%", minWidth: "100%", height: "100%", objectFit: "contain" }} src="/images/group-of-female-model-removebg-preview.png" alt="" />

                        <img style={{ width: "100%", minWidth: "100%", height: "100%", objectFit: "fill" }} src="/images/kids-clothes-collection-category.png" alt="" />

                        <img style={{ width: "100%", minWidth: "100%", height: "100%", objectFit: "contain" }} src="/images/group-of-female-model-removebg-preview.png" alt="" />

                        <img style={{ width: "100%", minWidth: "100%", height: "100%", objectFit: "fill" }} src="/images/kids-clothes-collection-category.png" alt="" />
                    </div>

                    <div style={{ position: "absolute", right: "2vw", bottom: "0", height: "30px", display: "flex", justifyContent: "center", alignItems: "center", gap: "4px" }}>
                        <button onClick={() => bannerChangeHandler("-")} style={{ border: "none", height: "8px", display: "flex", placeItems: "center", background: "transparent" }}> <ArrowLeft size="12" color="var(--dark-red)" /> </button>
                        <span className="p-0 m-0" style={{ height: "8px", border: "1px solid var(--dark-red)" }}></span>
                        <button onClick={() => bannerChangeHandler("+")} style={{ border: "none", height: "8px", display: "flex", placeItems: "center", background: "transparent" }}><ArrowRight size="12" color="var(--dark-red)" /></button>
                    </div>
                </div>

            </div>

        </div>
    )
}
export default Banner