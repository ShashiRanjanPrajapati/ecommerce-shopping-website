import React from "react"
import { Link } from "react-router-dom"
import { useSelector } from "react-redux";
import wishlistImg from "./Wishlist.png";

const WishListCard = () => {

   const remove = () => {
       if(document.getElementById("delete").style.display === "none"){
           document.getElementById("delete").style.display = "block";
       }
       else{
           document.getElementById("delete").style.display = "none";
       }
    }

    const wishlistData = useSelector((state) => state.wishlist);

    return(
       <>
        {
            wishlistData.length === 0 ? (
                <div className="row">
                    <div className="col-md-12 text-center">
                        <img src={wishlistImg} className="img-fluid" alt="emptyCart" />
                    </div>
                </div>
            ):(
                wishlistData.map((data , i) => (
                    <div className="col-md-12 py-2 wishlist_cart">
                    <img src={data.image} alt={data.name}/>
    
                <div className="wishlist_detail">
                    <p>{data.title}</p>
                    {/* <div className="rating">
                        <h5>{data.rating}<i class="fas fa-star"></i> </h5>
                    </div> */}
                    <div className="price">
                        <h2> {data.price} <span className="real_price"> </span></h2>
                    </div>
                    <div className="delete_btn" onClick={remove}>
                        <i class="far fa-trash-alt"></i>
                    </div>
                    <div className="want-delete shadow" id="delete" style={{display:'none'}}>
                        <span>Are you sure want to remove this product? </span> <br></br>
                        <p>Cancle</p>
                        <p className="text-danger">Remove</p>
                    </div>
                </div>
                </div>
                ))
            )
        }
       </>
    )
}

export default WishListCard