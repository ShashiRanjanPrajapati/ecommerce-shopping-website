import React from "react"
import "../../styles/slider.css"

class Slider extends React.Component{
    render(){
        return(
            <div className="slider">
                <div id="carouselExampleCaptions" className="carousel slide" data-bs-ride="carousel">
                    <div className="carousel-indicators">
                        <button  data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                        <button  data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
                        <button  data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
                        <button  data-bs-target="#carouselExampleCaptions" data-bs-slide-to="3" aria-label="Slide 4"></button>
                    </div>
                    <div className="carousel-inner">
                        <div className="carousel-item active">
                            <img src="../../assets/images/slider2.png" className="d-block w-100 img-fluid" alt="..." />
                            <div className="carousel-caption d-md-block">
                                <h1>All in one</h1>
                                <p>Grocery</p>
                            </div>
                        </div>

                        <div className="carousel-item">
                            <img src="../../assets/images/slider1.png" className="d-block img-fluid " alt="..." />
                            <div className="carousel-caption d-md-block">
                                <h1>Delicious Food</h1>
                                <p>Restaurant</p>
                            </div>
                        </div>

                        <div className="carousel-item">
                            <img src="../../assets/images/slider3.png" className="d-block w-100 img-fluid" alt="..." />
                            <div className="carousel-caption d-md-block">
                                <h1>New Arrival in Market</h1>
                                <p>Jewellery</p>
                            </div>
                        </div>

                        <div className="carousel-item">
                            <img src="../../assets/images/slider4.png" className="d-block w-100 img-fluid" alt="..." />
                            <div className="carousel-caption d-md-block">
                                <h1>Best brands are here</h1>
                                <p>Electronics</p>
                            </div>
                        </div>

                    </div>
                    <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Previous</span>
                    </button>
                    <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Next</span>
                    </button>
                </div>
            </div>
        )
    }
}
export default Slider