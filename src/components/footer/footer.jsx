import React from "react"
import "../../styles/footer.css"



class Footer extends React.Component{
    render(){
        return(
            <div className="footer">
                <div className="col-md-12">
                    <div className="row px-0 mx-0">
                        <div className="col-md-12 footer_section">
                            <div className="row">
                                <div className="col-md-1"></div>
                                <div className="col-md-4 footer-about pt-5">
                                    <div class="footer-logo">
                                        <img src="../../assets/images/logo.png" className="img-fluid" alt="" />
                                    </div>
                                    <p>About  is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type a...</p>
                                 
                                </div>
                                <div className="col-md-3 social_media text-center">
                                    <div class="footer-socialmedia">
                                        <a href="https://www.facebook.com/" target="_blank"><i class="fab fa-facebook-f"></i></a>
                
                                        <a href="https://twitter.com/" target="_blank"><i class="fab fa-twitter"></i></a>

                                        <a href="https://www.instagram.com/" target="_blank"><i class="fab fa-instagram"></i></a>
                                    </div>
                                </div>
                                <div className="col-md-3 app_section">
                                    <div class="download-app">
                                        <p>Download the App</p>
                                        <div class="download-app-wrap">
                                            <div class="download-app-icon">
                                                <a href="javascript:void()" target="_blank"><img src="../../assets/images/apple-store.svg" className="appstore_img" alt="" /></a>
                                            </div>
                                            <div class="download-app-icon">
                                                <a href="javascript:void()" target="_blank"><img src="../../assets/images/play-store.png" className="playstore_img" alt="" /></a>
                                            </div>
							            </div>
                                    </div>
                                </div>
                                <div className="col-md-1"></div>
                            </div>
                        </div>

                        <div className="col-md-12 company_info">
                             <a href="javascript:void()" style={{color:'#fff'}}> Privacy Policy </a>
                             <p>Copyright eShopping Website © 2021. All Rights Reserved. <br></br> Designed &amp; Developed by <a href="javascript:void()" target="_blank" style={{color:'#000',fontWeight:'500'}}><b>VirajWebGroup.com</b>.</a></p>
                        </div>

                    </div>
                </div>
            </div>
        )
    }
}
export default Footer