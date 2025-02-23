import React from 'react'
import Container from '../components/Container'
import CartClient from './CartClient'

const Cart = () => {
  return (
    <div className='mt-8'>
      <Container>
        <CartClient />
      </Container>
    </div>
  )
}

export default Cart