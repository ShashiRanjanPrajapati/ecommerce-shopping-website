import React from "react"
import "../../styles/signup.css"
import { Link } from "react-router-dom"

export class SignUp extends React.Component{
    render(){
        return(
            <div className="signup_page">
                <div className="col-md-12">
                    <div className="row px-0 mx-0">
                        <div className="col-md-5 py-4 bg-white shadow-sm m-auto signup">
                            <h5>Sign Up</h5>
                            <form>
                                <div className="row">
                                    <div className="col-md-6 mt-4">
                                        <input type="text" name="name" placeholder="Name" className="px-3" />
                                        <p className="Errormsg">please fill your name</p>
                                     </div>

                                     <div className="col-md-6 mt-4">
                                        <input type="number" name="mobile" placeholder="10-digit mobile number" className="px-3" />
                                        <p className="Errormsg">Enter 10 digit number</p>
                                     </div>

                                     <div className="col-md-6 mt-3">
                                        <input type="email" name="email" placeholder="Email" className="px-3" />
                                        <p className="Errormsg">Enter Email Id</p>
                                     </div>

                                     <div className="col-md-6 mt-3">
                                        <input type="number" name="pincode" placeholder="Pincode" className="px-3" />
                                        <p className="Errormsg">Wrong pincode</p>
                                     </div>

                                     <div className="col-md-6 mt-3">
                                        <input type="text" name="Locality" placeholder="Locality" className="px-3" />
                                     </div>
                                     <div className="col-md-6 mt-3">
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


                                     <div className="col-md-12 mt-3">
                                        <textarea name="address" placeholder="Address (Area and street)" className="p-3" rows="3" />
                                        <p className="Errormsg">Enter Address</p>
                                     </div> 


                                     <div className="col-md-6 mt-3">
                                        <input type="text" name="Town" placeholder="Town" className="px-3" />
                                     </div>

                                     <div className="col-md-6 mt-3">
                                        <input type="text" name="District" placeholder="District" className="px-3" />
                                     </div>

                                     <div className="col-md-6 mt-3">
                                        <input type="text" name="City" placeholder="City" className="px-3" />
                                     </div>

                                     <div className="col-md-6 mt-3">
                                            <select className="px-3">
                                                <option selected disabled value="">Choose State</option>
                                                <option value="Andaman Nicobar">Andaman Nicobar</option>
                                                <option value="Andhra Pradesh">Andhra Pradesh</option>
                                                <option value="Arunachal Pradesh">Arunachal Pradesh</option>
                                                <option value="Assam">Assam</option>
                                                <option value="Bihar">Bihar</option>
                                                <option value="Chandigarh">Chandigarh</option>
                                                <option value="Chhattisgarh">Chhattisgarh</option>
                                                <option value="Dadra Nagar Haveli">Dadra Nagar Haveli</option>
                                                <option value="Daman Diu">Daman Diu</option>
                                                <option value="Delhi">Delhi</option>
                                                <option value="Goa">Goa</option>
                                                <option value="Gujarat">Gujarat</option>
                                                <option value="Haryana">Haryana</option>
                                                <option value="Himachal Pradesh">Himachal Pradesh</option>
                                                <option value="Jammu Kashmir">Jammu Kashmir</option>
                                                <option value="Jharkhand">Jharkhand</option>
                                                <option value="Karnataka">Karnataka</option>
                                                <option value="Kerala">Kerala</option>
                                                <option value="Ladakh">Ladakh</option>
                                                <option value="Lakshadweep">Lakshadweep</option>
                                                <option value="Madhya Pradesh">Madhya Pradesh</option>
                                                <option value="Maharashtra">Maharashtra</option>
                                                <option value="Manipur">Manipur</option>
                                                <option value="Meghalaya">Meghalaya</option>
                                                <option value="Mizoram">Mizoram</option>
                                                <option value="Nagaland">Nagaland</option>
                                                <option value="Odisha">Odisha</option>
                                                <option value="Puducherry">Puducherry</option>
                                                <option value="Punjab">Punjab</option>
                                                <option value="Rajasthan">Rajasthan</option>
                                                <option value="Sikkim">Sikkim</option>
                                                <option value="Tamil Nadu">Tamil Nadu</option>
                                                <option value="Telangana">Telangana</option>
                                                <option value="Tripura">Tripura</option>
                                                <option value="Uttar Pradesh">Uttar Pradesh</option>
                                                <option value="West Bengal">West Bengal</option>
                                            </select>
                                     </div>

                                     <div className="col-md-6 mt-3">
                                        <input type="text" name="houseno" placeholder="House Number (optional) " className="px-3" />
                                     </div>
                                     <div className="col-md-6 mt-3">
                                        <input type="text" name="Altnumber" placeholder="Alternate phone (Optional) " className="px-3" />
                                     </div>

                                     <div className="col-md-12 mt-4">
                                        <button type="submit" className="save_btn">Save</button>

                                        <button type="reset" className="cancle_btn">Cancle</button>
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