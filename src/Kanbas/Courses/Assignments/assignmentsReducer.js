import { createSlice } from "@reduxjs/toolkit";

const initialState = {
	assignments: [],
	assignment: {
		title: "New Assignment",
		description: "New Assignment Description",
		points: 100,
		dueDate: "2023-12-12",
		availableFromDate: "",
		availableUntilDate: "",
	},
    lastUpdated: Date.now(),
};

const assignmentsSlice = createSlice({
	name: "assignments",
	initialState,
	reducers: {
		setAssignments: (state, action) => {
			state.assignments = action.payload;
		},
        setLastUpdated: (state, action) => {
            state.lastUpdated = action.payload;
        },
		addAssignment: (state, action) => {
			state.assignments = [action.payload, ...state.assignments];
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
				} else {
					return assignment;
				}
			});
		},
		selectAssignment: (state, action) => {
			state.assignment = action.payload;
		},
	},
});

export const {
	addAssignment,
	deleteAssignment,
	updateAssignment,
	selectAssignment,
	setAssignments,
    setLastUpdated,
} = assignmentsSlice.actions;
export default assignmentsSlice.reducer;
