import React, {useEffect} from 'react'
import usePurchase from '../hooks/useCrudPurchase'
import ProductPurchases from "../components/Purchase/ProductPurchases"

const Purchases = () => {
  const {purchases, getAllProductsPurchases} = usePurchase()

  useEffect(() => {
    getAllProductsPurchases()
  
  }, [])
  
  return (
    <div>
      <h2>Purchases</h2>
      <div>
        {
          purchases?.map(prodPurchase => (
            <ProductPurchases
              key={prodPurchase.id}
              prodPurchase={prodPurchase}
            />
          ))
        }
      </div>
    </div>
  )
}

export default Purchases