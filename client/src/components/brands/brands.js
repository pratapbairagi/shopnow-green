import "./brands.scss";

const Brands = () => {
    return (
        <>
            <h4 style={{margin:"auto", marginTop:"16px", borderBottom:"2px solid grey", width:"max-content"}}>Our Brands</h4>
        <div className="container brand_container mt-2">
        <div className="card">
            <div className="face face1">
                <div className="content">
                    <img src="https://brandongaille.com/wp-content/uploads/2013/06/H-and-M-Company-Logo-Image.jpg" alt="brand 1" />
                    <h3>Design</h3>
                </div>
            </div>
            <div className="face face2">
                <div className="content">
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cum cumque minus iste veritatis provident at.</p>
                        <a href="#h&m">Read More</a>
                </div>
            </div>
        </div>
        <div className="card">
            <div className="face face1">
                <div className="content">
                    <img src="https://cdn.logojoy.com/wp-content/uploads/2018/05/30143428/129.png" alt="nike" />
                    <h3>Code</h3>
                </div>
            </div>
            <div className="face face2">
                <div className="content">
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cum cumque minus iste veritatis provident at.</p>
                        <a href="#nike_details">Read More</a>
                </div>
            </div>
        </div>
        <div className="card">
            <div className="face face1">
                <div className="content">
                    <img src="https://logodownload.org/wp-content/uploads/2014/11/Calvin-klein-logo-9.jpg" alt="Calvin-klein" />
                    <h3>Launch</h3>
                </div>
            </div>
            <div className="face face2">
                <div className="content">
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cum cumque minus iste veritatis provident at.</p>
                        <a href="#calvin_details">Read More</a>
                </div>
            </div>
        </div>

        <div className="card">
            <div className="face face1">
                <div className="content">
                    <img src="https://brandongaille.com/wp-content/uploads/2013/06/Zara-Company-Logo-Image.jpg" alt="Zara" />
                    <h3>Launch</h3>
                </div>
            </div>
            <div className="face face2">
                <div className="content">
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cum cumque minus iste veritatis provident at.</p>
                        <a href="#zara_details">Read More</a>
                </div>
            </div>
        </div>
    </div>
    </>
    )
}
export default Brands