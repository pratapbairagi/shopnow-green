import { HousesFill, QuestionCircleFill, ShieldFillCheck, StarHalf, Truck } from "react-bootstrap-icons"



const Features2 = () => {
    return (
        <div style={{width:"100%", height:"max-content", marginTop:"4px"}}>

                    <h6 style={{ width: "100%", textAlign: "center", fontSize:"130%", fontWeight:"700", color:"grey" }}>Why Shop Whith Us ?</h6>
                    <p style={{ width: "100%", textAlign: "center", fontWeight:"500", lineHeight:"120%" }}>An impressive wonderful example of a particular quality type of idea</p>
                    <div className="row p-2 gap-0">
                        
                        <div className="col-12 col-md-col-6 col-lg-4 col-xl-3 card p-1" style={{border:"none"}}>
                            <div className="card-body d-flex flex-column align-items-center mb-0 p-3 border rounded-3">
                                <StarHalf size="30px" fill="red" />
                                <div className=" mt-2 mb-1 text-center" style={{border:"none", fontWeight:"700", letterSpacing:".5px"}}>
                                        QUALITY AND SAVING
                                </div>
                                <p className="card-info text-center px-2" style={{lineHeight:"120%", color:"rgb(82, 81, 81)", fontWeight:"600", letterSpacing:".3px"}}>Comprehensive quality control and affordable price</p>
                            </div>
                        </div>

                        <div className="col-12 col-md-col-6 col-lg-4 col-xl-3 card p-1" style={{border:"none"}}>
                            <div className="card-body d-flex flex-column align-items-center mb-0 p-3 border rounded-3">
                                <HousesFill size="30px" fill="red" />
                                <div className=" mt-2 mb-1 text-center" style={{border:"none", fontWeight:"700", letterSpacing:".5px"}}>
                                        WAREHOUSE
                                </div>
                                <p className="card-info text-center px-2" style={{lineHeight:"120%", color:"rgb(82, 81, 81)", fontWeight:"600", letterSpacing:".3px"}}>8 Cities warehouses</p>
                            </div>
                        </div>

                        <div className="col-12 col-md-col-6 col-lg-4 col-xl-3 card p-1" style={{border:"none"}}>
                            <div className="card-body d-flex flex-column align-items-center mb-0 p-3 border rounded-3">
                                <Truck size="30px" fill="red" />
                                <div className=" mt-2 mb-1 text-center" style={{border:"none", fontWeight:"700", letterSpacing:".5px"}}>
                                        FAST SHIPPING
                                </div>
                                <p className="card-info text-center px-2" style={{lineHeight:"120%", color:"rgb(82, 81, 81)", fontWeight:"600", letterSpacing:".3px"}}>fast and convenient door to door delivery </p>
                            </div>
                        </div>

                        <div className="col-12 col-md-col-6 col-lg-4 col-xl-3 card p-1" style={{border:"none"}}>
                            <div className="card-body d-flex flex-column align-items-center mb-0 p-3 border rounded-3">
                                <ShieldFillCheck size="30px" fill="red" />
                                <div className=" mt-2 mb-1 text-center" style={{border:"none", fontWeight:"700", letterSpacing:".5px"}}>
                                        PAYMENT SECURITY
                                </div>
                                <p className="card-info text-center px-2" style={{lineHeight:"120%", color:"rgb(82, 81, 81)", fontWeight:"600", letterSpacing:".3px"}}>More then 2 different secure payment system</p>
                            </div>
                        </div>

                        <div className="col-12 col-md-col-6 col-lg-4 col-xl-3 card p-1" style={{border:"none"}}>
                            <div className="card-body d-flex flex-column align-items-center mb-0 p-3 border rounded-3">
                                <QuestionCircleFill size="30px" fill="red" />
                                <div className=" mt-2 mb-1 text-center" style={{border:"none", fontWeight:"700", letterSpacing:".5px"}}>
                                        HAVE QUESTIONS ?
                                </div>
                                <p className="card-info text-center px-2" style={{lineHeight:"120%", color:"rgb(82, 81, 81)", fontWeight:"600", letterSpacing:".3px"}}>24/7 Customer service - we're here and happy to help !</p>
                            </div>
                        </div>

                        
                </div>

        </div>
    )
}

export default Features2