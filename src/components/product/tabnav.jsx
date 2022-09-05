import React from "react"
import "../../styles/product.css"


const TabNav = ({img,name,className, changeCategory}) => {
    return(
        <div className={`item`} onClick={()=>changeCategory(name)}>
            <div className={`product_section ${className}`}>
                <img src={img} alt={name} />
               <p>{name}</p>
            </div>
        </div>
    )
}
export default TabNav