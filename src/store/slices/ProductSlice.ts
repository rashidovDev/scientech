import { createSlice } from "@reduxjs/toolkit"

export interface ProductState {
    productIsVisible : boolean
  }

  const initialState: ProductState = {
    productIsVisible : true
  }

export const productSlice = createSlice({
    name : "product",
    initialState,
    reducers :{
        toggle(state) {
            state.productIsVisible = !state.productIsVisible
        }
    }
})

export const productAction = productSlice.actions;
export default productSlice.reducer;