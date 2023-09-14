import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import toast from "react-hot-toast";
import { data } from "autoprefixer";
import axiosInstance from "../../Helper/axiosInstance";

const initialState= {
    isloggedIn: localStorage.getItem('isLoggedIn') || false,
    role: localStorage.getItem('role') || "",
    data: localStorage.getItem('data') || {},
}

    export const createAccount= createAsyncThunk('/auth/signup', async (data)=> {
        try {
            const res=axiosInstance.post('user/register', data)
            toast.promise(res, {
                loading: 'Wait! creating your account',
                success: (data)=>{
                    return data?.data?.message;
                },
                error: 'failed to create Your account'
            });
            return (await res).data
        } catch (e) {
            toast.e(e?.response?.data?.message);
        }
    })
    export const Login= createAsyncThunk('/auth/login', async (data)=> {
        try {
            const res=axiosInstance.post('user/login', data)
            toast.promise(res, {
                loading: 'Wait! authentication is in progress...',
                success: (data)=>{
                    return data?.data?.message;
                },
                error: 'failed to log in'
            });
            return (await res).data
        } catch (e) {
            toast.e(e?.response?.data?.message);
        }
    })

const authSlice= createSlice({
    name: 'auth',
    initialState,
    reducers: {},
    extraReducers: (builder)=>{
        builder.addCase(Login.fulfilled, (state, action)=>{
            localStorage.setItem('data', JSON.stringify(action?.payload?.user))
            localStorage.setItem('<isLogged></isLogged>In', true)
            localStorage.setItem('role', action?.payload?.user?.role)
            state.isloggedIn= true;
            state.data=action?.payload?.user;
            state.role= action?.payload?.user?.role;
        })
    }
})

export default authSlice.reducer;