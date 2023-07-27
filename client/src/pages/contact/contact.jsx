import "./contact.scss";
import { Github, Twitter, Instagram, Facebook, SendFill,  MapFill, EnvelopePaperFill, TelephoneFill, Linkedin } from "react-bootstrap-icons"

const Contact = () => {
    // document.querySelector('#contact-form').addEventListener('submit', (e) => {
    //     e.preventDefault();
    //     e.target.elements.name.value = '';
    //     e.target.elements.email.value = '';
    //     e.target.elements.message.value = '';
    // });
    return (
        <>
            <section id="contact">

                <h1 className="section-header text-dark mt-0" style={{fontSize:"32px", fontWeight:"600"}}>Contact</h1>

                <div className="contact-wrapper bg-light">

                    {/* <!-- Left contact page -->  */}

                    <form id="contact-form p-0" className="form-horizontal" style={{ width:"100%"}}>

                        <div className="form-group" style={{ maxWidth:"100vw"}}>
                            <div className="col-sm-12">
                                <input type="text" className="form-control bg-white" id="name" placeholder="NAME" name="name" value="" required />
                            </div>
                        </div>

                        <div className="form-group mt-2" style={{ maxWidth:"100vw"}}>
                            <div className="col-sm-12">
                                <input style={{maxWidth:"100%"}} type="email" className="form-control bg-white" id="email" placeholder="EMAIL" name="email" value="" required />
                            </div>
                        </div>

                        <textarea className="form-control m-0 mt-2 bg-white" style={{ maxWidth:"100vw"}} rows="10" placeholder="MESSAGE" name="message" required></textarea>

                        <button className="btn btn-primary send-button" style={{ maxWidth:"100vw"}} id="submit" type="submit" value="SEND">
                            <div className="alt-send-button p-0"  style={{ width:"100%"}}>
                                <SendFill size="17" />
                                <span className="send-text">SEND</span>
                            </div>

                        </button>

                    </form>

                    {/* <!-- Left contact page -->  */}

                    <div className="direct-contact-container ">

                        <ul className="contact-list d-flex flex-column gap-3 m-auto px-1">
                            <li className="list-item"  style={{ display: "flex", justifyContent: "space-between", alignItems: "center", width:"100%" }}><MapFill size="25" /><span className="contact-text place">City, State</span></li>

                            <li className="list-item" style={{ display: "flex", justifyContent: "space-between", alignItems: "center", width:"100%" }}><TelephoneFill size="25" /><span className="contact-text phone"><a href="tel:1-212-555-5555" title="Give me a call">(212) 555-2368</a></span></li>

                            <li className="list-item" style={{ display: "flex", justifyContent: "space-between", alignItems: "center", width:"100%" }}><EnvelopePaperFill size="25" /><span className="contact-text gmail"><a href="mailto:#" title="Send me an email">hitmeup@gmail.com</a></span></li>

                        </ul>

                        <hr />
                        <ul className="social-media-list">
                            <li><a href="#link" className="contact-icon">
                                <Twitter color="grey" size="32px" />

                            </a>
                            </li>
                            <li><a href="#link" className="contact-icon">
                                <Facebook color="grey" size="32px" />

                            </a>
                            </li>
                            <li><a href="#link" className="contact-icon">
                                <Instagram color="grey" size="32px" />
                            </a>
                            </li>
                            <li><a href="#link" className="contact-icon">
                                <Github color="grey" size="32px" />

                            </a>
                            </li>
                        </ul>
                        <hr />

                        <div className="copyright">&copy; ALL OF THE RIGHTS RESERVED</div>

                    </div>

                </div>

                <h2 className="mt-4">Our Address</h2>
                <div className="map">
                    <iframe title="map"
                        src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d48389.78314118045!2d-74.006138!3d40.710059!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xb89d1fe6bc499443!2sDowntown%20Conference%20Center!5e0!3m2!1sen!2sbg!4v1666857692914!5m2!1sen!2sbg"
                        width="600"
                        height="450"
                        style={{ border: "0" }}
                        allowfullscreen=""
                        loading="lazy"
                        referrerpolicy="no-referrer-when-downgrade"
                    ></iframe>
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
              <li className="list-inline-item m-0 mx-1"><a href="#home" className="social-link"><Facebook color="grey" size="16px"/></a></li>
              <li className="list-inline-item m-0 mx-1"><a href="#home" className="social-link"><Twitter color="grey" size="16px"/></a></li>
              <li className="list-inline-item m-0 mx-1"><a href="#home" className="social-link"><Instagram color="grey" size="16px"/></a></li>
              <li className="list-inline-item m-0 mx-1"><a href="#home" className="social-link"><Linkedin color="grey" size="16px"/></a></li>
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
              <li className="list-inline-item m-0 mx-1"><a href="#home" className="social-link"><Facebook color="grey" size="16px"/></a></li>
              <li className="list-inline-item m-0 mx-1"><a href="#home" className="social-link"><Twitter color="grey" size="16px"/></a></li>
              <li className="list-inline-item m-0 mx-1"><a href="#home" className="social-link"><Instagram color="grey" size="16px"/></a></li>
              <li className="list-inline-item m-0 mx-1"><a href="#home" className="social-link"><Linkedin color="grey" size="16px"/></a></li>
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
              <li className="list-inline-item m-0 mx-1"><a href="#home" className="social-link"><Facebook color="grey" size="16px"/></a></li>
              <li className="list-inline-item m-0 mx-1"><a href="#home" className="social-link"><Twitter color="grey" size="16px"/></a></li>
              <li className="list-inline-item m-0 mx-1"><a href="#home" className="social-link"><Instagram color="grey" size="16px"/></a></li>
              <li className="list-inline-item m-0 mx-1"><a href="#home" className="social-link"><Linkedin color="grey" size="16px"/></a></li>
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
              <li className="list-inline-item m-0 mx-1"><a href="#home" className="social-link"><Facebook color="grey" size="16px"/></a></li>
              <li className="list-inline-item m-0 mx-1"><a href="#home" className="social-link"><Twitter color="grey" size="16px"/></a></li>
              <li className="list-inline-item m-0 mx-1"><a href="#home" className="social-link"><Instagram color="grey" size="16px"/></a></li>
              <li className="list-inline-item m-0 mx-1"><a href="#home" className="social-link"><Linkedin color="grey" size="16px"/></a></li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>


        </>
    )
}

export default Contact