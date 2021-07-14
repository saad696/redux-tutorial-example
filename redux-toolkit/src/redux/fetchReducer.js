import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const getUsers = createAsyncThunk(
    // string identifier
    'users/getUsers',
    // fetch data
    async () => {
        return await fetch('https://jsonplaceholder.typicode.com/users')
        .then(res => res.json());
    }
)

const userDataSlice = createSlice({
    name: 'user',
    initialState: {
        users: [],
        status: null
    },
    extraReducers: {
        [getUsers.pending]: (state, action) => {
            state.status = 'Loading'
        },
        [getUsers.fulfilled]: (state, action) => {
            state.status = 'success';
            state.users = action.payload
        },
        [getUsers.rejected]: (state, action) => {
            state.status = 'Oops! something went wrong.'
        },
    }
});

export default userDataSlice.reducer;