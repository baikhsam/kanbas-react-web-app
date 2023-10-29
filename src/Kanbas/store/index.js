import { configureStore } from "@reduxjs/toolkit";
import coursesReducer from "../Dashboard/coursesReducer";
const store = configureStore({
	reducer: {
		coursesReducer,
	},
});
export default store;