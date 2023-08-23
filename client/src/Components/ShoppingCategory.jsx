import React from 'react'
import styled from 'styled-components'
import Navbar from './Navbar'
import Announcement from './Announcement'
import Products from './Products'
import NewsLetter from './NewsLetter'
import Footer from './Footer'

const Container = styled.div``
const Title = styled.h1`
    padding-left: 20px;
    margin-top: 20px;
`
const SubTitle = styled.h2`
    font-size: 20px;
`
const FilterContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin: 20px 20px;
`
const FilterProducts = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
`
const SortProducts = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
`
const ColorFilter = styled.select`
    border-radius: 5px;
    padding: 5px 2px;
    margin-left: 8px;
`
const SizeFilter = styled.select`
    border-radius: 5px;
    padding: 5px 2px;
    margin-left: 8px;
`
const PriceFilter = styled.select`
    border-radius: 5px;
    padding: 5px 2px;
    margin-left: 8px;
`

const ShoppingCategory = () => {
  return (
    <Container>
        <Navbar/>
        <Announcement/>
        <Title>Dresses</Title>
        <FilterContainer>
            <FilterProducts>
                <SubTitle>Filter Products:</SubTitle>
                <ColorFilter>
                    <option value="color" selected>Color</option>
                    <option value="white">White</option>
                    <option value="black">Black</option>
                    <option value="red">Red</option>
                    <option value="blue">Blue</option>
                    <option value="yellow">Yellow</option>
                    <option value="green">Green</option>
                </ColorFilter>
                <SizeFilter>
                    <option value="size" selected>Size</option>
                    <option value="XS">XS</option>
                    <option value="S">S</option>
                    <option value="M">M</option>
                    <option value="L">L</option>
                    <option value="XL">XL</option>
                </SizeFilter>
            </FilterProducts>
            <SortProducts>
                <SubTitle>Sort Products:</SubTitle>
                <PriceFilter>
                    <option value="newest" selected>Newest</option>
                    <option value="asc">Price(asc)</option>
                    <option value="desc">Price(desc)</option>
                </PriceFilter>
            </SortProducts>
        </FilterContainer>
        <Products/>
        <NewsLetter/>
        <Footer/>
    </Container>
  )
}

export default ShoppingCategory
