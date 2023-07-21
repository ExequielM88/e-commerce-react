import React, { useEffect, useState } from 'react'
import useFetch from '../../hooks/useFetch'
import { getAllProductsThunk } from '../../store/slices/Products.slice'
import { useDispatch } from 'react-redux'
import "./styles/filterCategories.css"

const FilterCategories = ({setCategoriesClose, categoriesClose}) => {
  
  const dispatch = useDispatch()
  const url = "https://e-commerce-api-v2.academlo.tech/api/v1/categories"
  const [categories, getAllCategories] = useFetch(url)

  useEffect(() => {
    getAllCategories()  
  }, [])

  const handleClickCategories = (id) => {
    const url = `https://e-commerce-api-v2.academlo.tech/api/v1/products?categoryId=${id}`
    dispatch(getAllProductsThunk(url))
    setCategoriesClose(true)
  }

  const handleClickAllProducts = () => {
    dispatch(getAllProductsThunk())
    setCategoriesClose(true)
  }

  
  const closeCategories = () => {
    setCategoriesClose(true)
  }
 
 
  return (
    <article className={`categories_container ${categoriesClose && "Filter_close"}`}>
      <button onClick={closeCategories}>X</button>
      <h3 className='title'>Filters</h3>
      <div className="filterOne">
        <h3>Price</h3>
        <input type="number" /><br />
        <p>to</p><br />
        <input type="number" /> 
      </div>
      <div className="filterTwo">
        <h3>Category</h3>
        <div className="option-categoriies">
          <ul>
            <li onClick={handleClickAllProducts}>All Products</li>
            {
              categories?.map(category => (
                <li onClick={() => handleClickCategories(category.id)}   key=  {category.id}>{category.name}</li>
              ))
            }
          </ul>
        </div>
      </div>
    </article>
  )
}

export default FilterCategories