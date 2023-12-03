import {
	Link,
	Navigate,
	Route,
	Routes,
	useLocation,
	useParams,
} from "react-router-dom";
import CourseNavigation from "./CourseNavigation";
import "./index.css";
import { FaBars, FaGlasses } from "react-icons/fa6";
import Modules from "./Modules";
import Home from "./Home";
import Assignments from "./Assignments";
import AssignmentEditor from "./Assignments/AssignmentEditor";
import Grades from "./Grades";
import { findCourseById } from "../Dashboard/client";
import { useEffect, useState } from "react";

function Courses() {
	const { courseId } = useParams();
	const [course, setCourse] = useState({});
	useEffect(() => {
		findCourseById(courseId)
			.then((course) => {
				if (!course) {
					console.error("Course not found");
				} else {
					setCourse(course);
				}
			})
			.catch((error) => {
				if (error.response && error.response.status === 404) {
					console.error("Course not found (404 error)");
				} else {
					console.error("Error loading course", error);
				}
				setCourse(null);
			});
	}, [courseId]);

	const location = useLocation().pathname.split("/");
	const inAssignments = location.includes("Assignments");
	console.log(location);

	if (course === null) {
		return (
			<div className="container">
				<h1>Whoops... Looks like nothing is here!</h1>
				<h3>We couldn't find that page!</h3>
				<h5>Page Not Found</h5>
			</div>
		);
	} else {
		return (
			<div className="wd-courses-container d-flex flex-column">
				<div className="wd-courses-header ms-3 mt-4">
					<nav
						className="wd-courses-breadcrumb ms-3 float-start"
						aria-label="breadcrumb"
					>
						<ol className="breadcrumb">
							<li>
								<FaBars className="wd-icon mx-2" size={24} />
							</li>
							<li className="breadcrumb-item">
								<Link to={`/Kanbas/Courses/${courseId}/Home`}>
									{course ? course.number : "Course"}
								</Link>
							</li>
							<li
								className="breadcrumb-item active"
								aria-current="page"
							>
								{location.slice(-1)}
							</li>
						</ol>
					</nav>
					{inAssignments && (
						<button
							type="button"
							className="btn btn-sm btn-secondary mx-3 float-end"
						>
							<FaGlasses className="me-2 mb-1" />
							Student View
						</button>
					)}
				</div>
				<hr className="ms-3" />
				<div className="wd-courses-content-block d-flex flex-row ms-3">
					<div className="wd-courses-content-left">
						<CourseNavigation />
					</div>
					<div className="wd-module d-flex flex-row">
						<Routes>
							<Route path="/" element={<Navigate to="Home" />} />
							<Route path="Home" element={<Home />} />
							<Route path="Modules" element={<Modules />} />
							<Route
								path="Assignments"
								element={<Assignments />}
							/>
							<Route
								path="Assignments/:assignmentId"
								element={<AssignmentEditor />}
							/>
							<Route
								path="Assignments/Create"
								element={<AssignmentEditor />}
							/>
							<Route path="Grades" element={<Grades />} />
						</Routes>
					</div>
				</div>
			</div>
		);
	}
}
export default Courses;
