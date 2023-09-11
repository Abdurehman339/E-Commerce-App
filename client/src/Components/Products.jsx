import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Product from "./Product";
import { fetchProducts } from "../Redux/apiCalls";

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  padding: 3px;
`;
const Products = () => {
  const [products, setProducts] = useState([]);
  
  
  
  useEffect(() => {
    const fetchData = async ()=>{
      const res = await fetchProducts();
      setProducts(res)
    }
    fetchData()
  },[]);
  
  return (
    <Container>
      {products.length && products.map((item) => {
        return <Product item={item} key={item._id} />;
      })}
    </Container>
  );
};

export default Products;
