import { configureStore } from '@reduxjs/toolkit'
import counterReducer from './counterReducer'
import isLoggedReducer from './isLoggedReducer'

export const store = configureStore({
  reducer: {
      counter: counterReducer,
      isLogged: isLoggedReducer
  },
})