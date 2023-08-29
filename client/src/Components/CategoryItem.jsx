import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

const Container = styled.div`
  flex: 1;
  margin: 3px;
  position: relative;
  height: 100vh;
`
const Image = styled.img`
  height: 100%;
  width: 100%;
  object-fit: cover;
`

const InfoContainer = styled.div`  
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`
const Title = styled.h1`
  color: white;
`
const Button = styled.button`
  border:none;
  padding: 10px;
  background-color: white;
  color:gray;
  cursor: pointer;
  font-weight: 600;
`
const CategoryItem = ({item}) => {
  return (
    <Container>
      <Link to={`/shoppingcategory/${item.cat}`}>
        <Image src={item.img} />
        <InfoContainer>
          <Title>{item.title}</Title>
          <Button>SHOP NOW</Button>
        </InfoContainer>
      </Link>
    </Container>
  )
}

export default CategoryItem
