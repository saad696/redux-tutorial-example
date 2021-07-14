import { configureStore } from '@reduxjs/toolkit'
import counterReducer from './counterReducer'
import isLoggedReducer from './isLoggedReducer'
import fetchReducer from './fetchReducer'

export const store = configureStore({
  reducer: {
      counter: counterReducer,
      isLogged: isLoggedReducer,
      users: fetchReducer,
      status: fetchReducer
  },
})