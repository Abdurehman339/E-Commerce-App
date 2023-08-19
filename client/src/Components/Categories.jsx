import React from 'react'
import CategoryItem from './CategoryItem'
import { categories } from '../Data'
import styled from 'styled-components'

const Container = styled.div`
    display: flex;
    align-items: center;
`

const Categories = () => {
  return (
    <Container>
      {categories.map((item)=>{
        return(
            <CategoryItem item={item} key={item.id}/>
        )
      })}
    </Container>
  )
}

export default Categories