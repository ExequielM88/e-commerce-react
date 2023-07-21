import React from 'react'
import useFetch from '../../hooks/useFetch'
import { useEffect } from 'react'
import CardProduct from '../Home/CardProduct'
import "./styles/similarProducts.css"

const SimilarProducts = ({product}) => {
  
  const url = `https://e-commerce-api-v2.academlo.tech/api/v1/products?categoryId=${product?.id}`
  const [filterProduct, getProductByCategory ] = useFetch(url)

  useEffect(() => {
    if (product){
      getProductByCategory()}
  }, [product])
  
  
  return (
    <section>
      <h2 className='similar_title'>Discovery similar products</h2>
      <div>
        {
          filterProduct?.map(prod => {
            if(prod.id !== product.id){
              return (
              <CardProduct
                key={prod.id}
                product={prod}
              />)
            }
            
          })
        }
      </div>
    </section>
  )
}

export default SimilarProducts