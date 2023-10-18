import db from "../../Kanbas/Database";
import { Link, Navigate, Route, Routes, useParams } from "react-router-dom";
import CourseNavigation from "./CourseNavigation";
import "./index.css";
import { FaBars } from "react-icons/fa6";
import Modules from "./Modules";
import Home from "./Home";
import Assignments from "./Assignments";
import AssignmentEditor from "./Assignments/AssignmentEditor";

function Courses() {
	const { courseId } = useParams();
	const course = db.courses.find((course) => course._id === courseId);

	return (
		<div className="wd-courses-container">
			<div className="wd-courses-header d-flex flex-row ms-3 mt-4">
				<FaBars className="wd-icon" size={24} />
				<nav
					className="wd-courses-breadcrumb ms-3"
					aria-label="breadcrumb"
				>
					<ol className="breadcrumb">
						<li className="breadcrumb-item">
							<Link to={`/Kanbas/Courses/${courseId}/Home`}>
								{course.number}
							</Link>
						</li>
						<li
							className="breadcrumb-item active"
							aria-current="page"
						>
							Home
						</li>
					</ol>
				</nav>
			</div>
			<hr className="ms-3"/>
			<div className="wd-courses-content-block d-flex flex-row ms-3">
				<div className="wd-courses-content-left">
					<CourseNavigation />
				</div>
				<div className="wd-module d-flex flex-row">
					<Routes>
						<Route path="/" element={<Navigate to="Home" />} />
						<Route path="Home" element={<Home />} />
						<Route path="Modules" element={<Modules	/>} />
						<Route
							path="Assignments"
							element={<Assignments />}
						/>
						<Route
							path="Assignments/:assignmentId"
							element={<AssignmentEditor />}
						/>
						<Route path="Grades" element={<h1>Grades</h1>} />
					</Routes>
				</div>
			</div>
		</div>
	);
}
export default Courses;
