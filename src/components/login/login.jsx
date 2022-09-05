import React from "react"
import "../../styles/login.css"
import { Link } from "react-router-dom"

export class Login extends React.Component{
    render(){
        return(
            <div className="login_page">
                <div className="col-md-12">
                    <div className="row px-0 mx-0">
                         
                        <div className="col-md-4 m-auto bg-white shadow-sm">
                            <div className="row">
                                {/* <div className="col-md-6 py-5 text-center">
                                    <img src="../../assets/images/login.jpg" className="img-fluid" />
                                </div> */}
                                
                                <div className="col-md-12 login_form">
                                   
                                    <h2>Login</h2>
                                    <form className="mt-5 mb-5">
                                        <div className="form-group">
                                            <label for="email"><i className="zmdi zmdi-email-open material-icons-name"></i></label>
                                            <input type="email" name="email" id="email" placeholder="Enter Email" />
                                        </div>
                                        <p className="Error_msg">Enter valid Email Id</p>

                                        <div className="form-group">
                                            <label for="password"><i className="zmdi zmdi-key material-icons-name"></i></label>
                                            <input type="password" name="password" id="password" placeholder="Password" />
                                        </div>
                                        <p className="Error_msg">Wrong Password</p>

                                        <span className="privacy">By continuing, you agree to Our
                                            <Link to="/" className="remove" > Terms of Use </Link> and 
                                            <Link to="/" className="remove"> Privacy Policy </Link>.
                                        </span><br></br><br></br>

                                        <button type="submit" className="login_button">Login</button>

                                        <div className="login_with">
                                            <h6>Login with</h6>
                                            <i class="fab fa-facebook-f"></i>
                                            <i class="fab fa-google"></i>
                                        </div>

                                        {/* <h6 className="text-center OR_sec">OR</h6>

                                        <button type="submit" className="Request_button shadow">Request OTP</button> */}

                                        <p className="signuptitle">No account yet ? <Link to="/signup" className="remove" > Create  an account </Link> </p>
                                        
                                    </form>
                                </div>


                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}