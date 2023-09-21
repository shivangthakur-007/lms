import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import toast from "react-hot-toast"
import axiosInstance from "../../Helper/axiosInstance"

const initialState = {
    courseData: [],

}
export const getAllCourses= createAsyncThunk('/course/get', async()=>{
    try {
        const response= axiosInstance.get('/courses');
        toast.promise(response, {
            loading: "Loading course data...",
            success: "Courses loaded successfully",
            error: "Failed to get Courses"
        });
        return (await response).data; 
    } catch (e) {
        toast.e(e?.response?.data?.message);
    }
})
const courseSlice= createSlice({
    name: 'Course',
    initialState,
    reducers,
    extraReducers: (builders)=> {
        
    }
})

export default courseSlice.reducer;