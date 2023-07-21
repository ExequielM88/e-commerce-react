import { Route, Routes } from 'react-router-dom'
import "./App.css"
import Home from './pages/Home'
import { useEffect } from 'react'
import { getAllProductsThunk } from './store/slices/Products.slice'
import { useDispatch, useSelector } from 'react-redux'
import Header from "./components/shared/Header"
import ProductId from './pages/ProductId'
import Register from './pages/Register'
import LogIn from './pages/LogIn'
import Cart from "./pages/Cart"
import Purchases from './pages/Purchases'


function App() {

  

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getAllProductsThunk())

  }, [])

  

  
  return (


    <div className="app">
      <Header />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/register" element={<Register />}></Route>
        <Route path="/login" element={<LogIn />}></Route>
        <Route path="/product/:id" element={<ProductId />}></Route>
        <Route path="/cart" element={<Cart />}></Route>
        <Route path="/purchases" element={<Purchases />}></Route>
      </Routes>
    </div> 
  )
}

export default App
