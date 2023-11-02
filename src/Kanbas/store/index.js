import { configureStore } from "@reduxjs/toolkit";
import coursesReducer from "../Dashboard/coursesReducer";
import modulesReducer from "../Courses/Modules/modulesReducer";
const store = configureStore({
	reducer: {
		coursesReducer,
		modulesReducer,
	},
});
export default store;