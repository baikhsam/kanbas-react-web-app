import db from "../../Database";
import { useParams } from "react-router-dom";
import {
	FaFileImport,
	FaFileExport,
	FaGear,
	FaFilter,
	FaArrowRight,
	FaChevronDown,
	FaMagnifyingGlass,
} from "react-icons/fa6";
import "./index.css";

function Grades() {
	const { courseId } = useParams();
	const assignments = db.assignments.filter(
		(assignment) => assignment.course === courseId
	);
	const enrollments = db.enrollments.filter(
		(enrollment) => enrollment.course === courseId
	);
	return (
		<>
			<div className="wd-grades mx-5 d-flex flex-column w-100">
				<div className="wd-grades-header my-2">
					<button
						type="button"
						className="wd-module-header-settings btn btn-sm btn-secondary mx-1 my-1 float-end"
					>
						<FaGear className="mx-1 my-1" />
					</button>

					<div className="dropdown">
						<button
							type="button"
							className="wd-module-header-settings btn btn-sm btn-secondary dropdown-toggle mx-1 my-1 float-end"
							data-bs-toggle="dropdown"
							aria-expanded="false"
						>
							<FaFileExport className="mx-1 my-1" />
							Export
						</button>
						<ul className="dropdown-menu">
							<li>
								<a className="dropdown-item" href="#">
									Action
								</a>
							</li>
							<li>
								<a className="dropdown-item" href="#">
									Another action
								</a>
							</li>
							<li>
								<a className="dropdown-item" href="#">
									Something else here
								</a>
							</li>
						</ul>
					</div>
					<button
						type="button"
						className="wd-module-header-settings btn btn-sm btn-secondary mx-1 my-1 float-end"
					>
						<FaFileImport className="mx-1 my-1" />
						Import
					</button>
				</div>
				<div className="container ms-2 ps-0">
					<div className="row mt-3 mb-2">
						<div className="col">
							<b>Student Names</b>
						</div>
						<div className="col">
							<b>Assignment Names</b>
						</div>
					</div>
					<div className="row mb-2">
						<div className="col">
							<div className="inner-addon">
								<FaMagnifyingGlass className="wd-input-icon left-addon" />
								<input
									className="form-control"
									list="search-students-list"
									placeholder="Search Students"
									id="search-students"
								/>
								<FaChevronDown className="wd-input-icon right-addon" />
							</div>
							<datalist id="search-students-list">
								{enrollments.map((enrollment) => {
									const user = db.users.find(
										(user) => user._id === enrollment.user
									);
									return (
										<option
											value={`${user.firstName} ${user.lastName}`}
										/>
									);
								})}
							</datalist>
						</div>
						<div className="col">
							<div className="inner-addon">
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
								{assignments.map((assignment) => (
									<option value={assignment.title}/>
								))}
							</datalist>
						</div>
					</div>
					<div className="row mb-2">
						<div className="col-4">
							<button type="button" className="btn btn-secondary">
								<FaFilter className="mx-1" />
								Apply Filters
							</button>
						</div>
					</div>
				</div>

				<div className="table-responsive ms-2 ps-0">
					<table className="table table-striped table-bordered">
						<tbody className="text-center">
							<tr>
								<td className="align-middle text-start">
									<b>Student Name</b>
								</td>

								{assignments.map((assignment) => (
									<td>{assignment.title}</td>
								))}
							</tr>
							{enrollments.map((enrollment) => {
								const user = db.users.find(
									(user) => user._id === enrollment.user
								);
								return (
									<tr className="align-middle">
										<td className="wd-grades-student-name text-start text-danger">
											{/* TODO: insert <Link></Link> to student here and remove text-danger here later */}
											{user.firstName} {user.lastName}
										</td>
										{assignments.map((assignment) => {
											const grade = db.grades.find(
												(grade) =>
													grade.student ===
														enrollment.user &&
													grade.assignment ===
														assignment._id
											);
											return (
												<td>{grade?.grade || ""}</td>
											);
										})}
									</tr>
								);
							})}
						</tbody>
					</table>
				</div>
			</div>
		</>
	);
}
export default Grades;
{
	/* <td className="align-middle">
									<div className="input-group flex-nowrap">
										<input
											className="form-control text-center w-auto"
											type="text"
											size="3"
											value="99"
										/>
										<button
											type="button"
											className="wd-grades-btn-edit btn btn-secondary"
										>
											<FaArrowRight size={"0.5rem"} />
										</button>
									</div>
								</td> */
}
