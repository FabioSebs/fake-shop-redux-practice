import React, { useEffect } from "react";
import ProductComponent from "./ProductComponent";
import { useDispatch, useSelector } from "react-redux";
import { setProducts } from "../redux/actions/prodActions";
import axios from "axios";

const ProductListing = () => {
  const products = useSelector((state) => state);
  const dispatch = useDispatch();

  // MAKING AN HTTP CALL WITH AXIOS FOR PRODUCT DATA
  const fetchProducts = async () => {
    try {
      const res = await axios.get("https://fakestoreapi.com/products");
      console.log(res.data);
      dispatch(setProducts(res.data));
    } catch (error) {
      console.log(error);
    }
  };

  // MAKE THE HTTP CALL AS SOON AS BROWSER RENDERS APP
  useEffect(() => {
    fetchProducts();
  }, []);

  console.log(products);
  return (
    <div className="ui grid container">
      <ProductComponent />
    </div>
  );
};

export default ProductListing;
