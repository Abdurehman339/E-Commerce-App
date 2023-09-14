import React, { useState } from "react";
import styled from "styled-components";
import FavoriteBorder from "@mui/icons-material/FavoriteBorder";
import ShoppingCartOutlined from "@mui/icons-material/ShoppingCartOutlined";
import ShoppingCart from '@mui/icons-material/ShoppingCart';
import SearchOutlined from "@mui/icons-material/SearchOutlined";
import Favorite from "@mui/icons-material/Favorite";
import { AddtoCart } from "../Redux/apiCalls";
import { RemovefromCart } from "../Redux/apiCalls";
import { useSelector } from "react-redux";

const IconContainer = styled.div`
  opacity: 0;
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.2);
  z-index: 3;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.5s ease;
`;

const Container = styled.div`
  margin: 3px;
  position: relative;
  height: 50vh;
  width: 24vw;
  background-color: #f5fbfd;
  &:hover ${IconContainer} {
    opacity: 1;
  }
`;
const Image = styled.img`
  height: 100%;
  width: 100%;
  object-fit: cover;
`;

const Icon = styled.div`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background-color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 3px;
  opacity: 0.8;
  cursor: pointer;
  transition: all 0.2s ease;
  &:hover {
    transform: scale(1.1);
  }
`;

const Product = ({ item }) => {
  const user = useSelector((state) => state.rootReducer.user.currentUser);
  const [fav, setFav] = useState(false);
  const [cart, setCart] = useState(false);
  const handleAddtoCart = async () => {
    if(!cart){
      const res = await AddtoCart(user, item._id, 1);
      console.log(res)
    } else {
      const res = await RemovefromCart(user, item._id)
      console.log(res)
    }
    setCart(!cart)
  };
  return (
    <Container>
      <Image
        src={`http://localhost:5000/images/${item.img}`}
        alt="..."
      />
      <IconContainer>
        <Icon onClick={()=>handleAddtoCart()}>
           {cart? <ShoppingCart/> : <ShoppingCartOutlined/>}
        </Icon>
        <Icon onClick={(e) => setFav(!fav)}>
          {fav ? <Favorite /> : <FavoriteBorder />}
        </Icon>
        <Icon>
          <SearchOutlined />
        </Icon>
      </IconContainer>
    </Container>
  );
};

export default Product;
