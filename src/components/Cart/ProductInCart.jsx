import React from 'react'
import useCrudCart from '../../hooks/useCrudCart'

const ProductInCart = ({prodCart}) => {
    console.log(prodCart)

  const {deleteProductfromCart} = useCrudCart()    

  const handleDeleteCart = () => {
    deleteProductfromCart(prodCart.id)
  }    
  return (
    <article>
      <header>
        <img src={prodCart.product.images[0].url} alt="" />
      </header>
      <section>
        <h3>{prodCart.product.title}</h3>
      </section>
      <button>
        <i className='bx bx-trash' onClick={handleDeleteCart}></i>
      </button>
      <footer>
        <span>{prodCart.quantity}</span>
        <div>
          <span>Subtotal:</span>
          <span>{prodCart.product.price}</span>
        </div>
      </footer>
    </article>
  )
}

export default ProductInCart