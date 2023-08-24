import React from "react";
import styled from "styled-components";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import Visibility from "@mui/icons-material/Visibility";
import google from "../Images/google.png";
import facebook from "../Images/facebook.png";

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background: linear-gradient(110deg, white 40%, #34a853 40%);
  display: flex;
  justify-content: center;
`;

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  flex: 1;
`;
const LogoContainer = styled.div`
  display: flex;
  align-items: flex-end;
  justify-content: flex-end;
  margin-right: 50px;
  flex: 1;
`;
const LoginContainer = styled.div`
  width: 60%;
  margin-right: 7vw;
  display: flex;
  flex-direction: column;
  background-color: transparent;
  height: 70%;
  border-radius: 30px;
  backdrop-filter: blur(30px);
  background-color: rgba(218, 218, 218, 0.5);
`;
const Title = styled.h2`
  text-align: center;
  margin: 4vh 0;
`;
const Email = styled.input`
  align-self: center;
  width: 80%;
  border: none;
  height: 7vh;
  border-radius: 10px;
  outline: none;
  padding-left: 10px;
  background-color: rgba(217, 217, 217, 0.5);
`;
const PasswordContainer = styled.div`
  align-self: center;
  display: flex;
  width: 80%;
  margin-top: 20px;
  height: 7vh;
  border-radius: 10px;
  outline: none;
  background-color: rgba(217,217,217,0.5);
`;
const Password = styled.input`
  flex: 9;
  border: none;
  border-radius: 10px;
  padding-left: 10px;
  outline: none;
  background-color: transparent;
`;
const ForgotPassword = styled.a`
  margin: 1vh 4vw;
  color: teal;
`;
const LoginButton = styled.button`
  align-self: center;
  width: 25%;
  border-radius: 20px;
  padding: 8px 0;
  background-color: #34a852;
  border: none;
  margin: 20px 0;
`;
const SignupButton = styled.a`
  align-self: center;
  margin: 10px 0;
`;
const LinksContainer = styled.div`
  align-self: center;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 20px;
`;

const Login = () => {
  return (
    <Container>
      <Wrapper>
        <LoginContainer>
          <Title>Login In</Title>
          <Email placeholder="Email" />
          <PasswordContainer>
            <Password placeholder="Password" />
            <Visibility
              style={{
                flex: "1",
                cursor: "pointer",
                alignSelf: "center",
                backgroundColor: "transparent"
              }}
            />
          </PasswordContainer>
          <ForgotPassword href="#">Forgot Password</ForgotPassword>
          <LoginButton>Login In</LoginButton>
          <SignupButton href="#">SignUp</SignupButton>
          <LinksContainer>
            <img
              src={google}
              style={{
                height: "25px",
                width: "25px",
                marginLeft: "10px",
                cursor: "pointer",
              }}
            />
            <img
              src={facebook}
              style={{
                height: "30px",
                width: "30px",
                marginLeft: "10px",
                cursor: "pointer",
              }}
            />
          </LinksContainer>
        </LoginContainer>
      </Wrapper>
      <LogoContainer>
        <ShoppingCartOutlinedIcon
          style={{
            transform: "scalex(-1)",
            height: "90%",
            width: "90%",
          }}
        />
      </LogoContainer>
    </Container>
  );
};

export default Login;
