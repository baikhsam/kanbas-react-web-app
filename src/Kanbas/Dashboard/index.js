import { Link } from "react-router-dom";
import { React, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { FaRegPenToSquare } from "react-icons/fa6";
import { setCourses } from "./coursesReducer";
import { findAllCourses } from "./client";
import "./index.css";

function Dashboard() {
	const dispatch = useDispatch();
	useEffect(() => {
		findAllCourses().then((courses) => {
			dispatch(setCourses(courses));
		});
	}, [dispatch]);
	const { courses } = useSelector((state) => state.coursesReducer);
	const course_count = courses.length;

	return (
		<div className="wd-dashboard-container">
			<div className="wd-dashboard-header">
				<h2>Dashboard</h2>
			</div>
			<hr />
			<div className="wd-dashboard-content">
				<h4 className="wd-dashboard-subtitle">{`Published Courses (${course_count})`}</h4>
				<Link to={"/Kanbas/Dashboard/Edit"}>
					<button className="btn btn-primary">Edit Courses</button>
				</Link>
				<hr />
				<div className="wd-dashboard row row-cols-2 row-cols-md-3 row-cols-xl-4 gx-4 d-flex flex-row flex-wrap">
					{courses.map((course) => (
						<div className="wd-dashboard-card col my-2 mx-1" key={course._id}>
							<div className="card h-100">
								<Link
									key={course._id}
									to={`/Kanbas/Courses/${course._id}`}
									className=""
								>
									<img
										src="/images/blue-rect.png"
										className="card-img-top"
										alt="course banner"
									/>
									<div className="card-body">
										<div className="wd-course-title">
											{course.name}
										</div>
										<div className="wd-course-subtitle">
											{course.number}
										</div>
										<FaRegPenToSquare
											style={{ color: "grey" }}
										/>
									</div>
								</Link>
							</div>
						</div>
					))}
				</div>
			</div>
		</div>
	);
}
export default Dashboard;
