import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import useFetch from '../hooks/useFetch'
import ProductIdInfo from '../components/ProductId/productIdInfo'
import SlidersImg from '../components/ProductId/SlidersImg'
import SimilarProducts from '../components/ProductId/SimilarProducts'
import "./styles/ProductId.css"

const ProductId = () => {
  
  const {id} = useParams()
  const url = `https://e-commerce-api-v2.academlo.tech/api/v1/products/${id}`
  const [product,getProductById] = useFetch(url)

  
  useEffect(() => {
    getProductById()
  }, [id])
  
  
 
  return (
    <div className='container-productid'>
      <SlidersImg product={product} />
      <ProductIdInfo product={product} />
      <SimilarProducts product={product} />
    </div>
  )
}

export default ProductId