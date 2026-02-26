import { createSlice } from '@reduxjs/toolkit'



const initialState = {
  value: 0,
}

export const cartSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    
  },
})

// Action creators are generated for each case reducer function
export const { } = cartSlice.actions

export default cartSlice.reducer