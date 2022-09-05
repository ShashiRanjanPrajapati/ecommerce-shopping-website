import React from "react"
import "../../styles/profile.css"
import { Link } from "react-router-dom"



class Profile extends React.Component{


    render(){
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



                        <div className="col-md-8 user_profile mb-4 mx-auto shadow-sm">
                            <h5>Personal Information</h5>
                            <form>
                                <div className="row profile_detail" id="viewprofile">
                                    <div className="col-md-5 mt-4">
                                        <input type="text" name="name" className="px-3" placeholder="Name" />
                                        <p className="Errormsg">Enter your name</p>
                                    </div>

                                    <div className="col-md-5 mt-4">
                                        <input type="number" name="phone" className="px-3" placeholder="Phone number"  />
                                        <p className="Errormsg">Enter 10-digit phone number</p>
                                    </div>

                                    <div className="col-md-5 mt-4">
                                        <input type="number" name="pincode" placeholder="Pincode" className="px-3" />
                                        <p className="Errormsg">Wrong pincode</p>
                                     </div>
                                     <div className="col-md-5 mt-4">
                                        <input type="email" name="email" placeholder="Email" className="px-3" />
                                        <p className="Errormsg">Enter Email Id</p>
                                     </div>

                                     <div className="col-md-5 mt-4">
                                        <input type="text" name="Locality" placeholder="Locality" className="px-3" />
                                     </div>

                                    <div className="col-md-5 mt-4">
                                          <label>Gender</label><br></br>
                                          <div class="form-check form-check-inline">
                                             <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio1" value="option1" />
                                             <label class="form-check-label" for="inlineRadio1">Male</label>
                                          </div>
                                          <div class="form-check form-check-inline">
                                             <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio2" value="option2" />
                                             <label class="form-check-label" for="inlineRadio2">Female</label>
                                          </div>
                                     </div>

                                     <div className="col-md-10 mt-3">
                                        <textarea name="address" placeholder="Address (Area and street)" className="p-3" rows="3" />
                                        <p className="Errormsg">Enter Address</p>
                                     </div> 

                                     <div className="col-md-5 mt-4">
                                        <input type="text" name="Town" placeholder="Town" className="px-3" />
                                     </div>

                                     <div className="col-md-5 mt-4">
                                        <input type="text" name="District" placeholder="District" className="px-3" />
                                     </div>

                                     <div className="col-md-5 mt-4">
                                        <input type="text" name="City" placeholder="City" className="px-3" />
                                     </div>

                                     <div className="col-md-5 mt-4">
                                        <input type="text" name="state" placeholder="state" className="px-3" />
                                     </div>

                                     <div className="col-md-5 mt-4">
                                        <input type="text" name="houseno" placeholder="House Number (optional) " className="px-3" />
                                     </div>
                                     <div className="col-md-5 mt-4">
                                        <input type="text" name="Altnumber" placeholder="Alternate phone (Optional) " className="px-3" />
                                     </div>


                                     <div className="col-md-12 mt-4 mb-5">
                                        <div className="Edit_btn shadow">Save</div>
                                     </div>

                                </div>

                            </form>
                        </div>
                      
                    </div>
                </div>
            </div>
        )
    }
}
export default Profile