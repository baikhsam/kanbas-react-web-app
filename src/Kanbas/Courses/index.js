import db from "../../Kanbas/Database";
import { Link, Navigate, Route, Routes, useLocation, useParams } from "react-router-dom";
import CourseNavigation from "./CourseNavigation";
import "./index.css";
import { FaBars } from "react-icons/fa6";

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
				<div className="wd-module">
					<Routes>
						<Route path="/" element={<Navigate to="Home" />} />
						<Route path="Home" element={<h1>Home</h1>} />
						<Route path="Modules" element={<h1>Modules</h1>} />
						<Route
							path="Assignments"
							element={<h1>Assignments</h1>}
						/>
						<Route
							path="Assignments/:assignmentId"
							element={<h1>Assignment Editor</h1>}
						/>
						<Route path="Grades" element={<h1>Grades</h1>} />
					</Routes>
				</div>
			</div>
		</div>
	);
}
export default Courses;
