import React, {setState, useState} from "react"
import "../../styles/singleProduct.css"
import Footer from "../footer/footer"
import OwlCarousel from 'react-owl-carousel';
import SingleProductCard from "./singleProductCard";
import {useSelector , useDispatch} from "react-redux"
import ReviewDesc from "./review_description";
import { incNumber , decNumber } from "../../redux/action/quantityAction";
import { SelectedProduct , Cart } from "../../redux/action/productAction";


const SingleProduct =(data)=> {   

    const options1 = {
        margin: 15,
        nav: true,
        navText: ["<div class='nav-button owl-prev'> <span>‹</span> </div>", "<div class='nav-button owl-next'>›</div>"],
        responsive: {
            0: {
              items: 2
            },
            600: {
              items: 2
            },
           
            1000: {
                items: 4
              },
            
        }
    }
    
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
            },
            
        }
    }

    const change1 = () =>{
        if(document.getElementById("item1").style.display === "none"){
            document.getElementById("item1").style.display = "block";
            document.getElementById("item2").style.display = "none";
            document.getElementById("item3").style.display = "none";
            document.getElementById("item4").style.display = "none";

        }
    }
    const change2 = () =>{
        if(document.getElementById("item2").style.display === "none"){
            document.getElementById("item2").style.display = "block";
            document.getElementById("item1").style.display = "none";
            document.getElementById("item3").style.display = "none";
            document.getElementById("item4").style.display = "none";

        }
    }
    const change3 = () =>{
        if(document.getElementById("item3").style.display === "none"){
            document.getElementById("item3").style.display = "block";
            document.getElementById("item2").style.display = "none";
            document.getElementById("item1").style.display = "none";
            document.getElementById("item4").style.display = "none";

        }
    }
    const change4 = () =>{
        if(document.getElementById("item4").style.display === "none"){
            document.getElementById("item4").style.display = "block";
            document.getElementById("item2").style.display = "none";
            document.getElementById("item3").style.display = "none";
            document.getElementById("item1").style.display = "none";

        }
    }

    const state = useSelector((state) => state.selectProduct); 

    const quantity = useSelector((state) => state.changeTheNumber );
    const dispatch = useDispatch();


   const handleQuantity = (e) => {
        const value = e.target.value

        if(value < 0)
            return;
     
           setState({
            quantity : value
        })
    }

    const addToCart = (data) => {  
        dispatch(Cart(data));
      }
    
    return(
        <div className="Singleproduct">
            <div className="col-md-12">
                <div className="row px-0 mx-0">
                    
                    <div className="col-md-10 product_detail m-auto">
                        <div className="row">
                            <div className="col-md-6 p-5">
                                <div className="product_image">
                                    <img src={ state.image} alt={state.title} id="item4" className="img-fluid"  />
                                    {/* <img src={ state.image} alt={ state.title} id="item1" className="img-fluid"  style={{display:'none'}}  />
                                    <img src={ state.image} alt={ state.title} id="item2" className="img-fluid"  style={{display:'none'}} />
                                    <img src={ state.image} alt={ state.title} id="item3" className="img-fluid"  style={{display:'none'}} />
                                     */}
                                </div>
                                {/* <div className="preview_image mt-5">
                                    <OwlCarousel className="owl-theme" loop nav {...options1}>
                                        <div className="prev_img1" onClick={ change1}>
                                            <img src={ state.image} alt={ state.title} className="img-fluid"  />
                                        </div>
                                        <div className="prev_img1" onClick={ change2}>
                                            <img src={ state.image} alt={ state.title} className="img-fluid"  />
                                        </div>
                                        <div className="prev_img1" onClick={ change3}>
                                            <img src={ state.image} alt={ state.title} className="img-fluid" />
                                        </div>
                                        <div className="prev_img1" onClick={ change4}>
                                            <img src={ state.image} alt={ state.title} className="img-fluid" />
                                        </div>
                                    </OwlCarousel>
                                </div> */}
                            </div>


                            <div className="col-md-6 px-5 py-5 pt-5">
                                <p>{state.category}</p>
                                <div className="product_name pt-4">
                                    <h4>{state.title}</h4>
                                </div>

                               

                                <div className="product_price">
                                    <h2 className="over_price">{state.price} <span className="real_price"> ₹4 </span> <span className="off">50% off</span></h2>
                                    <input className="heart" type="checkbox" /> <span className="wishlist">Wishlist</span>
                                </div>

                                {/* <div className="rating">
                                    <i className="fa fa-star yellow"></i>
                                    <i className="fa fa-star yellow"></i>
                                    <i className="fa fa-star yellow"></i>
                                    <i className="fa fa-star"></i>
                                    <i className="fa fa-star"></i>
                                    <div className="review_count">
                                        <p> <span>4</span> reviews</p>
                                    </div>
                                </div> */}
                                <p>
                                    {state.rating["rate"]} <i className="fas fa-star" style={{color:'orange'}}></i>
                                </p>

                                <div className="product-quantity">
                                    <h6>Quantity</h6>
                                    <button className="quantity_minus text-danger" title="Decrement"  onClick={()=> dispatch(decNumber())}> <span> - </span> </button>
                                    <input name="quantity" type="text" className="quantity_input" value={quantity} onChange={handleQuantity} />
                                    <button className="quantity_plus text-info" title="Increment" onClick={()=> dispatch(incNumber()) }> <span> +  </span> </button>
                                </div>

                                <p>Quantity : {quantity * state.price}</p>

                                <div className="add_cart" onClick={()=> addToCart(state)}>
                                    <button className="AddCart">ADD TO CART </button>
                                </div>

                                <div className="About_product">
                                    <h6>About </h6>
                                    <p>{state.description}
                                    </p>
                                </div>

                            </div>
                        </div>
                    </div>











                    {/* review & Description section */}

                    <div className="col-md-10 mt-5 mb-5 m-auto review_desc">
                        <div className="row">
                            <ReviewDesc/>
                        </div>
                    </div>


                    
                    {/* related product */}

                    {/* <div className="col-md-10 related_product m-auto my-5">
                        <h2>Related products</h2>
                        <OwlCarousel className="owl-theme" loop nav {...options}>
                            <SingleProductCard image="../../assets/images/item1.jpg" pname="Corn Tortilla" price="₹ 2" fav="i" />
                            <SingleProductCard image="../../assets/images/item2.jpg" pname="Corn Tortilla" price="₹ 2" fav="i" />
                            <SingleProductCard image="../../assets/images/item3.jpg" pname="Corn Tortilla" price="₹ 2" fav="i" />
                            <SingleProductCard image="../../assets/images/item4.jpg" pname="Corn Tortilla" price="₹ 2" fav="i" />
                            <SingleProductCard image="../../assets/images/item1.jpg" pname="Corn Tortilla" price="₹ 2" fav="i" />
                            <SingleProductCard image="../../assets/images/item2.jpg" pname="Corn Tortilla" price="₹ 2" fav="i" />
                            <SingleProductCard image="../../assets/images/item3.jpg" pname="Corn Tortilla" price="₹ 2" fav="i" />
                            <SingleProductCard image="../../assets/images/item4.jpg" pname="Corn Tortilla" price="₹ 2" fav="i" />
                        </OwlCarousel>

                    </div> */}


                </div>
            </div>

            {/* footer component call */}
                <Footer />
            {/* footer component call */}

        </div>
    )
}
export default SingleProduct