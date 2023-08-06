

const BannerSkeleton = () => {
    return (
        <div className="row px-4 py-1 d-flex" style={{maxWidth:"100%", marginLeft:"2px", background:"rgb(253, 249, 243)"}}>

                <div className="col order-1 order-sm-1 order-md-0 col-12 col-md-6 col-lg-4 mx-auto" >
                    <div className="d-flex flex-column align-items-center align-items-md-start justify-content-md-center mt-0 p-0 px-md-5 py-4" style={{ height:"100%"}}>
                    <div className="bannerSkeleton" style={{width:"180px", minHeight:"2.5vh", borderRadius:"4px"}}></div>
                        <h1 className="text-center text-md-start bannerSkeleton" style={{minWidth:"220px", marginTop:"10px", height:"5vh", borderRadius:"4px"}}> </h1>
                        <h1 className="text-center text-md-start bannerSkeleton" style={{minWidth:"200px", marginTop:"4px", height:"5vh", borderRadius:"4px"}}> </h1>

                        <div className=" rounded-0 bannerSkeleton" style={{ marginLeft: "8px", marginTop: "14px", border:"none", minWidth:"110px", height:"4.7vh" }}></div>
                    </div>
                </div>

                <div className="col order-0 order-sm-0 order-md-1 col-12 col-md-6 col-lg-8 bannerSkeleton d-flex justify-content-center" style={{ position: "relative", minHeight:"68vh" }}>

                    

                </div>

            </div>
    )
}

export default BannerSkeleton