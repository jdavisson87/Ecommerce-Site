import React from 'react'

import { CartItemContainer, ItemImage, ItemDetailsContainer } from './cart-item.styles'

const CartItem = ({ item: { imageUrl, price, name, quantity } }) => (
  <CartItemContainer>
    <ItemImage src={imageUrl} alt='item' />
    <ItemDetailsContainer className='item-details'>
      <span>{name}</span>
      <span>
        {quantity} x ${price}
      </span>
    </ItemDetailsContainer>
  </CartItemContainer>
)

export default CartItem