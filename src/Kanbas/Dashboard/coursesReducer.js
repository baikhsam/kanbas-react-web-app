import { createSlice } from "@reduxjs/toolkit";
import db from "../Database";

const newDefaultCourse = {
	name: "New Course",
	number: "New Course Number",
	startDate: "2023-09-10",
	endDate: "2023-12-15",
};
const initialState = {
	courses: db.courses,
	course: newDefaultCourse,
};

const coursesSlice = createSlice({
	name: "courses",
	initialState,
	reducers: {
		addNewCourse: (state, action) => {
			const newCourses = [
				...state.courses,
				{ ...action.payload, _id: new Date().getTime() },
			];
			state.courses = newCourses;
			state.course = newDefaultCourse;
		},
		deleteCourse: (state, action) => {
			const newCourses = state.courses.filter(
				(course) => course._id !== action.payload
			);
			state.courses = newCourses;
		},
		updateCourse: (state, action) => {
			const newCourses = state.courses.map((course) =>
				course._id === action.payload._id ? action.payload : course
			);
			state.courses = newCourses;
			state.course = newDefaultCourse;
		},
		setCourse: (state, action) => {
			state.course = action.payload;
		},
	},
});
export const { addNewCourse, deleteCourse, updateCourse, setCourse } =
	coursesSlice.actions;
export default coursesSlice.reducer;
