import "./index.css";
import { FaExclamationCircle } from "react-icons/fa";
import { FaCalendarDays } from "react-icons/fa6";

function Status() {
	return (
		<div class="wd-status float-end ps-4 me-3 d-none d-xl-block">
			<span class="pt-2">Course Status</span>
			<hr />
			<div
				class="wd-publish btn-group mt-2 mb-3"
				role="group"
				aria-label="Unpublish/Publish"
			>
				<button
					type="button"
					class="btn btn-secondary wd-btn-unpublish"
				>
					Unpublish
				</button>
				<button
					type="button"
					class="btn btn-secondary wd-btn-published"
				>
					Published
				</button>
			</div>
			<div class="wd-status-button-grid d-grid gap-1 mt-2 mb-2">
				<button class="btn btn-secondary" type="button">
					Import Existing Content
				</button>
				<button class="btn btn-secondary" type="button">
					Import From Commons
				</button>
				<button class="btn btn-secondary" type="button">
					Choose Home Page
				</button>
				<button class="btn btn-secondary" type="button">
					View Course Stream
				</button>
				<button class="btn btn-secondary" type="button">
					New Announcement
				</button>
				<button class="btn btn-secondary" type="button">
					New Analytics
				</button>
				<button class="btn btn-secondary" type="button">
					View Course Notifications
				</button>
			</div>

			<span class="pt-2">To Do</span>
			<hr />
			<ul class="wd-todo list-group mt-2 mb-2" id="todos">
				<li class="list-group-item">
					<FaExclamationCircle className="pe-1" />
					<a href="#todos">Assignment 1 due Sep 14 at 11:59pm</a>
				</li>
				<li class="list-group-item">
					<FaExclamationCircle className="pe-1" />
					<a href="#todos">Assignment 2 due Sep 21 at 11:59pm</a>
				</li>
				<li class="list-group-item">
					<FaExclamationCircle className="pe-1" />
					<a href="#todos">Assignment 3 due Sep 28 at 11:59pm</a>
				</li>
			</ul>

			<span class="pt-2">Coming Up</span>
			<span class="float-end">
				<FaCalendarDays className="pe-1" />
				<a href="#todos">View Calendar</a>
			</span>
			<hr />
			<ul class="wd-events list-group mt-1 mb-2">
				<li class="list-group-item">
					<FaCalendarDays className="pe-1" />
					<a href="#todos">
						Lecture CS5610.1234.2023 Sep 14 at 7:00pm
					</a>
				</li>
				<li class="list-group-item">
					<FaCalendarDays className="pe-1" />
					<a href="#todos">
						Lecture CS5610.1234.2023 Sep 16 at 7:00pm
					</a>
				</li>
				<li class="list-group-item">
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
