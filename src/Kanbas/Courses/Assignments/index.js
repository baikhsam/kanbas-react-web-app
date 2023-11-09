import React from "react";
import { Link, useParams } from "react-router-dom";
import db from "../../Database";
import {
	FaEllipsisVertical,
	FaCircleCheck,
	FaGripVertical,
	FaPenToSquare,
	FaPlus,
	FaMagnifyingGlass,
	FaChevronDown
} from "react-icons/fa6";
import { GoTriangleDown } from "react-icons/go";
import "./index.css";

function Assignments() {
	const { courseId } = useParams();
	const assignments = db.assignments;
	const courseAssignments = assignments.filter(
		(assignment) => assignment.course === courseId
	);
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
					<button
						type="button"
						className="btn btn-sm btn-danger mx-1 float-end text-white bg-danger"
					>
						+ Assignment
					</button>
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
							{courseAssignments.map((assignment) => (
								<li className="list-group-item d-flex flex-row">
									<div className="d-inline-flex align-items-center">
										<FaGripVertical className="float-start mx-2" />
										<FaPenToSquare className="float-start mx-2" />
									</div>
									<div className="d-flex flex-column mx-3">
										<Link
											key={assignment._id}
											to={`/Kanbas/Courses/${courseId}/Assignments/${assignment._id}`}
											classNameName="list-group-item"
										>
											<h5 className="mb-1">
												{assignment.title}
											</h5>
										</Link>
										<small>
											Week 0 - SETUP - Week starting on
											Monday September 5th Module
										</small>
										<small>
											Due Sept 18, 2022 at 11:59pm | 100
											pts
										</small>
									</div>
									<div className="wd-right-icons d-inline-flex align-items-center">
										<FaCircleCheck
											className="float-end mx-1 my-1"
											color="green"
										/>
										<FaEllipsisVertical className="float-end mx-1 my-1" />
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
