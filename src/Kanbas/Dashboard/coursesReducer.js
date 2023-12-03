import { createSlice } from "@reduxjs/toolkit";

const initialState = {
	courses: [],
	course: {
		name: "New Course",
		number: "New Course Number",
		startDate: "2023-09-10",
		endDate: "2023-12-15",
	},
};

const coursesSlice = createSlice({
	name: "courses",
	initialState,
	reducers: {
		setCourses: (state, action) => {
			state.courses = action.payload;
		},
		addNewCourse: (state, action) => {
			state.courses = [action.payload, ...state.courses];
		},
		deleteCourse: (state, action) => {
			state.courses = state.courses.filter(
				(course) => course._id !== action.payload
			);
		},
		updateCourse: (state, action) => {
			state.courses = state.courses.map((course) =>
				course._id === action.payload._id ? action.payload : course
			);
		},
		setCourse: (state, action) => {
			state.course = action.payload;
		},
	},
});
export const {
	addNewCourse,
	deleteCourse,
	updateCourse,
	setCourse,
	setCourses,
} = coursesSlice.actions;
export default coursesSlice.reducer;
