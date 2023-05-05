import { createSlice } from "@reduxjs/toolkit"

const navSlice = createSlice({
  name: "nav",
  initialState: {
    isToggle: true,
  },
  reducers: {
    toggleMenu: (state) => {
      state.isToggle = !state.isToggle
    },
    closeMenu: (state) => {
      state.isToggle = false
    },
  },
})

export const { toggleMenu, closeMenu } = navSlice.actions
export default navSlice.reducer
