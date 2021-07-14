import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  isLogged: false,
}

export const userSlice = createSlice({
  name: 'isLoggedIn',
  initialState,
  reducers: {
    sign_in: (state) => {
      state.isLogged = true
    },
  },
})

// Action creators are generated for each case reducer function
export const { sign_in } = userSlice.actions

export default userSlice.reducer