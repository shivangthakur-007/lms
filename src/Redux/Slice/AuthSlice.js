import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { data } from "autoprefixer";
import axiosInstance from "../../Helper/axiosInstance";
import toast from "react-hot-toast";

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

const authSlice= createSlice({
    name: 'auth',
    initialState,
    reducers: {},
})

export default authSlice.reducer;