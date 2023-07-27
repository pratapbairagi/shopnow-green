import "./recomended_products.module.scss";
import {Facebook,Twitter, Instagram, Linkedin, StarFill, StarHalf, Star, BagPlus, ListTask, Person, BarChart} from "react-bootstrap-icons"




const Recomended_products = ({products}) => {
    return(
        <>
   
<div className="py-5 px-0">

  {/* <!-- First Row [Prosucts]--> */}
  <h2 className="font-weight-bold mb-2">Recommended</h2>
  <p className="font-italic text-muted mb-4">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt.</p>

  <div className="row pb-5 mb-4 flex-nowrap" style={{overflow:"scroll", justifyContent:"flex-start", maxWidth:"100%"}}>
    <div className="col-lg-3 col-md-6 mb-4 mb-lg-0 ">
      {/* <!-- Card--> */}
      <div className="card rounded shadow-sm border-0"  style={{ aspectRatio:"1/1.05"}}>
        <div className="card-body pt-1 pb-0 d-flex flex-column align-items-center">
            <img src="https://bootstrapious.com/i/snippets/sn-cards/shoes-1_gthops.jpg" alt="" className="img-fluid d-block mx-auto mb-3" />
          <h5 style={{width:"100%", textAlign:"center"}}> <a href="#home" className="text-dark">Awesome product</a></h5>
          <p className="small text-muted font-italic" style={{ width:"100%", textAlign:"center"}}>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
          <ul className="list-inline small d-flex flex-row justify-content-center">
            <li className="list-inline-item m-0 " style={{ width:"15%"}}><StarFill color="green" size="70%"/></li>
            <li className="list-inline-item m-0" style={{ width:"15%"}}><StarFill color="green" size="70%"/></li>
            <li className="list-inline-item m-0" style={{ width:"15%"}}><StarFill color="green" size="70%"/></li>
            <li className="list-inline-item m-0" style={{ width:"15%"}}><StarHalf color="green" size="70%"/></li>
            <li className="list-inline-item m-0" style={{ width:"15%"}}><Star color="green" size="70%"/></li>
          </ul>
        </div>
      </div>
    </div>

    <div className="col-lg-3 col-md-6 mb-4 mb-lg-0">
      {/* <!-- Card--> */}
      <div className="card rounded shadow-sm border-0" style={{ aspectRatio:"1/1.05"}}>
        <div className="card-body pt-1 pb-0 d-flex flex-column align-items-center">
            <img src="https://bootstrapious.com/i/snippets/sn-cards/shoes-2_g4qame.jpg" alt="" className="img-fluid d-block mx-auto mb-3" />
          <h5 style={{width:"100%", textAlign:"center"}}> <a href="#home" className="text-dark">Awesome product</a></h5>
          <p className="small text-muted font-italic" style={{ width:"100%", textAlign:"center"}}>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
          <ul className="list-inline small d-flex flex-row justify-content-center">
            <li className="list-inline-item m-0 " style={{ width:"15%"}}><StarFill color="green" size="70%"/></li>
            <li className="list-inline-item m-0" style={{ width:"15%"}}><StarFill color="green" size="70%"/></li>
            <li className="list-inline-item m-0" style={{ width:"15%"}}><StarFill color="green" size="70%"/></li>
            <li className="list-inline-item m-0" style={{ width:"15%"}}><StarFill color="green" size="70%"/></li>
            <li className="list-inline-item m-0" style={{ width:"15%"}}><StarHalf color="green" size="70%"/></li>
          </ul>
        </div>
      </div>
    </div>

    <div className="col-lg-3 col-md-6 mb-4 mb-lg-0">
      {/* <!-- Card--> */}
      <div className="card rounded shadow-sm border-0" style={{ aspectRatio:"1/1.05"}}>
        <div className="card-body pt-1 pb-0 d-flex flex-column align-items-center">
            <img src="https://bootstrapious.com/i/snippets/sn-cards/shoes-3_rk25rt.jpg" alt="" className="img-fluid d-block mx-auto mb-3" />
          <h5 style={{width:"100%", textAlign:"center"}}> <a href="#home" className="text-dark">Awesome product</a></h5>
          <p className="small text-muted font-italic" style={{ width:"100%", textAlign:"center"}}>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
          <ul className="list-inline small d-flex flex-row justify-content-center">
            <li className="list-inline-item m-0 " style={{ width:"15%"}}><StarFill color="green" size="70%"/></li>
            <li className="list-inline-item m-0" style={{ width:"15%"}}><StarFill color="green" size="70%"/></li>
            <li className="list-inline-item m-0" style={{ width:"15%"}}><StarFill color="green" size="70%"/></li>
            <li className="list-inline-item m-0" style={{ width:"15%"}}><StarFill color="green" size="70%"/></li>
            <li className="list-inline-item m-0" style={{ width:"15%"}}><Star color="green" size="70%"/></li>
          </ul>
        </div>
      </div>
    </div>

    <div className="col-lg-3 col-md-6 mb-4 mb-lg-0">
      {/* <!-- Card--> */}
      <div className="card rounded shadow-sm border-0" style={{ aspectRatio:"1/1.05"}}>
        <div className="card-body pt-1 pb-0 d-flex flex-column align-items-center">
            <img src="https://bootstrapious.com/i/snippets/sn-cards/shoes-4_vgfjy9.jpg" alt="" className="img-fluid d-block mx-auto mb-3" />
          <h5 style={{width:"100%", textAlign:"center"}}> <a href="#home" className="text-dark">Awesome product</a></h5>
          <p className="small text-muted font-italic" style={{ width:"100%", textAlign:"center"}}>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
          <ul className="list-inline small d-flex flex-row justify-content-center">
            <li className="list-inline-item m-0 " style={{ width:"15%"}}><StarFill color="green" size="70%"/></li>
            <li className="list-inline-item m-0" style={{ width:"15%"}}><StarFill color="green" size="70%"/></li>
            <li className="list-inline-item m-0" style={{ width:"15%"}}><StarFill color="green" size="70%"/></li>
            <li className="list-inline-item m-0" style={{ width:"15%"}}><StarFill color="green" size="70%"/></li>
            <li className="list-inline-item m-0" style={{ width:"15%"}}><StarHalf color="green" size="70%"/></li>
          </ul>
        </div>
      </div>
    </div>
  </div>


  {/* <!-- Second Row [Team]--> */}
  <h2 className="font-weight-bold mb-2 px-0">Our Team</h2>
  <p className="font-italic text-muted mb-4">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt.</p>

  <div className="row pb-5 mb-4" style={{maxWidth:"100%"}}>
    <div className="col-lg-3 col-md-6 mb-4 mb-lg-0">
      {/* <!-- Card--> */}
      <div className="card shadow-sm border-0 rounded" style={{ aspectRatio:"1/1.05"}}>
        <div className="card-body p-0"><img src="https://bootstrapious.com/i/snippets/sn-cards/profile-1_dewapk.jpg" alt="" className="w-100 card-img-top" />
          <div className="p-4">
            <h5 className="mb-0">Mark Rockwell</h5>
            <p className="small text-muted">CEO - Consultant</p>
            <ul className="social mb-0 list-inline mt-3">
              <li className="list-inline-item m-0"><a href="#home" className="social-link"><Facebook color="grey" size="60%" style={{maxWidth:"32px"}}/></a></li>
              <li className="list-inline-item m-0"><a href="#home" className="social-link"><Twitter color="grey" size="60%" style={{maxWidth:"32px"}}/></a></li>
              <li className="list-inline-item m-0"><a href="#home" className="social-link"><Instagram color="grey" size="60%" style={{maxWidth:"32px"}}/></a></li>
              <li className="list-inline-item m-0"><a href="#home" className="social-link"><Linkedin color="grey" size="60%" style={{maxWidth:"32px"}}/></a></li>
            </ul>
          </div>
        </div>
      </div>
    </div>

    <div className="col-lg-3 col-md-6 mb-4 mb-lg-0">
      {/* <!-- Card--> */}
      <div className="card shadow-sm border-0 rounded" style={{ aspectRatio:"1/1.05"}}>
        <div className="card-body p-0"><img src="https://bootstrapious.com/i/snippets/sn-cards/profile-3_ybnq8v.jpg" alt="" className="w-100 card-img-top" />
          <div className="p-4">
            <h5 className="mb-0">Mark Rockwell</h5>
            <p className="small text-muted">CEO - Consultant</p>
            <ul className="social mb-0 list-inline mt-3">
              <li className="list-inline-item m-0"><a href="#home" className="social-link"><Facebook color="grey" size="60%" style={{maxWidth:"32px"}}/></a></li>
              <li className="list-inline-item m-0"><a href="#home" className="social-link"><Twitter color="grey" size="60%" style={{maxWidth:"32px"}}/></a></li>
              <li className="list-inline-item m-0"><a href="#home" className="social-link"><Instagram color="grey" size="60%" style={{maxWidth:"32px"}}/></a></li>
              <li className="list-inline-item m-0"><a href="#home" className="social-link"><Linkedin color="grey" size="60%" style={{maxWidth:"32px"}}/></a></li>
            </ul>
          </div>
        </div>
      </div>
    </div>

    <div className="col-lg-3 col-md-6 mb-4 mb-lg-0">
      {/* <!-- Card--> */}
      <div className="card shadow-sm border-0 rounded" style={{ aspectRatio:"1/1.05"}}>
        <div className="card-body p-0"><img src="https://bootstrapious.com/i/snippets/sn-cards/profile-2_ujssbj.jpg" alt="" className="w-100 card-img-top" />
          <div className="p-4">
            <h5 className="mb-0">Mark Rockwell</h5>
            <p className="small text-muted">CEO - Consultant</p>
            <ul className="social mb-0 list-inline mt-3">
              <li className="list-inline-item m-0"><a href="#home" className="social-link"><Facebook color="grey" size="60%" style={{maxWidth:"32px"}}/></a></li>
              <li className="list-inline-item m-0"><a href="#home" className="social-link"><Twitter color="grey" size="60%" style={{maxWidth:"32px"}}/></a></li>
              <li className="list-inline-item m-0"><a href="#home" className="social-link"><Instagram color="grey" size="60%" style={{maxWidth:"32px"}}/></a></li>
              <li className="list-inline-item m-0"><a href="#home" className="social-link"><Linkedin color="grey" size="60%" style={{maxWidth:"32px"}}/></a></li>
            </ul>
          </div>
        </div>
      </div>
    </div>

    <div className="col-lg-3 col-md-6 mb-4 mb-lg-0">
      {/* <!-- Card--> */}
      <div className="card shadow-sm border-0 rounded" style={{ aspectRatio:"1/1.05"}}>
        <div className="card-body p-0"><img src="https://res.cloudinary.com/mhmd/image/upload/v1570799922/profile-2_ujssbj.jpg" alt="" className="w-100 card-img-top" />
          <div className="p-4">
            <h5 className="mb-0">Mark Rockwell</h5>
            <p className="small text-muted">CEO - Consultant</p>
            <ul className="social mb-0 list-inline mt-3">
              <li className="list-inline-item m-0"><a href="#home" className="social-link"><Facebook color="grey" size="60%" style={{maxWidth:"32px"}}/></a></li>
              <li className="list-inline-item m-0"><a href="#home" className="social-link"><Twitter color="grey" size="60%" style={{maxWidth:"32px"}}/></a></li>
              <li className="list-inline-item m-0"><a href="#home" className="social-link"><Instagram color="grey" size="60%" style={{maxWidth:"32px"}}/></a></li>
              <li className="list-inline-item m-0"><a href="#home" className="social-link"><Linkedin color="grey" size="60%" style={{maxWidth:"32px"}}/></a></li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>

  {/* <!-- Third Row [Profiles]--> */}
  <h2 className="font-weight-bold mb-2">Active Profiles</h2>
  <p className="font-italic text-muted mb-4">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt.</p>

  <div className="row pb-5 mb-4" style={{maxWidth:"100%"}}>

    <div className="col-lg-3 col-md-6 mb-4 mb-lg-0">
      {/* <!-- Card--> */}
      <div className="card rounded shadow-sm border-0" style={{ aspectRatio:"1/1.05"}}>
        <div className="card-body p-0">
          <div className="bg-primary px-5 py-4 text-center card-img-top"><img src="https://bootstrapious.com/i/snippets/sn-cards/teacher-4.jpg" alt="..." width="100" className="rounded-circle mb-2 img-thumbnail d-block mx-auto" />
            <h5 className="text-white mb-0">Emma Nevoresky</h5>
            <p className="small text-white mb-0">Elite user</p>
          </div>
          <div className="p-4 d-flex justify-content-center">
            <ul className="list-inline mb-0">
              <li className="list-inline-item">
                <h5 className="font-weight-bold mb-0 d-block">241</h5><small className="text-muted"><i className="fa fa-picture-o mr-1 text-primary"></i>Photos</small>
              </li>
              <li className="list-inline-item">
                <h5 className="font-weight-bold mb-0 d-block">84K</h5><small className="text-muted"><i className="fa fa-user-circle-o mr-1 text-primary"></i>Followers</small>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>

    <div className="col-lg-3 col-md-6 mb-4 mb-lg-0">
      {/* <!-- Card--> */}
      <div className="card rounded shadow-sm border-0" style={{ aspectRatio:"1/1.05"}}>
        <div className="card-body p-0">
          <div className="bg-success px-5 py-4 text-center card-img-top"><img src="https://bootstrapious.com/i/snippets/sn-cards/teacher-2.jpg" alt="..." width="100" className="rounded-circle mb-2 img-thumbnail d-block mx-auto" />
            <h5 className="text-white mb-0">Samuel Hardy</h5>
            <p className="small text-white mb-0">Elite user</p>
          </div>
          <div className="p-4 d-flex justify-content-center">
            <ul className="list-inline mb-0">
              <li className="list-inline-item">
                <h5 className="font-weight-bold mb-0 d-block">241</h5><small className="text-muted"><i className="fa fa-picture-o mr-1 text-success"></i>Photos</small>
              </li>
              <li className="list-inline-item">
                <h5 className="font-weight-bold mb-0 d-block">84K</h5><small className="text-muted"><i className="fa fa-user-circle-o mr-1 text-success"></i>Followers</small>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>

    <div className="col-lg-3 col-md-6 mb-4 mb-lg-0">
      {/* <!-- Card--> */}
      <div className="card rounded shadow-sm border-0" style={{ aspectRatio:"1/1.05"}}>
        <div className="card-body p-0">
          <div className="bg-info px-5 py-4 text-center card-img-top"><img src="https://bootstrapious.com/i/snippets/sn-cards/teacher-7.jpg" alt="..." width="100" className="rounded-circle mb-2 img-thumbnail d-block mx-auto" />
            <h5 className="text-white mb-0">Tom Sunderland</h5>
            <p className="small text-white mb-0">Elite user</p>
          </div>
          <div className="p-4 d-flex justify-content-center">
            <ul className="list-inline mb-0">
              <li className="list-inline-item">
                <h5 className="font-weight-bold mb-0 d-block">241</h5><small className="text-muted"><i className="fa fa-picture-o mr-1 text-info"></i>Photos</small>
              </li>
              <li className="list-inline-item">
                <h5 className="font-weight-bold mb-0 d-block">84K</h5><small className="text-muted"><i className="fa fa-user-circle-o mr-1 text-info"></i>Followers</small>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>

    <div className="col-lg-3 col-md-6 mb-4 mb-lg-0">
      {/* <!-- Card--> */}
      <div className="card rounded shadow-sm border-0" style={{ aspectRatio:"1/1.05"}}>
        <div className="card-body p-0">
          <div className="bg-warning px-5 py-4 text-center card-img-top"><img src="https://bootstrapious.com/i/snippets/sn-cards/teacher-1.jpg" alt="..." width="100" className="rounded-circle mb-2 img-thumbnail d-block mx-auto" />
            <h5 className="text-white mb-0">John Tarly</h5>
            <p className="small text-white mb-0">Elite user</p>
          </div>
          <div className="p-4 d-flex justify-content-center">
            <ul className="list-inline mb-0">
              <li className="list-inline-item">
                <h5 className="font-weight-bold mb-0 d-block">241</h5><small className="text-muted"><i className="fa fa-picture-o mr-1 text-warning"></i>Photos</small>
              </li>
              <li className="list-inline-item">
                <h5 className="font-weight-bold mb-0 d-block">84K</h5><small className="text-muted"><i className="fa fa-user-circle-o mr-1 text-warning"></i>Followers</small>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>


  {/* <!-- First Row [Statistics]--> */}
  <h2 className="font-weight-bold mb-2">Latest Statistics</h2>
  <p className="font-italic text-muted mb-4">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt.</p>

  <div className="row pb-5" style={{maxWidth:"100%"}}>
    <div className="col-lg-3 col-md-6 mb-4 mb-lg-0">
      {/* <!-- Card--> */}
      <div className="card rounded shadow-sm border-0" style={{ aspectRatio:"1/1"}}>
        <div className="card-body p-4"> <BarChart className="text-primary mb-3"  size="40px"/>
          <h5>Products Sales</h5>
          <p className="small text-muted font-italic">Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
          <div className="progress rounded-pill">
            <div role="progressbar" aria-valuenow="70" aria-valuemin="0" aria-valuemax="100" style={{width: "70%"}} className="progress-bar rounded-pill"></div>
          </div>
        </div>
      </div>
    </div>

    <div className="col-lg-3 col-md-6 mb-4 mb-lg-0">
      {/* <!-- Card --> */}
      <div className="card rounded shadow-sm border-0" style={{ aspectRatio:"1/1"}}>
        <div className="card-body p-5"><ListTask className="text-success mb-3"  size="40px"/>
          <h5>Completed Tasks</h5>
          <p className="small text-muted font-italic">Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
          <div className="progress rounded-pill">
            <div role="progressbar" aria-valuenow="80" aria-valuemin="0" aria-valuemax="100" style={{width: "80%"}} className="progress-bar bg-success rounded-pill"></div>
          </div>
        </div>
      </div>
    </div>

    <div className="col-lg-3 col-md-6 mb-4 mb-lg-0">
      {/* <!-- Card --> */}
      <div className="card rounded shadow-sm border-0" style={{ aspectRatio:"1/1"}}>
        <div className="card-body p-4"><Person className="text-info mb-3"  size="40px"/>
          <h5>New Users</h5>
          <p className="small text-muted font-italic">Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
          <div className="progress rounded-pill">
            <div role="progressbar" aria-valuenow="70" aria-valuemin="0" aria-valuemax="100" style={{width: "70%"}} className="progress-bar bg-info rounded-pill"></div>
          </div>
        </div>
      </div>
    </div>

<div className="col-lg-3 col-md-6 mb-4 mb-lg-0">
      {/* <!-- Card --> */}
      <div className="card rounded shadow-sm border-0" style={{ aspectRatio:"1/1"}}>
        <div className="card-body p-4"><BagPlus className="text-warning mb-3"  size="40px"/>
          <h5>New Products</h5>
          <p className="small text-muted font-italic">Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
          <div className="progress rounded-pill">
            <div role="progressbar" aria-valuenow="70" aria-valuemin="0" aria-valuemax="100" style={{width: "70%"}} className="progress-bar bg-warning rounded-pill"></div>
          </div>
        </div>
      </div>
    </div>

  </div>
</div>
        
        </>
    )
}

export default Recomended_products