import { Link } from "react-router-dom";
import { React, useState } from "react";
import "../index.css";
import { useSelector, useDispatch } from "react-redux";
import { addNewCourse, deleteCourse, updateCourse } from "../coursesReducer";

function EditDashboard() {
	const { courses } = useSelector((state) => state.coursesReducer);
	const course_count = courses.length;
	const dispatch = useDispatch();
	const newDefaultCourse = {
		name: "New Course",
		number: "New Course Number",
		startDate: "2023-09-10",
		endDate: "2023-12-15",
	};
	const [newCourse, setNewCourse] = useState(newDefaultCourse);

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
					value={newCourse.name}
					onChange={(e) =>
						setNewCourse({ ...newCourse, name: e.target.value })
					}
				/>
				<input
					className="form-control mb-2 w-25"
					value={newCourse.number}
					onChange={(e) =>
						setNewCourse({ ...newCourse, number: e.target.value })
					}
				/>
				<input
					className="form-control mb-2 w-25"
					type="date"
					value={newCourse.startDate}
					onChange={(e) =>
						setNewCourse({
							...newCourse,
							startDate: e.target.value,
						})
					}
				/>
				<input
					className="form-control mb-2 w-25"
					type="date"
					value={newCourse.endDate}
					onChange={(e) =>
						setNewCourse({ ...newCourse, endDate: e.target.value })
					}
				/>
				<button
					className="btn btn-success me-2"
					onClick={(event) => {
						event.preventDefault();
						dispatch(addNewCourse(newCourse));
					}}
				>
					Add
				</button>
				<button
					className="btn btn-primary"
					onClick={(event) => {
						event.preventDefault();
						dispatch(updateCourse(newCourse));
					}}
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
									setNewCourse(course);
								}}
							>
								Edit
							</button>
							<button
								className="btn btn-danger"
								onClick={(event) => {
									event.preventDefault();
									dispatch(deleteCourse(course._id));
								}}
							>
								Delete
							</button>
						</li>
					))}
				</div>
				<button className="btn btn-danger mt-4">
					<Link className="text-white text-decoration-none" to={"/Kanbas/Dashboard"}>Publish</Link>
				</button>
			</div>
		</div>
	);
}
export default EditDashboard;
