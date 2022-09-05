import React, { useEffect, useState } from "react";
import "../../styles/mainproduct.css";
import "../../styles/product.css";
import Footer from "../footer/footer";
import TabNav from "../product/tabnav";
import OwlCarousel from "react-owl-carousel";
import "../../styles/product.css";
import SideMenu from "./sidemenu";
import axios from "axios";
import Card from "../product/card";
import Loader from "../loader/loader";
import {useDispatch} from "react-redux";
import ReactPaginate from "react-paginate";






const MainProduct = (props) => {
  const options = {
    margin: 15,
    nav: true,
    navText: [
      "<div class='nav-button owl-prev'> <span>‹</span> </div>",
      "<div class='nav-button owl-next'>›</div>",
    ],
    responsive: {
      0: {
        items: 2,
      },
      600: {
        items: 2,
      },
      768: {
        items: 4,
      },
      1024: {
        items: 6,
      },
      1440: {
        items: 7,
      },
    },
  };

  const dispatch = useDispatch();
  const [state, setState] = useState({
    productData: [],
    loading: false,
    allCategory : [],
    activeTab : 'All',  
    filteredData: [], 

    offset: 0,
    orgtableData: [],
    perPage: 6,
    currentPage: 0,
    loading: false,
  });

   

  useEffect(()=>{
    getData();
  },[])

  const getData = () => {
    axios.get("https://fakestoreapi.com/products").then((res) => {
      var data = res.data;
      // pagination
      var slice = data.slice(state.offset, state.offset + state.perPage);

      console.log(res);
      var allCategory = res.data.map((ele) => {
        return ele.category;
    });
      setState(prev => ({ 
        ...prev, 
        productData: res.data,
        loading: true,
        allCategory: ['All', ...new Set(allCategory)],
        filteredData: res.data,  
        pageCount: Math.ceil(data.length / state.perPage),
        orgtableData: res.data,
        filteredData: slice,

      }))

      
    });
  };

  // pagination

  const handlePageClick = (e) => {
    const selectedPage = e.selected;
    const offset = selectedPage * state.perPage;
    setState(prev => ({
       ...prev, 
        currentPage: selectedPage,
        offset: offset,
       }
       ,
       () => {
        loadMoreData();
      }))

  };

  const loadMoreData = () => {
    const data = state.orgtableData;

    const slice = data.slice(state.offset, state.offset + state.perPage);
    setState((prev) => ({
       ...prev, 
       pageCount: Math.ceil(data.length / state.perPage),
       filteredData: slice,

      }));
  };

  // pagination end
  const changeCategory = (tabName) => {
    setActiveTab(tabName);
    filterData(tabName);
  }

  const setActiveTab = (tabName) => {
    setState(prev => ({ 
        ...prev, 
       activeTab : tabName,   
      }))
  }


  const filterData = (category) => {
    if(category !== "All"){
        var filterData = state.productData.filter(((ele) => {
            return ele.category === category
        }))
        setState(prev => ({ 
            ...prev, 
            filteredData: filterData    
        }))
        console.log(filterData);
    }
    else{
        setState(prev => ({ 
            ...prev, 
            filteredData: state.productData    
        }))
    }
   
  }

  return (
    <>
     {
        state.loading === false ? (
        <div className="col-md-12 text-center loader-section">
          <Loader /> 
        </div>
      ) : (
       <div className="MainProduct">
        <div className="col-md-12">
            <div className="row px-0 mx-0">
            <div className="col-md-1"></div>

            <div className="col-md-2 px-0 side_menu">
                <h4 className="side_title">Category</h4>
                {/* <SideMenu /> */}

                {state.allCategory.length === 0 ? false : (
                    state.allCategory.sort().map((ele) => {
                        return (
                            <SideMenu changeCategory={changeCategory} className={state.activeTab === ele ? "activeTab" : ""} name={ele} img="../../assets/images/restaurant.png" />
                        )
                    })
                )}
            </div>

            <div className="col-md-9 mt-5 ">
                <h1 className="mainproduct_title">Our Products</h1>
                <div className="mobile_show">
                <OwlCarousel className="owl-theme" loop nav {...options}>
                    <TabNav
                    name="Restaurant"
                    image="../../assets/images/restaurant.png"
                    />
                    <TabNav
                    name="Grocery"
                    image="../../assets/images/grocery.png"
                    />
                    <TabNav
                    name="Pharmacy"
                    image="../../assets/images/pharmacy.png"
                    />
                    <TabNav name="Cake" image="../../assets/images/cake.png" />
                    <TabNav name="Flower" image="../../assets/images/flower.png" />
                    <TabNav name="Gift" image="../../assets/images/gift.png" />
                    <TabNav name="Pet" image="../../assets/images/pet.png" />
                    <TabNav name="Liquor" image="../../assets/images/liquor.png" />
                    <TabNav
                    name="Jewellery"
                    image="../../assets/images/jewellery.png"
                    />
                    <TabNav
                    name="Electronics"
                    image="../../assets/images/electronics.png"
                    />
                    <TabNav
                    name="Fashion"
                    image="../../assets/images/fashion.png"
                    />
                    <TabNav name="Coffee" image="../../assets/images/coffee.png" />
                </OwlCarousel>
                </div>

                <div className="row px-0 mx-0">
                <div className="col-md-12 product_items mx-auto">
                    <div class="row">
                    {
                        state.filteredData.map((data, i) => 
                            <Card data={data} />
                        )
                    }
                    
                    </div>
                </div>
                  <div className="col-md-12">
                      <ReactPaginate
                        previousLabel={"prev"}
                        nextLabel={"next"}
                        breakLabel={"..."}
                        breakClassName={"break-me"}
                        pageCount={state.pageCount}
                        marginPagesDisplayed={6}
                        pageRangeDisplayed={5}
                        onPageChange={handlePageClick}
                        containerClassName={"pagination"}
                        subContainerClassName={"pages pagination"}
                        activeClassName={"active"}
                      />
                    </div> 
                </div>
            </div>
            </div>
        </div>

      {/* footer component call */}
      <Footer />
      {/* footer component call */}
        </div>
      )
    }  
    </>
     
  )
}
export default MainProduct;
