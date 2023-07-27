import {Quote, StarFill, StarHalf} from "react-bootstrap-icons"
import "./review_product.module.scss"

const ReviewProduct = () => {
    return(
        <section className=" px-0 pb-4 " style={{maxWidth:"100%"}}>
  <div className="row d-flex justify-content-center px-0" style={{maxWidth:"100%"}}>
    <div className="col-md-10 col-xl-8 text-center px-0" style={{maxWidth:"100%"}}>
      <h3 className="mb-4">Our Cutomer Reviews</h3>
      {/* <p className="mb-4 pb-2 mb-md-5 pb-md-0">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit, error amet
        numquam iure provident voluptate esse quasi, veritatis totam voluptas nostrum
        quisquam eum porro a pariatur veniam.
      </p> */}
    </div>
  </div>

  <div className="row text-center d-flex align-items-stretch flex-row flex-nowrap px-2" style={{overflow:"scroll", justifyContent:"flex-start", maxWidth:"100%"}}>
    
    <div className="col-md-4 mb-5 mb-md-0 d-flex align-items-stretch" style={{maxWidth:"300px"}}>
      <div className="card testimonial-card" style={{aspectRatio:"1/1"}}>
        <div className="card-up" style={{backgroundColor: "#9d789b"}}></div>
        <div className="avatar mx-auto bg-white">
          <img style={{maxWidth:"160px"}} src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(1).webp" alt="user"
            className="rounded-circle img-fluid" />
        </div>
        <div className="card-body">
          <h4 className="mb-1">Maria Smantha</h4>
          <ul className="list-inline small d-flex flex-row justify-content-center" style={{width:"100%", maxWidth:"150px", margin:"auto"}}>
            <li className="list-inline-item m-0 " style={{ width:"18%"}}><StarFill color="green" size="70%"/></li>
            <li className="list-inline-item m-0" style={{ width:"18%"}}><StarFill color="green" size="70%"/></li>
            <li className="list-inline-item m-0" style={{ width:"18%"}}><StarFill color="green" size="70%"/></li>
            <li className="list-inline-item m-0" style={{ width:"18%"}}><StarFill color="green" size="70%"/></li>
            <li className="list-inline-item m-0" style={{ width:"18%"}}><StarHalf color="green" size="70%"/></li>
          </ul>
          <hr />
          <p className="dark-grey-text mt-4">
          <Quote color="green" size="30px"/>Lorem ipsum dolor sit amet eos adipisci,
            consectetur adipisicing elit.
          </p>
        </div>
      </div>
    </div>

    <div className="col-md-4 mb-5 mb-md-0 d-flex align-items-stretch" style={{maxWidth:"300px"}}>
      <div className="card testimonial-card" style={{aspectRatio:"1/1"}}>
        <div className="card-up" style={{backgroundColor: "#7a81a8"}}></div>
        <div className="avatar mx-auto bg-white">
          <img style={{maxWidth:"160px"}} src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(2).webp" alt="user"
            className="rounded-circle img-fluid" />
        </div>
        <div className="card-body">
          <h4 className="mb-1">Lisa Cudrow</h4>
          <ul className="list-inline small d-flex flex-row justify-content-center" style={{width:"100%", maxWidth:"150px", margin:"auto"}}>
            <li className="list-inline-item m-0 " style={{ width:"18%"}}><StarFill color="green" size="70%"/></li>
            <li className="list-inline-item m-0" style={{ width:"18%"}}><StarFill color="green" size="70%"/></li>
            <li className="list-inline-item m-0" style={{ width:"18%"}}><StarFill color="green" size="70%"/></li>
            <li className="list-inline-item m-0" style={{ width:"18%"}}><StarFill color="green" size="70%"/></li>
            <li className="list-inline-item m-0" style={{ width:"18%"}}><StarHalf color="green" size="70%"/></li>
          </ul>
          <hr />
          <p className="dark-grey-text mt-4">
            <Quote color="green" size="30px"/>Neque cupiditate assumenda in maiores
            repudi mollitia architecto.
          </p>
        </div>
      </div>
    </div>


    <div className="col-md-4 mb-5 mb-md-0 d-flex align-items-stretch" style={{maxWidth:"300px"}}>
      <div className="card testimonial-card" style={{aspectRatio:"1/1"}}>
        <div className="card-up" style={{backgroundColor: "#7a81a8"}}></div>
        <div className="avatar mx-auto bg-white">
        <img style={{maxWidth:"160px"}} src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(9).webp" alt="user"
            className="rounded-circle img-fluid" />
        </div>
        <div className="card-body">
          <h4 className="mb-1">John Smith</h4>
          <ul className="list-inline small d-flex flex-row justify-content-center" style={{width:"100%", maxWidth:"150px", margin:"auto"}}>
            <li className="list-inline-item m-0 " style={{ width:"18%"}}><StarFill color="green" size="70%"/></li>
            <li className="list-inline-item m-0" style={{ width:"18%"}}><StarFill color="green" size="70%"/></li>
            <li className="list-inline-item m-0" style={{ width:"18%"}}><StarFill color="green" size="70%"/></li>
            <li className="list-inline-item m-0" style={{ width:"18%"}}><StarFill color="green" size="70%"/></li>
            <li className="list-inline-item m-0" style={{ width:"18%"}}><StarHalf color="green" size="70%"/></li>
          </ul>
          <hr />
          <p className="dark-grey-text mt-4">
            <Quote color="green" size="30px"/>Neque cupiditate assumenda in maiores
            repudi mollitia architecto.
          </p>
        </div>
      </div>
    </div>

  </div>
</section>
    )
}

export default ReviewProduct