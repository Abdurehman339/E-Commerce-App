import React from 'react'
import styled from 'styled-components'

const  Container = styled.div`
  margin: 0;
  padding: 0;
  background-color: #71ccc7;
  color: white;
  font-size: 15px;
  font-weight: 500;
  display: flex;
  align-items: center;
  justify-content: center;
`
const Announcement = () => {
  return (
    <Container>
        Super Deal! Free Shipping on Orders Over $50
    </Container>
  )
}

export default Announcement