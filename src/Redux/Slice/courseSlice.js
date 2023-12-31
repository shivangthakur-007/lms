import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import toast from "react-hot-toast";
import axiosInstance from "../../Helper/axiosInstance";

const initialState = {
  courseData: [],
};
export const getAllCourses = createAsyncThunk("/course/get", async () => {
  try {
    const response = axiosInstance.get("/courses");
    toast.promise(response, {
      loading: "Loading course data...",
      success: "Courses loaded successfully",
      error: "Failed to get Courses",
    });
    return (await response).data.courses;
  } catch (e) {
    toast.e(e?.response?.data?.message);
  }
});

export const createNewCourse= createAsyncThunk("/course/create", async (data)=>{
  try {
    let formData= new FormData();
    formData.append('title', data?.title)
    formData.append('description', data?.description)
    formData.append('category', data?.category)
    formData.append('createdBy', data?.createdBy)
    formData.append('thumbnail', data?.thumbnail)

    const response = axiosInstance.post('/courses', formData)
    toast.promise(response, {
      loading: 'creating new course',
      success: 'course created successfully',
      error: 'Failed to create course'
    });
    return (await response).data;
  } catch (error) {
    
  }
})

const courseSlice = createSlice({
  name: "Course",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getAllCourses.fulfilled, (state, action) => {
      if (action.payload) {
        // console.log(action.payload);
        state.courseData = [...action.payload];
      }
    });
  },
});

export default courseSlice.reducer;
