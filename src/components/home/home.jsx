import React from "react"
import About from "../about/about"
import Banner from "../banner/banner"
import Contact from "../contact/contact"
import Footer from "../footer/footer"
import Product from "../product/product"
import Review from "../review/review"
import Slider from "../slider/slider"


class Home extends React.Component{
    render(){
        return( 
            <div className="col-md-12">
                    <Slider />
                    <Banner />
                    <Product />
                    <About />
                    <Review />
                    <Contact />
                    <Footer />
            </div>
               
        )
    }
}
export default Home