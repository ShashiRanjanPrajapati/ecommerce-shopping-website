import React from "react";
import "../../styles/mainproduct.css";

const SideMenu = ({img,name,className, changeCategory}) => {
  return (
    <div className={`side_menu_wrap `} onClick={()=>changeCategory(name)}>
      <div className={`side_check border-top-no ${className}`}>
        <img src={img} alt={name} />
        <p>{name}</p>
      </div>
    </div>
  );
};
export default SideMenu;
