import { Link } from "react-router-dom";
import db from "../Database";
import { FaRegPenToSquare } from "react-icons/fa6";
import "./index.css";

function Dashboard() {
	const courses = db.courses;
	const course_count = courses.length;
	return (
		<div>
			<div className="wd-dashboard-header">
				<h2>Dashboard</h2>
			</div>
			<hr />
			<div class="wd-dashboard-content">
				<h4 class="wd-dashboard-subtitle">{`Published Courses (${course_count})`}</h4>
				<hr />
				<div className="wd-dashboard row row-cols-2 row-cols-md-3 row-cols-xl-4 gx-4 d-flex flex-row flex-wrap">
					{courses.map((course) => (
						<div className="wd-dashboard-card col my-2 mx-1">
							<div className="card h-100">
								<Link
									key={course._id}
									to={`/Kanbas/Courses/${course._id}`}
									className=""
								>
									<img
										src="/images/blue-rect.png"
										class="card-img-top"
										alt="course banner"
									/>
									<div class="card-body">
										<div class="wd-course-title">
											{course.name}
										</div>
										<div class="wd-course-subtitle">
											{course.number}
										</div>
										<FaRegPenToSquare style={{color: "grey"}}/>
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
