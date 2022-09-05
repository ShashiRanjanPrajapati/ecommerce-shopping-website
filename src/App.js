import './App.css';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Navigation from './components/navigation';
import Home from './components/home/home';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import MainProduct from './components/mainProduct/mainproduct';
import SingleProduct from './components/singleproduct/singleProduct';
import { Login } from './components/login/login';
import Cart from './components/addtocart/cart';
import { SignUp } from './components/signup/signup';
import Profile from './components/profile/profile';
import { Order } from './components/order/order';
import WishlistSec from './components/wishlist/wishlist';


function App() {
  return (
  
      <div>
        <Router>
            <Navigation />
            <Route exact path="/" component={ Home } />
            <Route exact path="/product" component={ MainProduct } />
            <Route exact path="/single-product" component={ SingleProduct } />

            <Route exact path="/login" component={ Login } />
            <Route exact path="/signup" component={ SignUp } />

            <Route exact path="/cart" component={ Cart } />
            <Route exact path="/profile" component={ Profile } />
            <Route exact path="/wishlist" component={ WishlistSec } />
            <Route exact path="/order" component={ Order } />

        </Router>
      </div>


  );
}

export default App;
