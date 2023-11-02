import { createSlice } from "@reduxjs/toolkit";
import db from "../../Database";

const initialState = {
	assignments: db.assignments,
	assignment: {
		title: "New Assignment",
		description: "New Assignment Description",
        points: 100,
		dueDate: "2023-12-12",
		availableFromDate: "",
		availableUntilDate: "",
	},
};

const assignmentsSlice = createSlice({
	name: "assignments",
	initialState,
	reducers: {
		addAssignment: (state, action) => {
			state.assignments = [
				{ ...action.payload, _id: "A" + new Date().getTime().toString() },
				...state.assignments,
			];
		},
        deleteAssignment: (state, action) => {
            state.assignments = state.assignments.filter(
                (assignment) => assignment._id !== action.payload
            );
        },
        updateAssignment: (state, action) => {
            state.assignments = state.assignments.map((assignment) => {
                if (assignment._id === action.payload._id) {
                    return action.payload;
                }
                else {
                    return assignment;
                }
            }) 
        },
        selectAssignment: (state, action) => {
            state.assignment = action.payload;
        }
	},
});

export const { addAssignment, deleteAssignment, updateAssignment, selectAssignment } = assignmentsSlice.actions;
export default assignmentsSlice.reducer;