import React from "react"
import "../../styles/wishlist.css"
import { Link } from "react-router-dom"
import WishListCard from "./wishlistcard";
import { useSelector } from "react-redux";


const WishlistSec = (data) =>{
   const wishlistData = useSelector((state) => state.wishlist);

    return(
        <div className="profile_page">
            <div className="col-md-12">
                <div className="row px-0 mx-0">
                    <div className="col-md-3 side__menu px-0 bg-white mb-4 mx-auto">
                        <div className="profile_box px-2">
                             <img src="../../assets/images/profile.jpg" alt="" />
                             <div className="profile_content px-2">
                                <h6>Hello,</h6>
                                <p>Shashi Ranjan</p>
                             </div>
                        </div>

                        <div className="spacer"></div>

                        <Link to="/profile" className="remove">
                          <div className="profile__submenu">
                             <i class="fas fa-user-circle"></i> <h6>My Profile</h6>
                          </div>
                       </Link>

                       <Link to="/wishlist" className="remove">
                          <div className="profile__submenu">
                             <i class="fas fa-heart"></i> <h6>Wishlist</h6>  
                          </div>
                       </Link>
                        

                       <Link to="/order" className="remove">
                          <div className="profile__submenu">
                             <i class="fas fa-wallet"></i> <h6>Orders</h6>
                          </div>
                       </Link>

                       <div className="profile__submenu">
                          <i class="fas fa-power-off"></i> <h6>LogOut</h6>
                       </div>
                          
                    </div>


                    <div className="col-md-8 wishlist_section mb-4 mx-auto  shadow-sm">
                        <div className="row px-0">
                            <h6>My Wishlist ({wishlistData.length})</h6> 
                              <WishListCard />
                            
                        </div>
                    </div>


                </div>
            </div>
        </div>
    )

}


export default WishlistSec