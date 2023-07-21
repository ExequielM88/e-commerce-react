import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const productsSlice = createSlice({
    name:"products",
    initialState:null,
    reducers: {
        setProductGlobal: (state , action) => action.payload
    }
})

export  const { setProductGlobal} = productsSlice.actions

export default productsSlice.reducer

export const getAllProductsThunk = (url = "https://e-commerce-api-v2.academlo.tech/api/v1/products") => (dispatch) => {
    axios.get(url)
      .then(res => dispatch(setProductGlobal(res.data)))
      .catch(err => console.log(err))
}