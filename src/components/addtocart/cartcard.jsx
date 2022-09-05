import React, { setState, useState } from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import "../../styles/singleProduct.css";
import emptyCart from "./empty-cart.png";
import { WishList , selectProduct } from "../../redux/action/productAction";


const CartCard = () => {
  const cartData = useSelector((state) => state.Cart);

  const state = useSelector((state) => state.selectProduct); 

  const dispatch = useDispatch();

  const wishlist = (data) => {  
    dispatch(WishList(data));
  }

  return (
    <>
      {
      cartData.length === 0 ? (
        <div className="row">
            <div className="col-md-12 text-center">
                <img src={emptyCart} className="img-fluid" alt="emptyCart" />
            </div>
        </div>
      ) : (
        cartData.map((data, i) => (
            <div className="row mx-0 border-bottom">
              {/* <div className="select">
                <input type="checkbox" />
              </div> */}
              <div className="product__image col-md-3">
                <img
                  src={data.data.image}
                  alt={data.data.image}
                  className="img-fluid"
                />
                <br></br>
              </div>
    
              <div className="product_desc py-2 col-md-5">
                <h5>{data.data.title}</h5>
                <p className="stock">In Stock</p>
                <div className="product_price mb-2">
                  <h2 className="text-danger">
                    Rs {data.data.price} <span className="real_price"> </span>
                  </h2>
                 
                </div>
                {/* <p>
                    {data.data.rating["rate"]} <i className="fas fa-star" style={{color:'orange'}}></i>
                </p> */}
    
                <div className="other_action">
                  <a href="javascript:void()">Delete</a>
                  <input className="heart" type="checkbox" onClick={()=> wishlist(state)} />
                  <span className="wishlist" >Wishlist</span>
                </div>
              </div>
              <div className="col-md-3 delivery_detail">
                    <p>22/07/2023</p>
                    <h2>Delivery Charge : Free</h2>      
              </div>
            </div>
          ))
      )}
    </>
  );
};

export default CartCard;
