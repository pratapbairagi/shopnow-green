import { Facebook, Instagram, Linkedin, Twitter } from "react-bootstrap-icons";
import "./about_us.scss";
import { NavLink } from "react-router-dom";


const AboutUs = () => {

    return (
        <>
            <section class="about-section pt-5">
                    <h2>ABOUT US</h2>
                <div class="container">
                    <div class="row">
                        <div class="content-column col-lg-6 col-md-12 col-sm-12 order-2">
                            <div class="inner-column">
                                <div class="sec-title">
                                    <span class="title">About Company</span>
                                    <h2>We are leader in <br />Industrial market Since 1992</h2>
                                </div>
                                <div class="text">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                                    tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                                    quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                                    consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
                                    cillum dolore eu fugiat nulla pariatur.</div>
                                <ul class="list-style-one">
                                    <li>Lorem Ipsum is simply dummy tex</li>
                                    <li>Consectetur adipisicing elit</li>
                                    <li>Sed do eiusmod tempor incididunt</li>
                                </ul>
                                <div class="btn-box">
                                    {/* <a href="#" class="theme-btn btn-style-one">Contact Us</a> */}
                                    <NavLink to="/contact">Contact Us</NavLink>
                                </div>
                            </div>
                        </div>

                        {/* <!-- Image Column --> */}
                        <div class="image-column col-lg-6 col-md-12 col-sm-12">
                            <div class="inner-column wow fadeInLeft">
                                <figure class="image-1">
                                    <a href="#contact" class="lightbox-image" data-fancybox="images">
                                        <img src="https://i.ibb.co/QP6Nmpf/image-1-about.jpg" alt="" />
                                    </a>
                                </figure>
                                <figure class="image-2">
                                    <a href="#contact" class="lightbox-image" data-fancybox="images">
                                        <img src="https://i.ibb.co/JvN0NVB/image-2-about.jpg" alt="" />
                                    </a>
                                </figure>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            
  {/* <!-- Second Row [Team]--> */}
  <h2 className="font-weight-bold mb-2">Our Team</h2>
  <p className="font-italic text-muted mb-4">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt.</p>

  <div className="row pb-5 mb-4">
    <div className="col-lg-3 col-md-6 mb-4 mb-lg-0">
      {/* <!-- Card--> */}
      <div className="card shadow-sm border-0 rounded" style={{ aspectRatio:"1/1.05"}}>
        <div className="card-body p-0"><img src="https://bootstrapious.com/i/snippets/sn-cards/profile-1_dewapk.jpg" alt="" className="w-100 card-img-top" />
          <div className="p-4">
            <h5 className="mb-0">Mark Rockwell</h5>
            <p className="small text-muted">CEO - Consultant</p>
            <ul className="social mb-0 list-inline mt-3">
              <li className="list-inline-item m-0 mx-1"><a href="#home" className="social-link"><Facebook color="grey" size="18px"/></a></li>
              <li className="list-inline-item m-0 mx-1"><a href="#home" className="social-link"><Twitter color="grey" size="18px"/></a></li>
              <li className="list-inline-item m-0 mx-1"><a href="#home" className="social-link"><Instagram color="grey" size="18px"/></a></li>
              <li className="list-inline-item m-0 mx-1"><a href="#home" className="social-link"><Linkedin color="grey" size="18px"/></a></li>
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
              <li className="list-inline-item m-0 mx-1"><a href="#home" className="social-link"><Facebook color="grey" size="18px"/></a></li>
              <li className="list-inline-item m-0 mx-1"><a href="#home" className="social-link"><Twitter color="grey" size="18px"/></a></li>
              <li className="list-inline-item m-0 mx-1"><a href="#home" className="social-link"><Instagram color="grey" size="18px"/></a></li>
              <li className="list-inline-item m-0 mx-1"><a href="#home" className="social-link"><Linkedin color="grey" size="18px"/></a></li>
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
              <li className="list-inline-item m-0 mx-1"><a href="#home" className="social-link"><Facebook color="grey" size="18px"/></a></li>
              <li className="list-inline-item m-0 mx-1"><a href="#home" className="social-link"><Twitter color="grey" size="18px"/></a></li>
              <li className="list-inline-item m-0 mx-1"><a href="#home" className="social-link"><Instagram color="grey" size="18px"/></a></li>
              <li className="list-inline-item m-0 mx-1"><a href="#home" className="social-link"><Linkedin color="grey" size="18px"/></a></li>
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
              <li className="list-inline-item m-0 mx-1"><a href="#home" className="social-link"><Facebook color="grey" size="18px"/></a></li>
              <li className="list-inline-item m-0 mx-1"><a href="#home" className="social-link"><Twitter color="grey" size="18px"/></a></li>
              <li className="list-inline-item m-0 mx-1"><a href="#home" className="social-link"><Instagram color="grey" size="18px"/></a></li>
              <li className="list-inline-item m-0 mx-1"><a href="#home" className="social-link"><Linkedin color="grey" size="18px"/></a></li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
        </>
    )
}

export default AboutUs