import React, { useState } from 'react'
import img1 from '../Images/img1.png'
import img2 from '../Images/img2.png'
import img3 from '../Images/img3.png'
import { styled } from 'styled-components'
import ArrowLeftOutlined from '@mui/icons-material/ArrowLeftOutlined';
import ArrowRightOutlined from '@mui/icons-material/ArrowRightOutlined';

const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  position: relative;
  overflow-x: hidden;
`
const Arrow = styled.div`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background-color: #fcfbfb;
  position: absolute;
  top: 40%;
  left: ${props=>props.direction==='left'&&'20px'};
  right: ${props=>props.direction==='right'&&'20px'};
  margin: auto;
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 0.5;
  cursor: pointer;
`
const Wrapper = styled.div`
  height: 100%;
  display: flex;
  transform: translateX(${(props) => props.index * -100}vw);
`
const Slide = styled.div`
  display: flex;
  width: 100vw;
  height: 100vh;
  background-color: #${(props) => props.bg};
`
const ImageContainer = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: end;
`
const Image = styled.img`
  height: 80%;
`
const InfoContainer = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 50px;
  background-color: transparent;
`
const Title = styled.h1`
  margin-bottom: 30px;
  font-size: 70px;
  background-color: transparent;
`
const Description = styled.div`
  font-size: 30px;
  font-weight: 500;
  margin-bottom: 30px;
  background-color: transparent;
`
const Button = styled.button`
  width : 25%;
  padding: 10px;
  background-color: transparent;
  font-weight: bolder;
  margin-bottom: 30px;
`

const Slider = () => {
  const [index, setIndex] = useState(0);
  const handleArrow = (direction)=>{
    console.log(direction)
    if(direction === 'left'){
      setIndex(index>0? index-1 : 2)
    } else {
      setIndex(index<2? index+1 : 0)
    }
  }
  return (
    <Container>
      <Wrapper index={index}>
        <Slide bg={'f5fafd'}>
          <ImageContainer>
            <Image src={img1} alt='...'/>
          </ImageContainer>
          <InfoContainer>
            <Title>SUMMER SALE</Title>
            <Description>DON'T COMPROMISE ON STYLE! GET FLAT 30% OFF FOR NEW ARRIVAL</Description>
            <Button>SHOP NOW</Button>
          </InfoContainer>
        </Slide>
        <Slide bg={'fcf1ed'}>
          <ImageContainer>
            <Image src={img2} alt='...'/>
          </ImageContainer>
          <InfoContainer>
            <Title>AUTUMN COLLECTION</Title>
            <Description>DON'T COMPROMISE ON STYLE! GET FLAT 30% OFF FOR NEW ARRIVAL</Description>
            <Button>SHOP NOW</Button>
          </InfoContainer>
        </Slide>
        <Slide bg={'fbf0f4'}>
          <ImageContainer>
            <Image src={img3} alt='...'/>
          </ImageContainer>
          <InfoContainer>
            <Title>LOUNGEWEAR LOVE</Title>
            <Description>DON'T COMPROMISE ON STYLE! GET FLAT 30% OFF FOR NEW ARRIVAL</Description>
            <Button>SHOP NOW</Button>
            </InfoContainer>
          </Slide>
      </Wrapper>           
      <Arrow direction='left' onClick={()=>handleArrow('left')}>
        <ArrowLeftOutlined/>
      </Arrow>   
      <Arrow direction='right' onClick={()=>handleArrow('right')}>
        <ArrowRightOutlined/>
      </Arrow>        
    </Container>
  )
}

export default Slider
