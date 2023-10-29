import "./index.css";
import { FaExclamationCircle } from "react-icons/fa";
import { FaCalendarDays } from "react-icons/fa6";

function Status() {
	return (
		<div className="wd-status float-end ps-4 me-3 d-none d-xl-block">
			<span className="pt-2">Course Status</span>
			<hr />
			<div
				className="wd-publish btn-group mt-2 mb-3"
				role="group"
				aria-label="Unpublish/Publish"
			>
				<button
					type="button"
					className="btn btn-secondary wd-btn-unpublish"
				>
					Unpublish
				</button>
				<button
					type="button"
					className="btn btn-secondary wd-btn-published"
				>
					Published
				</button>
			</div>
			<div className="wd-status-button-grid d-grid gap-1 mt-2 mb-2">
				<button className="btn btn-secondary" type="button">
					Import Existing Content
				</button>
				<button className="btn btn-secondary" type="button">
					Import From Commons
				</button>
				<button className="btn btn-secondary" type="button">
					Choose Home Page
				</button>
				<button className="btn btn-secondary" type="button">
					View Course Stream
				</button>
				<button className="btn btn-secondary" type="button">
					New Announcement
				</button>
				<button className="btn btn-secondary" type="button">
					New Analytics
				</button>
				<button className="btn btn-secondary" type="button">
					View Course Notifications
				</button>
			</div>

			<span className="pt-2">To Do</span>
			<hr />
			<ul className="wd-todo list-group mt-2 mb-2" id="todos">
				<li className="list-group-item">
					<FaExclamationCircle className="pe-1" />
					<a href="#todos">Assignment 1 due Sep 14 at 11:59pm</a>
				</li>
				<li className="list-group-item">
					<FaExclamationCircle className="pe-1" />
					<a href="#todos">Assignment 2 due Sep 21 at 11:59pm</a>
				</li>
				<li className="list-group-item">
					<FaExclamationCircle className="pe-1" />
					<a href="#todos">Assignment 3 due Sep 28 at 11:59pm</a>
				</li>
			</ul>

			<span className="pt-2">Coming Up</span>
			<span className="float-end">
				<FaCalendarDays className="pe-1" />
				<a href="#todos">View Calendar</a>
			</span>
			<hr />
			<ul className="wd-events list-group mt-1 mb-2">
				<li className="list-group-item">
					<FaCalendarDays className="pe-1" />
					<a href="#todos">
						Lecture CS5610.1234.2023 Sep 14 at 7:00pm
					</a>
				</li>
				<li className="list-group-item">
					<FaCalendarDays className="pe-1" />
					<a href="#todos">
						Lecture CS5610.1234.2023 Sep 16 at 7:00pm
					</a>
				</li>
				<li className="list-group-item">
					<FaCalendarDays className="pe-1" />
					<a href="#todos">
						Lecture CS5610.1234.2023 Sep 21 at 7:00pm
					</a>
				</li>
			</ul>
		</div>
	);
}
export default Status;
