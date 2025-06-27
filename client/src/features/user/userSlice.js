import { createSlice,createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const initializeState = createAsyncThunk('fetch/initializeState', async() => {
    try {
        const response = await axios({
            method: 'get',
            url: 'http://localhost:3000/refresh',
            withCredentials: true,
        });
        console.log(response)
        return response.data;
    } catch (error) {
        console.log(error.message)
        return null;
    }
})

export const logout = createAsyncThunk('delete/clearCookie', async() => {
    try {
        const clearCookie = await axios({
            method: 'delete',
            url: 'http://localhost:3000/api/user/logout',
            withCredentials: true
        })
        const response = clearCookie.data;
        return response;
    } catch (error) {
        console.log(error.message);
        return error.message
    }
})

const initialState = {
    username: '',
    role: '',
    accessToken: '',
    isInitialized: false,
    error: ''
}

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setUser: (state,action) => {
            state.username = action.payload.username;
            state.role = action.payload.role;
            state.accessToken = action.payload.accessToken;
            state.isInitialized = true
        },
        reset: (state) => {
            state.username = ''
            state.role = '' 
            state.accessToken = ''
            state.error = ''
        }
    },
    extraReducers: (builder) => {
        builder.addCase(initializeState.fulfilled, (state,action) => {
            state.username = action.payload? action.payload.username : ''
            state.role = action.payload? action.payload.role : ''
            state.accessToken = action.payload? action.payload.accessToken : ''
            state.isInitialized = true
        }),
        builder.addCase(logout.rejected, (state,action) => {
            state.error = action.payload.message
        }),
        builder.addCase(logout.fulfilled, (state,action) => {
            state.username = ''
            state.role = ''
            state.accessToken = ''
        })
    }
})

export const { reset,setUser } = userSlice.actions
export default userSlice.reducer