import React from "react";
import "../../styles/singleProduct.css";
import {useSelector} from "react-redux";

const ReviewDesc = () => {


   const desc = () => {
        if(document.getElementById("dsec").style.display === "none"){
            document.getElementById("dsec").style.display = "block";
            document.getElementById("rsec").style.display = "none";
            
            document.getElementById("tabdescription").style.backgroundColor = "#f1b317";
            document.getElementById("tabreview").style.backgroundColor = "#fff";

        }
    }
   const review = () =>{
        if(document.getElementById("rsec").style.display === "none"){
            document.getElementById("rsec").style.display = "block";
            document.getElementById("dsec").style.display = "none";

            document.getElementById("tabdescription").style.backgroundColor = "#fff";
            document.getElementById("tabreview").style.backgroundColor = "#f1b317";
            document.getElementById("tabreview").style.borderTopLeftRadius = "10px";
            document.getElementById("tabreview").style.borderTopRightRadius = "10px";
        }
    }


    
    const state = useSelector((state) => state.selectProduct) 
  
    return(
        <div className="Review_desc">
            <div className="col-md-12">
                <div className="row px-0 mx-0">
                    <div className="col-md-12 px-0 review_desc">
                        <div className="propage-tab">
                            <ul className="nav nav-tabs">
                                <li onClick={desc} id="tabdescription">
                                    <a href="javascript:void()" data-toggle="tab" aria-expanded="true">Description</a>
                                </li>
                                <li onClick={review} id="tabreview">
                                    <a href="javascript:void()" data-toggle="tab" aria-expanded="false">Reviews (0)</a>
                                </li>
                            </ul>
                        </div>
                    </div>



                    <div className="col-md-12 Description_sec" id="dsec">
                        <span>{state.description}
                        </span>
                    </div>

                    <div className="col-md-12 Review_sec" id="rsec" style={{display:'none'}}>
                       <h6>Write A Review</h6>
                       <form action="">
                            <div className="row mt-5">
                                <div className="col-md-2">
                                    <label>Your Name</label>
                                </div> 
                                <div className="col-md-9">
                                    <input type="text" className="px-3" placeholder="Enter your name" />    
                                </div>   
                            </div>

                            <div className="row mt-3">
                                <div className="col-md-2">
                                    <label>Your Review</label>
                                </div> 
                                <div className="col-md-9">
                                    <textarea rows="5" className="px-4 py-2" placeholder="Write your review..." />
                                </div>   
                            </div>

                            <div className="row mt-3">
                                <div className="col-md-2 col-2 pt-2">
                                    <label>Rating</label>
                                </div>
                                <div className="col-md-9 col-10">
                                    <input className="star" type="checkbox" data-toggle="tooltip" data-placement="top" title="Very Bad" />
                                    <input className="star" type="checkbox" data-toggle="tooltip" data-placement="top" title="Bad" />
                                    <input className="star" type="checkbox" data-toggle="tooltip" data-placement="top" title="Good" />
                                    <input className="star" type="checkbox" data-toggle="tooltip" data-placement="top" title="Better" />
                                    <input className="star" type="checkbox" data-toggle="tooltip" data-placement="top" title="Best" />
                                   
                                </div>
                            </div>

                            <div className="col-md-11 mt-3">
                                <button type="submit" className="continue">Continue</button>
                            </div>
                       </form>
                    </div>



                </div>
            </div>
        </div>
    )
}

export default ReviewDesc