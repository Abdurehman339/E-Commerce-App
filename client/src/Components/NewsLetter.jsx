import React from 'react'
import styled from 'styled-components'
import Send from '@mui/icons-material/Send';

const Container = styled.div`
    height: 60vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-color: #fcf5f5;
`
const Title = styled.h1`
    font-size: 70px;
    margin-bottom: 20px;
`
const Description = styled.p`
    font-size: 24px;
    font-weight: 300;
    margin-bottom: 20px;
`
const InputContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 50%;
    background-color: white;
    border: 1px solid lightgray;
    padding: 0;
`
const Input = styled.input`
    flex: 9;
    font-size: 20px;
    border: none;
`
const Button = styled.button`
    flex: 1;
    color: white;
    background-color: teal;
    height: 100%;
    border: none;
`

const NewsLetter = () => {
  return (
    <Container>
      <Title>NewsLetter</Title>
      <Description>Get timely updates from your favorite products.</Description>
      <InputContainer>
        <Input placeholder='Email'/>
        <Button>
            <Send style={{
                            }}/>
        </Button>
      </InputContainer>
    </Container>
  )
}

export default NewsLetter
