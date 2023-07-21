import axios from "axios"
import getConfigToken from "../utils/getConfigToken"
import { getAllProductsCartThunk } from "../store/slices/Cart.slice"
import { useDispatch } from "react-redux"

const useCrudCart = () => {

  const dispatch = useDispatch()
  
  const addProductCart = data => {
    const url ='https://e-commerce-api-v2.academlo.tech/api/v1/cart'
    axios
      .post(url, data, getConfigToken())
      .then((res) => {
        
        dispatch(getAllProductsCartThunk())
      })
      .catch(err => {
        console.log(err)
      //ejercutar el update semana7lunesmin67
      if(err?.response?.data?.error === "Product already added to cart") {
        updateProductFromCart(data)
      }
     })
  }

  const deleteProductfromCart = id => {
    const url = `https://e-commerce-api-v2.academlo.tech/api/v1/cart/${id}`
    axios.delete(url, getConfigToken())
      .then(res => {
        dispatch(getAllProductsCartThunk())
      })
      .catch(err => console.log(err))
  }

  const updateProductFromCart = (id, data) => {
    const url = `https://e-commerce-api-v2.academlo.tech/api/v1/cart${id}`
    axios.put(url, data, getConfigToken())
      .then(res => {
        dispatch(getAllProductsCartThunk())
      }) 
      .catch(err => console.log(err))
  }

  return {addProductCart, deleteProductfromCart, updateProductFromCart}
}

export default useCrudCart

