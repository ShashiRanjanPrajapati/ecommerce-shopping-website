import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import ReactPaginate from "react-paginate";
import Loader from "../loader/loader";
import { SelectedProduct  } from "../../redux/action/productAction";
import {useDispatch} from "react-redux";
import Card from "./card";

const ProductCard = (props) => {


  const [state, setState] = useState({
    productData: [],
    offset: 0,
    orgtableData: [],
    perPage: 9,
    currentPage: 0,
    loading: false,
  });
  const dispatch = useDispatch();
  // handlePageClick = handlePageClick.bind();

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
       productData: slice,

      }));
  };

  useEffect(()=>{
    getData();
  },[])

  const singleDetail = (data) => {
    dispatch(SelectedProduct(data));
  }


  const getData = () => {
    axios.get("https://fakestoreapi.com/products").then((res) => {
      var data = res.data;
      console.log(res);
      var slice = data.slice(state.offset, state.offset + state.perPage);
      setState(prev => ({ 
        ...prev, 
        productData: res.data,
        pageCount: Math.ceil(data.length / state.perPage),
        orgtableData: res.data,
        productData: slice,
        loading: true,
      }))
      
    });
  };


 


  return (
    <>
      {
      state.loading === false ? (
        <div className="col-md-12 text-center loader-section">
          <Loader />
        </div>
      ) : (
        state.productData.map((data, i) => (
            <Card data={data} />
        ))
      )}

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
    </>
  );
};

export default ProductCard;
