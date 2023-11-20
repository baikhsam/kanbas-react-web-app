import React, { useEffect } from "react";
import { Link, useParams } from "react-router-dom";

import {
	FaEllipsisVertical,
	FaCircleCheck,
	FaGripVertical,
	FaPenToSquare,
	FaPlus,
	FaMagnifyingGlass,
	FaChevronDown,
	FaDeleteLeft,
} from "react-icons/fa6";
import { GoTriangleDown } from "react-icons/go";
import "./index.css";
import { useDispatch, useSelector } from "react-redux";
import {
	deleteAssignment,
	selectAssignment,
	setAssignments,
} from "./assignmentsReducer";
import * as client from "./client";

function Assignments() {
	const { courseId } = useParams();
	const dispatch = useDispatch();
	const lastUpdated = useSelector((state) => state.assignmentsReducer.lastUpdated);
	useEffect(() => {
		client.findAssignmentsForCourse(courseId).then((assignments) => {
			dispatch(setAssignments(assignments));
		});
	}, [courseId, dispatch, lastUpdated]);

	const courseAssignments = useSelector(
		(state) => state.assignmentsReducer.assignments
	);
	const newAssignment = ({
		title: "New Assignment",
		description: "New Assignment Description",
		points: 100,
		dueDate: "2023-12-12",
		availableFromDate: "",
		availableUntilDate: "",
		_id: "",
	});
	const [selectedAssignment, setSelectedAssignment] =
		React.useState(newAssignment);

	const handleDeleteAssignment = (assignmentId) => {
		client.deleteAssignment(assignmentId).then((status) => {
			dispatch(deleteAssignment(assignmentId));
		});
	};

	return (
		<>
			<div className="wd-assignments mx-5 d-flex flex-column">
				<div className="wd-assignments-header my-2">
					<div className="inner-addon float-start">
						<FaMagnifyingGlass className="wd-input-icon left-addon" />
						<input
							className="form-control"
							list="search-assignments-list"
							placeholder="Search Assignments"
							id="search-assignments"
						/>
						<FaChevronDown className="wd-input-icon right-addon" />
					</div>
					<datalist id="search-assignments-list">
						{courseAssignments.map((assignment) => (
							<option value={assignment.title} />
						))}
					</datalist>
					<button
						type="button"
						className="wd-module-header-settings btn btn-sm btn-secondary mx-1 float-end"
					>
						<FaEllipsisVertical />
					</button>
					<Link to={`/Kanbas/Courses/${courseId}/Assignments/Create`}>
						<button
							type="button"
							className="btn btn-sm btn-danger mx-1 float-end text-white bg-danger"
							onClick={() => {
								dispatch(
									selectAssignment({ ...newAssignment })
								);
							}}
						>
							+ Assignment
						</button>
					</Link>
					<button
						type="button"
						className="btn btn-sm btn-secondary mx-1 float-end"
					>
						+ Group
					</button>
				</div>
				<hr />
				<div className="wd-assignments-list my-2">
					<ul className="list-group">
						<li className="list-group-item wd-list-header d-inline-flex align-items-center">
							<FaGripVertical className="float-start mx-1 my-1" />
							<a
								data-bs-toggle="collapse"
								href="#assignments-list"
								role="button"
								aria-expanded="false"
								aria-controls="assignments-list"
							>
								<GoTriangleDown className="wd-triangle float-start mx-1 my-1" />
								<b>Assignments</b>
							</a>
							<div className="wd-right-icons">
								<span className="wd-assignment-percentage border border-dark rounded-pill px-1 py-1 me-3">
									40% of Total
								</span>
								<FaPlus className="mx-1 my-1" />
								<FaEllipsisVertical className="mx-1 my-1" />
							</div>
						</li>
						<div
							className="border-start border-success border-4 collapse show"
							id="assignments-list"
						>
							{courseAssignments.map((assignment, index) => (
								<li
									className="list-group-item d-flex flex-row"
									key={index}
								>
									<div className="d-inline-flex align-items-center">
										<FaGripVertical className="float-start mx-2" />
										<FaPenToSquare className="float-start mx-2" />
									</div>
									<div className="d-flex flex-column mx-3">
										<Link
											to={`/Kanbas/Courses/${courseId}/Assignments/${assignment._id}`}
											onClick={(e) => {
												dispatch(
													selectAssignment(assignment)
												);
											}}
										>
											<h5 className="mb-1">
												{assignment.title}
											</h5>
										</Link>
										<small>
											<span className="text-danger">
												Multiple Modules
											</span>
											{` | Due ${assignment.dueDate} | ${assignment.points} pts`}
										</small>
									</div>
									<div
										className="wd-right-icons d-inline-flex align-items-center"
										key={index}
									>
										<FaCircleCheck
											className="float-end mx-1 my-1"
											color="green"
										/>
										<FaEllipsisVertical className="float-end mx-1 my-1" />
										<FaDeleteLeft
											className="float-end mx-1 my-1"
											color="red"
											data-bs-toggle="modal"
											data-bs-target="#deleteModal"
											onClick={(e) => {
												setSelectedAssignment({
													...assignment,
												});
											}}
										/>
										<div
											className="modal fade"
											id="deleteModal"
											tabindex="-1"
											aria-labelledby="deleteModalLabel"
											aria-hidden="true"
										>
											<div className="modal-dialog">
												<div className="modal-content">
													<div className="modal-header">
														<h1
															className="modal-title fs-5"
															id="deleteModalLabel"
														>
															Delete{" "}
															{
																selectedAssignment.title
															}
															?
														</h1>
														<button
															type="button"
															className="btn-close"
															data-bs-dismiss="modal"
															aria-label="Close"
														></button>
													</div>
													<div className="modal-body">
														Are you sure you want to
														delete this assignment?
													</div>
													<div className="modal-footer">
														<button
															type="button"
															className="btn btn-secondary"
															data-bs-dismiss="modal"
														>
															No
														</button>
														<button
															type="button"
															className="btn btn-primary"
															data-bs-dismiss="modal"
															onClick={() =>
																handleDeleteAssignment(
																	selectedAssignment._id
																)
															}
														>
															Yes
														</button>
													</div>
												</div>
											</div>
										</div>
									</div>
								</li>
							))}
						</div>
					</ul>
				</div>
			</div>
		</>
	);
}
export default Assignments;
