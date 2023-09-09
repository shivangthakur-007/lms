import { createSlice } from "@reduxjs/toolkit";

const initialState= {
    isloggedIn: localStorage.getItem('isLoggedIn') || false,
    role: localStorage.getItem('role') || "",
    data: localStorage.getItem('data') || {},
}

const authSlice= createSlice({
    name: 'auth',
    initialState,
    reducers: {},
})

export default authSlice.reducer;