import { React, useEffect, useState } from "react";
import styled from "styled-components";
import Add from "@mui/icons-material/Add";
import Remove from "@mui/icons-material/Remove";
import { fetchSingleProduct } from "../Redux/apiCalls";
import { RemovefromCart } from "../Redux/apiCalls";
import Close from "@mui/icons-material/Close";
import { useSelector } from "react-redux";


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

const SingleCartProduct = ({ item }) => {
  const [details, setDetails] = useState({});
  const [qty, setQty] = useState(1);
  const [close, setClose] = useState(false);
  const user = useSelector((state) => state.rootReducer.user.currentUser);
  useEffect(() => {
    const product = async () => {
      const productDetails = await fetchSingleProduct(item.productId);
      setDetails(productDetails);
    };
    product();
  }, []);
  const handleRemovefromCart = async () => {
    const res = await RemovefromCart(user,item.productId)
    setClose(true)
  }

  return (
    <ProductContainer key={item._id} style={{ position: "relative" }}>
      <Close
        style={{
          position: "absolute",
          top: "20",
          right: "50",
          cursor: "pointer",
        }}
        onClick={()=>handleRemovefromCart()}
      />
      <ProductImage
        src={`http://localhost:5000/images/${details.img}`}
        alt="img"
      />
      <ProductDetails>
        <ProductName>
          <b>Product: </b>
          {details.title}
        </ProductName>
        <ProductId>
          <b>ID: </b>
          {item.productId}
        </ProductId>
        <ProductColor></ProductColor>
        <ProductSize>
          <b>Size: </b>M
        </ProductSize>
      </ProductDetails>
      <ProductAmountContainer>
        <ProductQuantityContainer>
          <Remove
            style={{ cursor: "pointer" }}
            onClick={(e) => setQty(qty > 0 ? qty - 1 : qty)}
          />
          <ProductQuantity>{qty}</ProductQuantity>
          <Add style={{ cursor: "pointer" }} onClick={(e) => setQty(qty + 1)} />
        </ProductQuantityContainer>
        <ProductAmount>${details.price}</ProductAmount>
      </ProductAmountContainer>
    </ProductContainer>
  );
};

export default SingleCartProduct;
