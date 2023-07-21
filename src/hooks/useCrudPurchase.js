import axios from 'axios'
import React, { useState } from 'react'
import getConfigToken from '../utils/getConfigToken'
import { getAllProductsCartThunk } from '../store/slices/Cart.slice'
import { useDispatch } from 'react-redux'

const url = "https://e-commerce-api-v2.academlo.tech/api/v1/purchases"

const usePurchase = () => {
  
  const [purchases, setPurchases] = useState()
  
  const dispatch = useDispatch()

  const buyThisCart = ()  => {
    
    axios.post(url, {}, getConfigToken())
     .then (res =>{
       dispatch(getAllProductsCartThunk())
     })
     .catch(err => console.log(err))
  }

  const getAllProductsPurchases = () => {
    axios.get(url, getConfigToken())
      .then(res =>setPurchases(res.data) )
      .catch(err => console.log(err))
  } 

  return { purchases, getAllProductsPurchases, buyThisCart }
}

export default usePurchase