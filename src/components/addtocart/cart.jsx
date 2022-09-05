import React, { useEffect, useState } from "react";
import "../../styles/cart.css";
import CartCard from "./cartcard";
import axios from "axios";
import { useSelector, useDispatch } from "react-redux";
import emptyCart from "./empty-cart.png";

const Cart = (data) => {
  const cartData = useSelector((state) => state.Cart);

  return (
    <div className="Cart">
      <div className="col-md-12">
        <div className="row px-0 mx-0">
          <div className="col-md-12 m-auto ">
            <div className="row">
              {cartData.length === 0 ? (
                <>
                  <div className="col-md-12 text-center">
                    <img
                      src={emptyCart}
                      className="img-fluid"
                      alt="emptyCart"
                    />
                  </div>
                </>
              ) : (
                <>
                  <div className="col-md-8 cart_section px-0 mx-auto bg-white">
                    <h6>My Cart ({cartData.length})</h6>
                    <CartCard />
                  </div>


                 
                  <div className="col-md-3 price-card-section bg-white px-0 mx-auto">
                    <div className="border-bottom price-heading pt-3 px-4">
                      <p>PRICE DETAILS</p>
                    </div>
                    <div className="buy-item-price">
                      <div className="price">
                        <p>Price</p>
                        <p> 120 </p>
                      </div>
                      <div className="price">
                        <p>Delivery Charges</p>
                        <p>FREE</p>
                      </div>
                      <div className="total-amount">
                        <p>Total Amount</p>
                        <p>₹959</p>
                      </div>
                      <button>Place Order</button>
                    </div>
                  </div>
                    
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
