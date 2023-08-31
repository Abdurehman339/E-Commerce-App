import React, { useState } from "react";
import styled from "styled-components";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import Visibility from "@mui/icons-material/Visibility";
import { signUp } from "../Redux/apiCalls";
import { useNavigate } from "react-router-dom";

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
  box-shadow: 10px 10px 4px -1px rgba(0, 0, 0, 0.15);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
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
const Username = styled.input`
  align-self: center;
  width: 80%;
  border: none;
  height: 7vh;
  border-radius: 10px;
  outline: none;
  padding-left: 10px;
  background-color: rgba(217, 217, 217, 0.5);
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
  margin-top: 20px;
`;
const PasswordContainer = styled.div`
  align-self: center;
  display: flex;
  width: 80%;
  margin-top: 20px;
  height: 7vh;
  border-radius: 10px;
  outline: none;
  background-color: rgba(217, 217, 217, 0.5);
`;
const Password = styled.input`
  flex: 9;
  border: none;
  border-radius: 10px;
  padding-left: 10px;
  outline: none;
  background-color: transparent;
`;
const ConfirmPassword = styled.input`
  flex: 9;
  border: none;
  border-radius: 10px;
  padding-left: 10px;
  outline: none;
  background-color: transparent;
`;
const SignupButton = styled.button`
  align-self: center;
  width: 25%;
  border-radius: 20px;
  padding: 8px 0;
  background-color: #34a852;
  border: none;
  margin: 20px 0;
`;

const Signup = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const handleRegister = () => {
    signUp({ username, email, password });
    navigate('/login')
  };
  return (
    <Container>
      <Wrapper>
        <LoginContainer>
          <Title>Sign Up</Title>
          <Username
            placeholder="Username"
            onChange={(e) => setUsername(e.target.value)}
          />
          <Email
            placeholder="Email"
            onChange={(e) => setEmail(e.target.value)}
          />
          <PasswordContainer>
            <Password
              placeholder="Password"
              type="password"
              onChange={(e) => setPassword(e.target.value)}
            />
            <Visibility
              style={{
                flex: "1",
                cursor: "pointer",
                alignSelf: "center",
                backgroundColor: "transparent",
              }}
            />
          </PasswordContainer>
          <PasswordContainer>
            <ConfirmPassword placeholder="Confirm Password" type="password" />
            <Visibility
              style={{
                flex: "1",
                cursor: "pointer",
                alignSelf: "center",
                backgroundColor: "transparent",
              }}
            />
          </PasswordContainer>
          <SignupButton onClick={handleRegister}>Sign Up</SignupButton>
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

export default Signup;
