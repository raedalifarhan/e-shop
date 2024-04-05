import Container from '@/app/components/Container'
import React from 'react'
import ProductDetails from './ProductDetails'
import { product, products } from '@/utils/products'
import ListRating from './ListRating'

interface Params {
    id?: string 
}

const Product = ({params}: {params: Params}) => {
  return (
    <div className='p-8'>
        <Container>
            <ProductDetails product={product} />
            <div className='flex flex-col gap-4 mt-20'>
              <div>Add Rating</div>
              <ListRating product={product} />
            </div>
        </Container>
    </div>
  )
}

export default Product