import React, { useRef } from 'react'
import { useSelector } from 'react-redux'
import CardProduct from "../components/Home/CardProduct"
import { useState } from 'react'
import FilterCategories from '../components/Home/FilterCategories'
import "./styles/home.css"


const Home = () => {

  const [inputValues, setinputValues] = useState ("")

  const {ProductsGlobal} = useSelector(state => state)

  const [categoriesClose, setCategoriesClose] = useState(true)

 
  
  const input = useRef()

  const handleChangeInput = () => {
    setinputValues(input.current.value.toLowerCase())
  }

  const productFilter = ProductsGlobal?.filter( prod => prod.title.toLowerCase().includes(inputValues))

  const handleOpenCategories = () => {
    setCategoriesClose(false)
  }

 
  return (
    <div className='container-home'>
      <div className='div-input'>
        <input className='input-home' ref={input} onChange={handleChangeInput} type="text" />
        <i className='bx bx-search-alt' onClick={handleChangeInput}></i>
      </div>
      <button className='filter-home' onClick={handleOpenCategories}>Filter</button>
      <FilterCategories
        setCategoriesClose={setCategoriesClose}
        categoriesClose={categoriesClose} 
      />
      <div>
        {
          productFilter?.map(prod => (
            <CardProduct
              key={prod.id}
              product={prod}
            />
        
          ))
        }
      </div>
    </div>
  )
}

export default Home