import React from "react"
import "../../styles/contact.css"



class Contact extends React.Component{
    render(){
        return(
            <div className="Contact my-5">
                <div className="col-md-12">
                    <div className="row px-0 mx-0">
                        <div className="col-md-10 m-auto">
                            <div className="row">
                                <div className="col-md-5 m-auto contact_section">
                                    <h1>Contact us</h1>
                                    <a href="tel:+91 7016428845" class="contact-box">
                                        <i class="fas fa-phone-alt"></i>
                                        <p>+91 7016428845</p>
                                    </a>
                                    <a href="tel:+91 7016428845" class="contact-box">
                                        <i class="fas fa-envelope"></i>
                                        <p>Dummy654654@gmail.com</p>
                                    </a>
                                    <a href="tel:+91 7016428845" class="contact-box">
                                        <i class="fas fa-home"></i>
                                        <p>27394 Us Hwy #431, Five Points, AL, 36855</p>
                                    </a>
                                </div>




                                <div className="col-md-5 feedback_section">
                                    <div className="row py-5">
                                        <div className="col-md-12">
                                            <input type="text" name="name" className="shadow" placeholder="Enter name" />
                                        </div>
                                        <div className="col-md-12">
                                            <input type="email" name="email" className="shadow"  placeholder="Enter Email" />
                                        </div>
                                        <div className="col-md-12">
                                            <textarea rows="4" name="msg" placeholder="Enter message" className="shadow"  />
                                        </div>
                                        <div className="col-md-12 text-center">
                                            <button type="button" className="submit_btn shadow-lg">Submit</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div> 
                    </div>
                </div>
            </div>          
        )
    }
}
export default Contact