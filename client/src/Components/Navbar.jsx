import React from 'react'
import styled from 'styled-components'
import SearchIcon from '@mui/icons-material/Search';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';

const Container = styled.section`
  height: 60px;
  background-color: #fcfbfb;
`

const Wrapper = styled.div`
  padding: 0px 20px;
  display: flex;
  align-items: center;
  justify-content: center;
` 
const Left = styled.div`
  display: flex;
  align-items: center;
  flex: 1;
`
const Lang = styled.span`
  font-size: 14px;
  font-weight: bolder;
  cursor: pointer;
`
const SearchContainer = styled.div`
  display: flex;
  align-items: center;
  margin-left: 20px;
  padding: 5px;
  border: 0.5px solid gray;
`
const SearchBox = styled.input`
  border: none;
  display: flex;
  align-items: center;
  &:focus{
    outline: none;
  }
`

const Center = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 51%;
  text-align: center;
  font-size: 25px;
  font-weight: bolder;
  flex: 1;
`
const Logo = styled.h1`
  display: flex;
  align-items: center;
  cursor: pointer;
  margin: 0;
`
const Right = styled.div`
  display: flex;
  align-items: center;
  justify-content: end;
  flex: 1;
`
const MenuItem = styled.div`
  cursor: pointer;
  margin-right: 25px;
  position: relative;
`

const Navbar = () => {
  return (
    <Container>
      <Wrapper>
        <Left>
          <Lang>
            EN
          </Lang>
          <SearchContainer>
            <SearchBox/>
            <SearchIcon style={{cursor: 'pointer'}}/>
          </SearchContainer>
        </Left>
        <Center>
          <Logo>
            E-Commerce
          </Logo>
        </Center>
        <Right>
          <MenuItem>
            Signin
          </MenuItem>
          <MenuItem>
            Register
          </MenuItem>
          <MenuItem>            
            <ShoppingCartOutlinedIcon/>
            <span class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
              4
              <span class="visually-hidden">unread messages</span>
            </span>
          </MenuItem>
        </Right>
      </Wrapper>
    </Container>
  )
}

export default Navbar