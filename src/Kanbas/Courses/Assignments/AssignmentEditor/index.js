import React from "react";
import { useNavigate, useParams, Link } from "react-router-dom";
import db from "../../../Database";
import "./index.css";
import { FaCircleCheck, FaEllipsisVertical, FaCalendarDays } from "react-icons/fa6";

function AssignmentEditor() {
	const { assignmentId } = useParams();
	const assignment = db.assignments.find(
		(assignment) => assignment._id === assignmentId
	);

	const { courseId } = useParams();
	const navigate = useNavigate();
	const handleSave = () => {
		console.log("Actually saving assignment TBD in later assignments");
		navigate(`/Kanbas/Courses/${courseId}/Assignments`);
	};
	return (
		<>
			<div className="wd-assignments mx-5 d-flex flex-column">
				<div className="wd-assignments-header my-2">
					<button
						type="button"
						className="wd-module-header-settings btn btn-sm btn-secondary mx-1 float-end"
					>
						<FaEllipsisVertical />
					</button>
					<div className="mx-2 my-1 float-end wd-assignments-editor-status">
						<FaCircleCheck color="green" className="mx-1" />
						Published
					</div>
				</div>
				<hr />
				<div className="wd-assignments-editor my-2">
					<div className="mb-3">
						<label htmlFor="wd-assignments-name" className="form-label">
							Assignment Name
						</label>
						<input
							type="text"
							className="form-control"
							id="wd-assignments-name"
							defaultValue={assignment.title}
						/>
					</div>
					<div className="mb-3">
						<textarea
							className="form-control"
							id="wd-assignment-description"
							rows="3"
							defaultValue={'This is the assignment description.'}
						>
						</textarea>
					</div>
					<div className="container">
						<div className="row my-3">
							<div className="col-3 text-end">Points</div>
							<div className="col-8">
								<input
									type="text"
									className="form-control"
									id="wd-assignments-points"
									defaultValue="100"
								/>
							</div>
						</div>
						<div className="row my-3">
							<div className="col-3 text-end">
								Assignment Group
							</div>
							<div className="col-8">
								<select className="form-select" defaultValue={"1"}>
									<option value="1">
										ASSIGNMENTS
									</option>
								</select>
							</div>
						</div>
						<div className="row my-3">
							<div className="col-3 text-end">
								Display Grade as
							</div>
							<div className="col-8">
								<select className="form-select" defaultValue={"1"}>
									<option value="1">
										Percentage
									</option>
								</select>
							</div>
						</div>
						<div className="row my-3">
							<div className="col-3 text-end"></div>
							<div className="col-8">
								<div className="form-check">
									<input
										className="form-check-input"
										type="checkbox"
										defaultValue=""
										id="wd-assignments-final-count"
									/>
									<label
										className="form-check-label"
										htmlFor="wd-assignments-final-count"
									>
										Do not count this assignment towards the
										final grade
									</label>
								</div>
							</div>
						</div>
						<div className="row my-3">
							<div className="col-3 text-end">
								Submission Type
							</div>
							<div className="col-8 border">
								<select className="form-select my-2 w-50" defaultValue={"1"}>
									<option value="1">
										Online
									</option>
								</select>
								<b>Online Entry Options</b>
								<div className="form-check my-2">
									<input
										className="form-check-input"
										type="checkbox"
										defaultValue=""
										id="wd-assignments-text-entry"
										defaultChecked
									/>
									<label
										className="form-check-label"
										htmlFor="wd-assignments-text-entry"
									>
										Text Entry
									</label>
								</div>
								<div className="form-check my-2">
									<input
										className="form-check-input"
										type="checkbox"
										defaultValue=""
										id="wd-assignments-web-url"
										defaultChecked
									/>
									<label
										className="form-check-label"
										htmlFor="wd-assignments-web-url"
									>
										Website URL
									</label>
								</div>
								<div className="form-check my-2">
									<input
										className="form-check-input"
										type="checkbox"
										defaultValue=""
										id="wd-assignments-media-rec"
										defaultChecked
									/>
									<label
										className="form-check-label"
										htmlFor="wd-assignments-media-rec"
									>
										Media Recordings
									</label>
								</div>
								<div className="form-check my-2">
									<input
										className="form-check-input"
										type="checkbox"
										defaultValue=""
										id="wd-assignments-student-annotation"
										defaultChecked
									/>
									<label
										className="form-check-label"
										htmlFor="wd-assignments-student-annotation"
									>
										Student Annotation
									</label>
								</div>
								<div className="form-check my-2">
									<input
										className="form-check-input"
										type="checkbox"
										defaultValue=""
										id="wd-assignments-file-up"
										defaultChecked
									/>
									<label
										className="form-check-label"
										htmlFor="wd-assignments-file-up"
									>
										File Uploads
									</label>
								</div>
							</div>
						</div>
						<div className="row my-3">
							<div className="col-3 text-end">Assign</div>
							<div className="col-8 border rounded">
								<label
									className="form-check-label mt-2"
									htmlFor="wd-assignments-assigned"
								>
									<b>Assign to</b>
								</label>
								<input
									type="text"
									className="form-control mb-2"
									id="wd-assignments-assigned"
									defaultValue="Everyone"
								/>

								<label
									className="form-check-label mt-2"
									htmlFor="wd-assignments-due"
								>
									<b>Due</b>
								</label>
								<div className="input-group mb-2">
									<input
										type="text"
										className="form-control"
									/>
									<span className="input-group-text">
										<FaCalendarDays />
									</span>
								</div>
								<div className="row mt-3">
									<div className="col">
										<label
											className="form-check-label"
											htmlFor="wd-assignments-due"
										>
											<b>Available from</b>
										</label>
										<div className="input-group mb-2">
											<input
												type="text"
												className="form-control"
											/>
											<span className="input-group-text">
												<FaCalendarDays />
											</span>
										</div>
									</div>
									<div className="col">
										<label
											className="form-check-label"
											htmlFor="wd-assignments-due"
										>
											<b>Until</b>
										</label>
										<div className="input-group mb-2">
											<input
												type="text"
												className="form-control"
											/>
											<span className="input-group-text">
												<FaCalendarDays />
											</span>
										</div>
									</div>
								</div>
								<div className="row mt-4">
									<div className="col-12 text-center px-0">
										<button
											type="button"
											className="wd-assignments-add btn btn-secondary w-100 px-0 rounded-bottom"
										>
											+ Add
										</button>
									</div>
								</div>
							</div>
						</div>
					</div>
					<hr />
					<div className="wd-assignments-footer">
						<input
							className="form-check-input my-2"
							type="checkbox"
							defaultValue=""
							id="wd-assignments-notify"
						/>
						<label
							className="form-check-label ms-1 my-1"
							htmlFor="wd-assignments-notify"
						>
							Notify users that this content has changed
						</label>
						<button
							onClick={handleSave}
							className="btn btn-success float-end mx-1 my-2"
							id="wd-assignments-save"
						>
							Save
						</button>
						<Link to={`/Kanbas/Courses/${courseId}/Assignments`}>
							<button
								className="btn btn-secondary mx-1 my-2 float-end"
								id="wd-assignments-cancel"
							>
								Cancel
							</button>
						</Link>
					</div>
				</div>
			</div>
		</>
	);
}

export default AssignmentEditor;
