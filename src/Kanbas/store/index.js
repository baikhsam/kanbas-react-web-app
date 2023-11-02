import { configureStore } from "@reduxjs/toolkit";
import coursesReducer from "../Dashboard/coursesReducer";
import modulesReducer from "../Courses/Modules/modulesReducer";
import assignmentsReducer from "../Courses/Assignments/assignmentsReducer";

const store = configureStore({
	reducer: {
		coursesReducer,
		modulesReducer,
		assignmentsReducer,
	},
});
export default store;