import React from "react"
import "../../styles/review.css"
import OwlCarousel from 'react-owl-carousel';

const options = {
    margin: 15,
    nav: true,
    navText: ["<div class='nav-button owl-prev'> <span>‹</span> </div>", "<div class='nav-button owl-next'>›</div>"],
    responsive: {
        0: {
          items: 1
        },
        600: {
          items: 1
        },
        1000: {
            items: 1
        },
        
    }
}

class Review extends React.Component{
    render(){
        return(
            <div className="review my-5">
                <div className="col-md-12">
                    <div className="row px-0 mx-0">
                        <div className="col-md-8 m-auto">
                            <h1 className="review_title">Our Reviews</h1>
                            <OwlCarousel className="owl-theme" loop nav {...options}>
                                <div className="item">
                                    <div className="review_section text-center col-md-12">
                                        <img src="../../assets/images/review.png" className="img-fluid shadow-sm" alt="img" />
                                        <h6>hello</h6>
                                    </div>
                                </div>
                                <div className="item">
                                    <div className="review_section text-center col-md-12">
                                        <img src="../../assets/images/review.png" className="img-fluid shadow-sm" alt="img" />
                                        <h6>hello</h6>
                                    </div>
                                </div>
                                <div className="item">
                                    <div className="review_section text-center col-md-12">
                                        <img src="../../assets/images/review.png" className="img-fluid shadow-sm" alt="img" />
                                        <h6>hello</h6>
                                    </div>
                                </div>
                            </OwlCarousel>
                        </div>
                    </div>
                </div>

                <div className="col-md-12 playstore mt-5">
                    <div className="row px-0 mx-0">
                        <div className="col-md-1"></div>
                        <div className="col-md-5 order_sec">
                            <h3>Order food directly from your phone</h3>
                            <p>Search for Restaurant App in the App Store and Google Play Store. Enjoy your food on the go!</p>
                        </div>
                        <div className="col-md-5">
                           <div className="row">
                                <div className="col-md-12">
                                    <img src="../../assets/images/apple-store.svg" className="img-fluid apple" alt="playstore" />
                                </div>
                                <div className="col-md-12">
                                    <img src="../../assets/images/play-store.png" className="img-fluid play" alt="playstore" />
                                </div>
                           </div>
                        </div>
                        <div className="col-md-1">

                        </div>
                    </div>
                </div>

            </div>
        )    
    }
}

export default Review