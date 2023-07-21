import React from 'react'

const ProductPurchases = ({prodPurchase}) => {
  console.log(prodPurchase)
  return (
    <article>
      <img src={prodPurchase.product.images[0].url} alt="" />
      <h3>{prodPurchase.product.title}</h3>
      <span>{prodPurchase.quantity}</span><br />

      
      <span>{prodPurchase.quantity * prodPurchase.product.price}</span>
    </article>
  )
}

export default ProductPurchases