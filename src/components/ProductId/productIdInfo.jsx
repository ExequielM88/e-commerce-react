import React from 'react'
import { useState } from 'react'
import useCrudCart from '../../hooks/useCrudCart'
import "./styles/productIdInfo.css"

const productIdInfo = ({product}) => {
  const [quantity, setquantity] = useState(1)
  const {addProductCart} = useCrudCart()
  const handlePlus = () => setquantity(quantity+1)

  const handleMinus = () => {if(quantity>1){setquantity(quantity-1)}}
  
  const handleAddToCart = () => {
    const data = {
      quantity: quantity,
      productId: product.id,
    }
    addProductCart(data)
  }

  return (
    <section className='container-productIdInfo'>
      <h3 className='brand'>{product?.brand}</h3>
      <h2 className='title-productinfo'>{product?.title}</h2>
      <section className='container-product-quantity'>
        <div className='product-price'>
          <span className='price'>Price</span>
          <span className='span-price'>$ {product?.price}</span>
        </div>
        <div className='quantity'>
          <span className='span-quantity'>Quantity</span>
          <div className='button-quantity'>
            <button className='minuos-more' onClick={handleMinus}>&#45;</button>
            <div className='cant-quantity'>{quantity}</div>
            <button className='minuos-more' onClick={handlePlus}>&#43;</button>
          </div>
        </div>
      </section>
      <div className='container-button'>
          <button className='button-addcart' onClick=  {handleAddToCart}>Add to Cart <i className='bx   bxs-cart-download product-btn_icon'></i>
          </button>
        </div>
      <footer className='container-description'>
        <p className='description'>{product?.description}</p>
      </footer>
    </section>
    
  )
}

export default productIdInfo