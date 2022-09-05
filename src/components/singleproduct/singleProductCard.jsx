import React from "react"
import { Link } from "react-router-dom"
import {useSelector} from "react-redux"

const SingleProductCard = () => {

    const state = useSelector((state) => state.selectProduct) 

    return(
        <div className="col-md-12 mt-4">
            <Link to ="/single-product" className="remove" >
        <div className="pro-box">
            <div className="pro-img">
                <img src={state.image} alt={state.name} className="img-fluid" />
                <a className={  state.fav}  href="javascript:void()">
                    <i className="fal fa-heart"></i>
                </a>
            </div>
            <div className="product-details-wrap">
                <div className="product-details">
                    <h4>{state.pname}</h4>
                    <p className="pro-pricing">
                        {state.price}
                    </p>
                </div>
                <div className="product_actions mt-3 mb-2">
                    <div className="rating">
                        <i className="fas fa-star yellow"></i>
                        <i className="fas fa-star yellow"></i>
                        <i className="fas fa-star yellow"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                    </div>
                    <div className="cart_button">
                        <i className="fas fa-shopping-cart"></i><span> Add to Cart</span>
                    </div>
                </div>
            </div>
        </div>  
        </Link>
    </div>

    )
}
export default SingleProductCard