import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Loader from "../loader/loader";
import { SelectedProduct  } from "../../redux/action/productAction";
import {useDispatch , useSelector} from "react-redux";
import { Cart } from "../../redux/action/productAction";


const Card = ({data}) => {
    const dispatch = useDispatch();
    const singleDetail = (data) => {
        dispatch(SelectedProduct(data));
      }
      const scrollToTop = (e) => {
        window.scrollTo({ top: 0, behavior: `smooth` });
      }

      
    // const state = useSelector((state) => state.Cart); 
  

       const addToCart = (data) => {  
           dispatch(Cart(data));
         }

    return(
        <div className="col-md-4 mt-4" onClick={()=> singleDetail(data)}>
            <Link to="/single-product" onClick={scrollToTop}>
                <div className="pro-box">
                  <div className="pro-img">
                    <img
                      src={data.image}
                      alt={data.title}
                      className="img-fluid"
                    />
                    {/* <a className={data.fav} href="javascript:void()">
                      <i className="fal fa-heart"></i>
                    </a> */}
                  </div>
                  <div className="product-details-wrap">
                    <p>{data.category}</p>
                    <div className="product-details">
                      <h4>{data.title}</h4>
                    </div>
                    <p className="pro-pricing">Rs. {data.price}</p>
                    <div className="product_actions mt-3 mb-2">
                      <p>
                        {data.rating["rate"]} <i className="fas fa-star"></i>
                      </p>
                      <div className="cart_button" onClick={(e)=> { addToCart(data); e.preventDefault() } }>
                        <i className="fas fa-shopping-cart"></i> 
                        <span> Add to Cart</span>
                      </div>
                    </div>
                  </div>
                </div>
            </Link>
          </div>
    )
}

export default Card

