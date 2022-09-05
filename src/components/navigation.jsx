import React from "react"
import "../styles/navigation.css"
import { Link } from "react-router-dom"
import {useSelector , useDispatch} from "react-redux"


const Navigation = () => {

  const profile = () =>{
      if(document.getElementById("profiledrop").style.display === "none"){
        document.getElementById("profiledrop").style.display = "block";

        document.getElementById("caccount").style.color = "blue";
        document.getElementById("fadown").style.color = "blue";

      }
      else{
        document.getElementById("profiledrop").style.display = "none";
        document.getElementById("caccount").style.color = "rgb(63, 60, 60)";
        document.getElementById("fadown").style.color = "rgb(63, 60, 60)";
      }
  }

  const scrollToTop = (e) => {
    window.scrollTo({ top: 0, behavior: `smooth` });
  }

  const cartData = useSelector((state) => state.Cart);

  return(
    <nav className="navbar navbar-expand-lg navbar-light shadow-sm">
    <div className="container-fluid">
      {/* logo section */}
        <a className="navbar-brand" href="javascript:void(0);">
           <img src="../assets/images/logo.png" classNameName="img-fluid" alt="" />
        </a>


      <button className="menu_button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span><i className="fa fa-bars"></i></span>
      </button>


      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav">
          <li className="nav-item" onClick={scrollToTop}>
            <Link to="/" className="nav-link active" aria-current="page">Home</Link>
          </li>
          <li className="nav-item" onClick={scrollToTop}>
            <Link to="/product" className="nav-link">Our Product</Link>
          </li>

          <li className="nav-item" onClick={scrollToTop}>
                <div className="search_container shadow-sm">
                    <input type="text" placeholder="search here" />
                    <i className="fa fa-search"></i>
                </div>
          </li>
          <li className="nav-item" onClick={scrollToTop}>
            <Link to="/cart" className="nav-link"> 
                <div className="addCart"> 
                    <i className="fas fa-shopping-cart"></i>
                    <div className="count">{cartData.length}</div>
                </div>
               
            </Link>
          </li>


          <li className="nav-item" onClick={profile}>
            <div className="nav-link">
               <span className="account" id="caccount">My Account</span> <i class="fas fa-angle-down" id="fadown"></i>
            </div>

            <div className="profile_drop" id="profiledrop" style={{display:'none'}}>
               
                <Link to="/profile" className="remove">
                    <div className="profile_menu">
                        <i class="fas fa-user-circle"></i> <h6>My Profile</h6>
                    </div>
                </Link>

                <Link to="/wishlist" className="remove">
                    <div className="profile_menu">
                        <i class="fas fa-heart"></i> <h6>Wishlist</h6>
                    </div>
                </Link>

                <Link to="/order" className="remove">
                    <div className="profile_menu">
                        <i class="fas fa-wallet"></i> <h6>Orders</h6>
                    </div>
                </Link>

                <div className="profile_menu">
                    <i class="fas fa-power-off"></i> <h6>LogOut</h6>
                </div>
               
            </div>    


          </li>
        
          <li className="nav-item">
              <Link to="/login" className="remove" >
                <div className="login shadow">
                    Login
                </div>
              </Link>
          </li>

         

          
        </ul>
      </div>
    </div>

  </nav>

     


)
}
export default Navigation