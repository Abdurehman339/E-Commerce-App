import React from 'react'
import styled from 'styled-components'
import Navbar from '../Components/Navbar'
import Announcement from '../Components/Announcement'
import bag2 from '../Images/bag2.png'
import Add from '@mui/icons-material/Add';
import Remove from '@mui/icons-material/Remove';
import NewsLetter from '../Components/NewsLetter'
import Footer from '../Components/Footer'

const Container = styled.div``
const Wrapper = styled.div`
    display: flex;
`
const ImageContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex: 1;
`
const Image = styled.img`
    height: 80vh;
`
const InfoContainer = styled.div`
    margin: 4vh 0;
    flex: 1;
`
const Title = styled.h1``
const Description = styled.p`
    width: 70%;
    font-size: 18px;

`
const Price = styled.span`
    font-size: 5vh;
`
const FilterContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 50%;
    margin-top: 5vh;
`
const ColorFilterContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
`
const ColorFilter = styled.div`
    height: 20px;
    width: 20px;
    margin-left: 5px;
    background-color: ${props=>props.bg};
    border-radius: 50%;
    cursor: pointer;
`
const SizeFilterContainer = styled.div`
`
const SizeFilter = styled.select`
    padding: 2px 10px;
    border-radius: 5px;
`
const AddContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 50%;
    margin-top: 3vh;
`
const QuantityContainer = styled.div`
    display: flex;
    align-items: center;
`
const Counter = styled.div`
    border: 1px solid teal;
    border-radius: 5px;
    padding: 2px 10px;
    margin: 0px 5px;
`

const AddButton = styled.button`
    border: 2px solid teal;
    border-radius: 5px;
    padding: 5px 10px;
    background-color: white;
    &:hover{
        background-color: #f3f1f1;
    }
`


const Product = () => {
  return (
    <Container>
        <Navbar/>
        <Announcement/>
        <Wrapper>
            <ImageContainer>
                <Image src={bag2}/>
            </ImageContainer>
            <InfoContainer>
                <Title>Branded Bag</Title>
                <Description>Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio voluptatibus veniam recusandae voluptatum voluptate in tempora rem obcaecati facere. Natus repudiandae saepe enim ad iusto quo quam perspiciatis laboriosam! Ducimus?</Description>
                <Price>$20</Price>
                <FilterContainer>
                    <ColorFilterContainer>
                        Color
                        <ColorFilter bg="black"></ColorFilter>
                        <ColorFilter bg="blue"></ColorFilter>
                        <ColorFilter bg="grey"></ColorFilter>
                    </ColorFilterContainer>
                    <SizeFilterContainer>
                        <SizeFilter>
                            <option value="size">Size</option>
                            <option value="XS">XS</option>
                            <option value="S">S</option>
                            <option value="M">M</option>
                            <option value="L">L</option>
                            <option value="XL">XL</option>
                        </SizeFilter>
                    </SizeFilterContainer>
                </FilterContainer>
                <AddContainer>
                    <QuantityContainer>
                        <Add style={{color: 'black', border: 'none', cursor: 'pointer'}}/>
                        <Counter>1</Counter>
                        <Remove style={{color: 'black', border: 'none', cursor: 'pointer'}}/>
                    </QuantityContainer>
                    <AddButton>Add to Cart</AddButton>
                </AddContainer>
            </InfoContainer>
        </Wrapper>
        <NewsLetter/>
        <Footer/>
    </Container>
  )
}

export default Product
