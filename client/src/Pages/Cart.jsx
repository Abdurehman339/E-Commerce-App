import { React, useEffect, useState } from "react";
import styled from "styled-components";
import Navbar from "../Components/Navbar";
import Announcement from "../Components/Announcement";
import NewsLetter from "../Components/NewsLetter";
import Footer from "../Components/Footer";
import cap from "../Images/cap.png";
import Add from "@mui/icons-material/Add";
import Remove from "@mui/icons-material/Remove";
import { manageCart } from "../Redux/apiCalls";
import { fetchSingleProduct } from "../Redux/apiCalls";
import { useSelector } from "react-redux";
import SingleCartProduct from "./CartProduct";

const Container = styled.div``;
const Wrapper = styled.div`
  padding: 20px;
`;
const Title = styled.h1`
  text-align: center;
  font-weight: 300;
`;
const TopButtonContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
const TopButton = styled.button`
  padding: 10px 10px;
  background-color: ${(props) => (props.bg === "white" ? "white" : "black")};
  color: ${(props) => (props.fc === "white" ? "white" : "black")};
  border-color: ${(props) => (props.fc === "white" ? "white" : "black")};
  font-weight: 500;
`;

const TopLinksContainer = styled.div``;

const TopLink = styled.a`
  margin-right: 20px;
`;
const DetailsContainer = styled.div`
  width: 100%;
  display: flex;
`;
const DetailsWrapper = styled.div`
  flex: 3;
  width: 100%;
  display: flex;
  flex-direction: column;
`;
const Hr = styled.hr`
  margin-right: 10px;
`;
const ProductContainer = styled.div`
  display: flex;
  padding: 20px;
  align-items: center;
`;
const ProductImage = styled.img`
  flex: 1;
  width: 200px;
  height: 200px;
`;
const ProductDetails = styled.div`
  flex: 3;
  padding: 20px;
  display: flex;
  flex-direction: column;
`;

const ProductName = styled.span`
  margin-bottom: 10px;
`;
const ProductId = styled.span`
  margin-bottom: 10px;
`;
const ProductColor = styled.div`
  height: 20px;
  width: 20px;
  border-radius: 50%;
  margin-bottom: 10px;
  background-color: black;
`;
const ProductSize = styled.span`
  margin-bottom: 10px;
`;

const ProductAmountContainer = styled.div`
  flex: 2;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
const ProductQuantityContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;
const ProductQuantity = styled.div`
  margin: 0px 10px;
  border: 1px solid black;
  padding: 5px 10px;
  border-radius: 10px;
`;
const ProductAmount = styled.span`
  margin: 10px;
  font-size: 40px;
  font-weight: 300;
`;
const SummaryContainer = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 10px;
  border: 1px solid gray;
  height: 60vh;
  padding: 20px 10px;
`;
const SummaryTitle = styled.h1`
  font-weight: 300;
`;
const SummaryDetails = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  padding: 15px 40px;
  font-size: ${(props) => (props.type === "total" ? "30px" : "15px")};
  font-weight: ${(props) => (props.type === "total" ? "500" : "400")};
`;
const SummaryDetailHeading = styled.span``;
const SummaryDetailValue = styled.span``;
const SummaryButton = styled.button`
  width: 100%;
  background-color: black;
  color: white;
  font-weight: 600;
  padding: 10px 0;
`;
const Cart = () => {
  const user = useSelector((state) => state.rootReducer.user.currentUser);
  const [cart, setCart] = useState([]);
  useEffect(() => {
    const fetchingCart = async () => {
      const res = await manageCart(user);
      setCart(res);
    };
    fetchingCart();
  }, []);
  return (
    <Container>
      <Navbar />
      <Announcement />
      <Wrapper>
        <Title>YOUR BAG</Title>
        <TopButtonContainer>
          <TopButton bg="white" fc="black">
            CONTINUE SHOPPING
          </TopButton>
          <TopLinksContainer>
            <TopLink href="#">Shopping Bag({cart.length})</TopLink>
            <TopLink href="#">Your Wishlist(0)</TopLink>
          </TopLinksContainer>
          <TopButton bg="black" fc="white">
            CHECKOUT NOW
          </TopButton>
        </TopButtonContainer>
        <DetailsContainer>
          <DetailsWrapper>
            {cart.map((item) => {
              return (
                <SingleCartProduct key={item._id} item={item}/>
              ); 
            })}
          </DetailsWrapper>
          <SummaryContainer>
            <SummaryTitle>ORDER SUMMARY</SummaryTitle>
            <SummaryDetails>
              <SummaryDetailHeading>SubTotal</SummaryDetailHeading>
              <SummaryDetailValue>$80</SummaryDetailValue>
            </SummaryDetails>
            <SummaryDetails>
              <SummaryDetailHeading>Estimated Shipping</SummaryDetailHeading>
              <SummaryDetailValue>$80</SummaryDetailValue>
            </SummaryDetails>
            <SummaryDetails>
              <SummaryDetailHeading>Shipping Discount</SummaryDetailHeading>
              <SummaryDetailValue>$80</SummaryDetailValue>
            </SummaryDetails>
            <SummaryDetails type="total">
              <SummaryDetailHeading>Total</SummaryDetailHeading>
              <SummaryDetailValue>$80</SummaryDetailValue>
            </SummaryDetails>
            <SummaryButton>CHECKOUT NOW</SummaryButton>
          </SummaryContainer>
        </DetailsContainer>
      </Wrapper>
      <NewsLetter />
      <Footer />
    </Container>
  );
};

export default Cart;
