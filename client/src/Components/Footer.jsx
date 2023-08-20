import React from "react";
import styled from "styled-components";
import Facebook from "@mui/icons-material/Facebook";
import Instagram from "@mui/icons-material/Instagram";
import Twitter from "@mui/icons-material/Twitter";
import Pinterest from "@mui/icons-material/Pinterest";
import LocalPhone from "@mui/icons-material/LocalPhone";
import LocationOn from "@mui/icons-material/LocationOn";
import Email from "@mui/icons-material/Email";
import payment from "../Images/payment.png";

const Container = styled.div`
  display: flex;
  padding-bottom: 30px;
`;
const Left = styled.div`
  padding-left: 20px;
  flex: 1;
`;
const Logo = styled.h1`
  font-weight: bold;
  margin: 30px 0;
`;
const Description = styled.p`
  font-weight: 500;
  margin-bottom: 30px;
`;
const SocialContainer = styled.div`
  display: flex;
  margin-bottom: 10px;
`;
const SocialIcon = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-left: 10px;
  cursor: pointer;
  color: white;
  background-color: #${(props) => props.bg};
  transition: all 0.2s ease;
  &:hover {
    transform: scale(1.1);
  }
`;
const Center = styled.div`
  flex: 1;
`;
const Title = styled.h2`
  padding: 30px;
  font-size: 28px;
`;
const List = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
  display: flex;
  flex-wrap: wrap;
`;
const ListItems = styled.li`
  width: 50%;
  margin-bottom: 10px;
  cursor: pointer;
`;

const Right = styled.div`
  flex: 1;
`;
const ContactItems = styled.div`
  margin-bottom: 10px;
  cursor: pointer;
`;
const Payment = styled.img`
  margin: 20px 0;
  cursor: pointer;
  width: 50%;
`;

const Footer = () => {
  return (
    <Container>
      <Left>
        <Logo>E-Commerce</Logo>
        <Description>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Id commodi
          reprehenderit corrupti illo sapiente officia nobis quia quas,
          necessitatibus cum assumenda incidunt pariatur. Natus accusamus
          excepturi sequi aut a voluptatibus?
        </Description>
        <SocialContainer>
          <SocialIcon bg="3B5999">
            <Facebook />
          </SocialIcon>
          <SocialIcon bg="E4405F">
            <Instagram />
          </SocialIcon>
          <SocialIcon bg="55ACEE">
            <Twitter />
          </SocialIcon>
          <SocialIcon bg="E60023">
            <Pinterest />
          </SocialIcon>
        </SocialContainer>
      </Left>
      <Center>
        <Title>Useful Links</Title>
        <List>
          <ListItems>Home</ListItems>
          <ListItems>Man Fashion</ListItems>
          <ListItems>Accessories</ListItems>
          <ListItems>Order Tracking</ListItems>
          <ListItems>Wishlist</ListItems>
          <ListItems>Cart</ListItems>
          <ListItems>Woman Fashion</ListItems>
          <ListItems>My Account</ListItems>
          <ListItems>Conditions</ListItems>
          <ListItems>Terms</ListItems>
        </List>
      </Center>
      <Right>
        <Title>Contact</Title>
        <ContactItems>
          <LocalPhone /> +1 234 56 78
        </ContactItems>
        <ContactItems>
          <LocationOn /> 622 Dixie Path , South Tobinchester 98336
        </ContactItems>
        <ContactItems>
          <Email /> contact@ecommerce.dev
        </ContactItems>
        <Payment src={payment} />
      </Right>
    </Container>
  );
};

export default Footer;
