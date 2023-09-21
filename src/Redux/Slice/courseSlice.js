import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import toast from "react-hot-toast";
import axiosInstance from "../../Helper/axiosInstance";

const initialState = {
  courseData: [],
};
export const getAllCourses = createAsyncThunk("/courses", async () => {
  try {
    const response = axiosInstance.get("/courses");
    toast.promise(response, {
      loading: "Loading course data...",
      success: "Courses loaded successfully",
      error: "Failed to get Courses",
    });
    return (await response).data;
  } catch (e) {
    toast.e(e?.response?.data?.message);
  }
});
const courseSlice = createSlice({
  name: "courses",
  initialState,
  reducers: {},
  extraReducers: (builder) => { 
    builder.addCase(getAllCourses.fulfilled, (state, action) => {
      if (action.payload) {
        console.log(action.payload)
        state.courseData = [...action.payload];
      }
    });
  },
});

export default courseSlice.reducer;
