import React from "react"
import { Link } from "react-router-dom"

export class OrderCard extends React.Component{
    render(){
        return(
            <div className="col-md-12 py-3 order_card">
                <div className="row">
                    {/* <img src="../../assets/images/shoe.png" alt="" /> */}
                    <img src={this.props.image} alt={this.props.name}/>
                    <div className="col-md-4 product_desc">
                        <p>{this.props.desc}</p>
                    </div>
                    <div className="col-md-2 product_price">
                        <p>{this.props.price}</p>
                    </div>
                    <div className="col-md-4 delivery_detail ">
                        <p className="Ddate">{this.props.Ddate}</p>
                        <p className="Dmsg">{this.props.Dmsg}</p>
                    </div>
                </div>
            </div>
        )
    }
}