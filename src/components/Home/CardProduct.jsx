import React from 'react'
import "./styles/CardProduct.css"
import { useNavigate } from 'react-router-dom'
import useCrudCart from '../../hooks/useCrudCart'

const CardProduct = ({product}) => {

  const navigate =  useNavigate()
  const {addProductCart} = useCrudCart()

  const handleSelectProduct = () => {
    navigate(`/product/${product.id}`)
  }

  const handleBtn = (e) => {
    e.stopPropagation();
    const data = {
      quantity: 1,
      productId: product.id
    }
    addProductCart(data)
  }

  
  return (
    <article className='product' onClick={handleSelectProduct}>
      <header className='product-header'>
        <img className='product-img product-img-1' src={product.images[0].url} alt="" />
        <img className='product-img product-img-2' src={product.images[1].url} alt="" />
      </header>
      <div className="product-body">
        <section className='product-section'>
          <h4 className='product_subtitle'>{product.brand}</h4>
          <h3 className='product-title'>{product.title}</h3>
        </section>
        <div className='product-price'>
          <span className='product-price_label'>Price</span>
          <span className='product-price_value'>$ {product.price}</span>
        </div>
        <button className='button' onClick={handleBtn}>
          <i className='bx bxs-cart-download product-btn_icon'></i>
        </button>
      </div>
    </article>
  )
}

export default CardProduct