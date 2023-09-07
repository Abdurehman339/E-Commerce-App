import React from "react";
import styled from "styled-components";
import Navbar from "../Components/Navbar";

const Container = styled.div`
  width: 100%;
  height: 100%;
`;
const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const Title = styled.h1`
  text-align: center;
  margin: 20px 0px;
`;
const ProductTitle = styled.div`
  display: grid;
  grid-template-columns: 40% 60%;
  padding: 10px;
  width: 50%;
  align-items: center;
`;
const ProductTitle_title = styled.h3`
  background-color: rgba(255, 255, 255, 0.8);
  padding: 20px;
  font-size: 30px;
  text-align: center;
  margin-right: 20px;
`;
const ProductTitle_input = styled.input`
  background-color: rgba(255, 255, 255, 0.8);
  border: 1px solid rgba(0, 0, 0, 0.8);
  padding: 20px;
  margin-right: 20px;
  height: 50%;
`;

const ProductDesc = styled.div`
  display: grid;
  grid-template-columns: 40% 60%;
  padding: 10px;
  width: 50%;
  align-items: center;
`;
const ProductDesc_title = styled.h3`
  background-color: rgba(255, 255, 255, 0.8);
  padding: 20px;
  font-size: 30px;
  text-align: center;
  margin-right: 20px;
`;
const ProductDesc_input = styled.textarea`
  background-color: rgba(255, 255, 255, 0.8);
  border: 1px solid rgba(0, 0, 0, 0.8);
  padding: 8px;
  margin-right: 20px;
  min-height: 50%;
`;

const ProductSize = styled.div`
  display: grid;
  grid-template-columns: 40% 60%;
  padding: 10px;
  width: 50%;
  align-items: center;
`;
const ProductSize_title = styled.h3`
  background-color: rgba(255, 255, 255, 0.8);
  padding: 20px;
  font-size: 30px;
  text-align: center;
  margin-right: 20px;
`;
const ProductSize_input = styled.input`
  background-color: rgba(255, 255, 255, 0.8);
  border: 1px solid rgba(0, 0, 0, 0.8);
  padding: 20px;
  margin-right: 20px;
  height: 50%;
`;

const ProductColor = styled.div`
  display: grid;
  grid-template-columns: 40% 60%;
  padding: 10px;
  width: 50%;
  align-items: center;
`;
const ProductColor_title = styled.h3`
  background-color: rgba(255, 255, 255, 0.8);
  padding: 20px;
  font-size: 30px;
  text-align: center;
  margin-right: 20px;
`;
const ProductColor_input = styled.input`
  background-color: rgba(255, 255, 255, 0.8);
  border: 1px solid rgba(0, 0, 0, 0.8);
  padding: 20px;
  margin-right: 20px;
  height: 50%;
`;

const ProductPrice = styled.div`
  display: grid;
  grid-template-columns: 40% 60%;
  padding: 10px;
  width: 50%;
  align-items: center;
`;
const ProductPrice_title = styled.h3`
  background-color: rgba(255, 255, 255, 0.8);
  padding: 20px;
  font-size: 30px;
  text-align: center;
  margin-right: 20px;
`;
const ProductPrice_input = styled.input`
  background-color: rgba(255, 255, 255, 0.8);
  border: 1px solid rgba(0, 0, 0, 0.8);
  padding: 20px;
  margin-right: 20px;
  height: 50%;
`;

const ProductCategory = styled.div`
  display: grid;
  grid-template-columns: 40% 60%;
  padding: 10px;
  width: 50%;
  align-items: center;
`;
const ProductCategory_title = styled.h3`
  background-color: rgba(255, 255, 255, 0.8);
  padding: 20px;
  font-size: 30px;
  text-align: center;
  margin-right: 20px;
`;
const ProductCategory_input = styled.input`
  background-color: rgba(255, 255, 255, 0.8);
  border: 1px solid rgba(0, 0, 0, 0.8);
  padding: 20px;
  margin-right: 20px;
  height: 50%;
`;

const ProductImage = styled.div`
  display: grid;
  grid-template-columns: 40% 60%;
  padding: 10px;
  width: 50%;
  align-items: center;
`;
const ProductImage_title = styled.h3`
  background-color: rgba(255, 255, 255, 0.8);
  padding: 20px;
  font-size: 30px;
  text-align: center;
  margin-right: 20px;
`;
const ProductImage_input = styled.input`
  background-color: rgba(255, 255, 255, 0.8);
  border: 1px solid rgba(0, 0, 0, 0.8);
  padding: 5px;
  margin-right: 20px;
  height: 50%;
  text-align: start;
`;

const ProductInStock = styled.div`
  display: grid;
  grid-template-columns: 40% 60%;
  padding: 10px;
  width: 50%;
  align-items: center;
`;
const ProductInStock_title = styled.h3`
  background-color: rgba(255, 255, 255, 0.8);
  padding: 20px;
  font-size: 30px;
  text-align: center;
  margin-right: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const ProductInStock_checkbox = styled.input`
  margin-right: 20px;
  height: 25px;
  width: 25px;
`
const ProductInStock_button = styled.button`
  color: rgba(255, 255, 255, 0.8);
  border: 1px solid rgba(0, 0, 0, 0.8);
  background-color: rgba(0, 0, 0, 0.8);
  margin-right: 20px;
  height: 50%;
  font-weight: bolder;
`;

const AddProductPage = () => {
  const handleAddProduct = async ()=>{
    console.log("hello")
  }
  return (
    <Container>
      <Navbar />
      <Wrapper>
        <Title>Add a Product</Title>
        <ProductTitle>
          <ProductTitle_title>Title</ProductTitle_title>
          <ProductTitle_input/>
        </ProductTitle>
        <ProductDesc>
          <ProductDesc_title>Description</ProductDesc_title>
          <ProductDesc_input />
        </ProductDesc>
        <ProductSize>
          <ProductSize_title>Size</ProductSize_title>
          <ProductSize_input />
        </ProductSize>
        <ProductColor>
          <ProductColor_title>Color</ProductColor_title>
          <ProductColor_input />
        </ProductColor>
        <ProductPrice>
          <ProductPrice_title>Price</ProductPrice_title>
          <ProductPrice_input />
        </ProductPrice>
        <ProductCategory>
          <ProductCategory_title>Category</ProductCategory_title>
          <ProductCategory_input />
        </ProductCategory>
        <ProductImage>
          <ProductImage_title>Image</ProductImage_title>
          <ProductImage_input type="file" accept=".png,.jpeg,.jpg"/>
        </ProductImage>
        <ProductInStock>
          <ProductInStock_title>
            <ProductInStock_checkbox checked type="checkbox"/>
            InStock
          </ProductInStock_title>
          <ProductInStock_button onClick={handleAddProduct}>
            Add Product
          </ProductInStock_button>
        </ProductInStock>
      </Wrapper>
    </Container>
  );
};

export default AddProductPage;
