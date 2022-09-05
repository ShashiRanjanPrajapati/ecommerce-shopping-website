import React from "react"
import "../../styles/banner.css"
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
        768: {
            items: 2
          },

        1000: {
            items: 3
        }
        
    }
}


class Bannersec extends React.Component {

    render(props){
        return(
            // <div className="item">
            //     <div className="product_section shadow">
            //     <img src={this.props.image} alt={this.props.name} />
            //     <h6>{this.props.name}</h6>
            //     </div>
            // </div>
            <div className="item">
                <div className="col-md-11 m-auto">
                    <img src={this.props.image} alt={this.props.name} />
                </div>
            </div>
        )
    } 
}


class Banner extends React.Component{
    render(){
        return(
            <div className="banner my-5">
               <div className="col-md-12">
                    <div className="row px-0 mx-0">
                         <div className="col-md-10 m-auto">
                            <OwlCarousel className="owl-theme" loop nav {...options}>
                                <Bannersec image="../../assets/images/banner1.jpg" className="img-fluid shadow img1" />
                                <Bannersec image="../../assets/images/banner2.jpg" className="img-fluid shadow img1" />
                                <Bannersec image="../../assets/images/banner3.jpg" className="img-fluid shadow img1" />
                                <Bannersec image="../../assets/images/banner4.jpg" className="img-fluid shadow img1" />
                                <Bannersec image="../../assets/images/banner5.jpg" className="img-fluid shadow img1" />
                                <Bannersec image="../../assets/images/banner6.jpg" className="img-fluid shadow img1" />
                            </OwlCarousel>
                         </div>
                    </div>
               </div>

               
            </div>
        )
    }
}
export default Banner