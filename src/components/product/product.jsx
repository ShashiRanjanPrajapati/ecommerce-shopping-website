import React, { useEffect, useState } from "react";
import "../../styles/product.css"
import OwlCarousel from 'react-owl-carousel';
import ProductCard from "./productCard";
import TabNav from "./tabnav";
import axios from "axios";
import Card from "./card";
import ReactPaginate from "react-paginate";


const Product = () => {

    const options = {
        margin: 15,
        nav: true,
        navText: ["<div class='nav-button owl-prev'> <span>‹</span> </div>", "<div class='nav-button owl-next'>›</div>"],
        responsive: {
            0: {
              items: 2
            },
            600: {
              items: 2
            },
            768: {
                items: 3
            },
            1024: {
                items: 4
            },
            1440: {
              items: 5
            }
        }
    }

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
      }  
      );
    
    //  const handlePageClick = handlePageClick.bind();
      useEffect(()=>{
        getData();
      },[])
    
      const getData = () => {
        axios.get("https://fakestoreapi.com/products").then((res) => {
          console.log(res);
          var data = res.data;
           // pagination
            var slice = data.slice(state.offset, state.offset + state.perPage);

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


    return(
        <div className="product">
            <div className="col-md-12">
                <div className="row px-0 mx-0">
                    <div className="col-md-12 text-center">
                        <h1 className="product_title">Our Products</h1>
                    </div>
                    {/* tabnav section start */}
                    <div className="col-md-10 product_tabnav m-auto">
                        {state.allCategory.length === 0 ? false : (
                            state.allCategory.sort().map((ele) => {
                                return (
                                    <TabNav changeCategory={changeCategory} className={state.activeTab === ele ? "activeTab" : ""} name={ele} img="../../assets/images/restaurant.png" />
                                )
                            })
                        )}
                       
                    </div>
                    {/* tabnav section start */}
                </div>
            </div>


            <div className="col-md-12">
                <div className="row px-0 mx-0">
                    <div className="col-md-10 product_items mx-auto">
                        <div class="row">
                            {
                                state.filteredData.map((data, i) => 
                                    <Card data={data} />
                                )
                            }
                           
                        </div>
                    </div>
                </div>
            </div>

            <div className="col-md-10 mx-auto">
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
    )
}
export default Product