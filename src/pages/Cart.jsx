import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getAllProductsCartThunk } from '../store/slices/Cart.slice'
import ProductInCart from '../components/Cart/ProductInCart'
import usePurchase from '../hooks/useCrudPurchase'
import "./styles/cart.css"

const Cart = () => {
  
  const dispatch = useDispatch()

  const {buyThisCart} = usePurchase()

  useEffect(() => {
    dispatch(getAllProductsCartThunk())
  }, [])
  

  const {CartGlobal} = useSelector(state => state)

  const totalpriceCart = CartGlobal?.reduce((acc, cv) => acc + cv.quantity * cv.product.price , 0)

  const handlePurchase = () => {
    buyThisCart()
  }

  
  
  return (
    <div className="cart_container">
      <h1>Cart</h1>
      <div>
        {
          CartGlobal?.map(prodCart =>(
            <ProductInCart 
              key={prodCart.id}
              prodCart={prodCart}
            />        
          ))
        }
      </div>
      <footer>
        <span>Total:</span>
        <h3>$ {totalpriceCart}</h3>
        <button onClick={handlePurchase}>Buy now</button>
      </footer>
    </div>
  )


}

export default Cart