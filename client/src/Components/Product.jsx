import React from 'react'
import styled from 'styled-components'
import FavoriteBorder from '@mui/icons-material/FavoriteBorder';
import ShoppingCartOutlined from '@mui/icons-material/ShoppingCartOutlined';
import SearchOutlined from '@mui/icons-material/SearchOutlined';

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
`

const Container = styled.div`
    margin: 3px;
    position: relative;
    height: 50vh;
    width: 24vw;
    background-color: #f5fbfd;
    &:hover ${IconContainer}{  
      opacity: 1;
    }
`
const Image = styled.img`
    height: 100%;
    width: 100%;
    object-fit: cover;
`

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
  &:hover{
    transform: scale(1.1);
  }
`


const Product = ({item}) => {
  return (
    <Container>
        <Image src={item.img} alt="..." />
        <IconContainer>
          <Icon>
            <ShoppingCartOutlined/>
          </Icon>
          <Icon>
            <FavoriteBorder/>
          </Icon>
          <Icon>
            <SearchOutlined/>
          </Icon>
        </IconContainer>
    </Container>
  )
}

export default Product
