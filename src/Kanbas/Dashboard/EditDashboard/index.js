import { Link } from "react-router-dom";
import { React, useEffect, useState } from "react";
import "../index.css";
import { useSelector, useDispatch } from "react-redux";
import {
	addNewCourse,
	deleteCourse,
	updateCourse,
	setCourses,
	setCourse,
} from "../coursesReducer";
import * as client from "../client";

function EditDashboard() {
	const dispatch = useDispatch();
	useEffect(() => {
		client.findAllCourses().then((courses) => {
			dispatch(setCourses(courses));
		});
	}, [dispatch]);
	const { courses } = useSelector((state) => state.coursesReducer);
	const { course } = useSelector((state) => state.coursesReducer);
	const course_count = courses.length;

	const handleUpdateCourse = async () => {
		client.updateCourse(course).then((status) => {
			dispatch(updateCourse(course));
		});
	};

	const handleAddCourse = () => {
		client.addCourse(course).then((course) => {
			dispatch(addNewCourse(course));
		});
	};

	const handleDeleteCourse = (courseId) => {
		client.deleteCourse(courseId).then((status) => {
			dispatch(deleteCourse(courseId));
		});
	};

	return (
		<div className="wd-dashboard-container">
			<div className="wd-dashboard-header">
				<h2>Dashboard</h2>
			</div>
			<hr />
			<div className="wd-dashboard-content">
				<h4 className="wd-dashboard-subtitle">{`Published Courses (${course_count})`}</h4>
				<hr />
				<input
					className="form-control mb-2 w-25"
					value={course.name}
					onChange={(e) =>
						dispatch(setCourse({ ...course, name: e.target.value }))
					}
				/>
				<input
					className="form-control mb-2 w-25"
					value={course.number}
					onChange={(e) =>
						dispatch(
							setCourse({ ...course, number: e.target.value })
						)
					}
				/>
				<input
					className="form-control mb-2 w-25"
					type="date"
					value={course.startDate}
					onChange={(e) =>
						dispatch(
							setCourse({
								...course,
								startDate: e.target.value,
							})
						)
					}
				/>
				<input
					className="form-control mb-2 w-25"
					type="date"
					value={course.endDate}
					onChange={(e) =>
						dispatch(
							setCourse({ ...course, endDate: e.target.value })
						)
					}
				/>
				<button
					className="btn btn-success me-2"
					onClick={handleAddCourse}
				>
					Add
				</button>
				<button
					className="btn btn-primary"
					onClick={handleUpdateCourse}
				>
					Update
				</button>
				<div className="list-group wd-edit-course-list w-50">
					{courses.map((course) => (
						<li className="list-group-item d-flex" key={course._id}>
							<Link
								key={course._id}
								to={`/Kanbas/Courses/${course._id}`}
								className="list-group-item px-0"
							>
								{course.name}
							</Link>
							<button
								className="btn btn-warning me-2 ms-auto"
								onClick={(event) => {
									dispatch(setCourse(course));
								}}
							>
								Edit
							</button>
							<button
								className="btn btn-danger"
								onClick={() => {
									handleDeleteCourse(course._id);
								}}
							>
								Delete
							</button>
						</li>
					))}
				</div>
				<button className="btn btn-danger mt-4">
					<Link
						className="text-white text-decoration-none"
						to={"/Kanbas/Dashboard"}
					>
						Publish
					</Link>
				</button>
			</div>
		</div>
	);
}
export default EditDashboard;
