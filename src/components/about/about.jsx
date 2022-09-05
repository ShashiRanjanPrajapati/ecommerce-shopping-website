import React from "react"
import "../../styles/about.css"

class About extends React.Component{
    render(){
        return(
            <div className="about my-5">
                <div className="col-md-12">
                    <div className="row px-0 mx-0">
                       <div className="col-md-10 about_section m-auto">
                            <div className="row about_box ">
                                
                                    <div class="about-img col-md-6">
                                        <img src="../../assets/images/About.jpg" className="img-fluid" alt="" />
                                    </div>

                                    <div class="about-contant col-md-6">
                                        <h2 class="text-left">About us</h2>
                                        <p>About  is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop p...</p>
                                    </div>
                               
                            </div>
                       </div>
                    </div>
                </div>
            </div>
        )
    }
}
export default About