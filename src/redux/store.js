import { configureStore } from "@reduxjs/toolkit"
import navSlice from "./features/navSlice"

const store = configureStore({
  reducer: {
    nav: navSlice,
  },
})

export default store
