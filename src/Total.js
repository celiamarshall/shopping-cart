import React from 'react'

function Total({items}) {
  const total = items.reduce((total, item) => total + (item.product.priceInCents * item.quantity), 0)

  return (
    <p>Cart Total: ${total/100}</p>
  )

}

export default Total