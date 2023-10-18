import { Link, useLocation } from "react-router-dom";
import "./index.css";
import { FaClock, FaUserCircle } from "react-icons/fa";
import { FaGauge } from "react-icons/fa6";
import { FaBook } from "react-icons/fa";
import { FaCalendarAlt } from "react-icons/fa";
import { FaInbox } from "react-icons/fa";
import { PiPresentationChartBold } from "react-icons/pi";
import { FaArrowRightFromBracket, FaRegCircleQuestion } from "react-icons/fa6";

function KanbasNavigation() {
	const links = [
		"Account",
		"Dashboard",
		"Courses",
		"Calendar",
		"Inbox",
		"History",
		"Studio",
		"Commons",
		"Help",
	];
	const icons = [
		<FaUserCircle className={"wd-icon"} size={24} style={{ color: "grey" }} />,
		<FaGauge className={"wd-icon"} size={20} />,
		<FaBook className={"wd-icon"} size={20} />,
		<FaCalendarAlt className={"wd-icon"} size={20} />,
		<FaInbox className={"wd-icon"} size={20} />,
		<FaClock className={"wd-icon"} size={20} />,
		<PiPresentationChartBold className={"wd-icon"} size={20} />,
		<FaArrowRightFromBracket className={"wd-icon"} size={20} />,
        <FaRegCircleQuestion className={"wd-icon"} size={20} />,
	];
	const { pathname } = useLocation();
	return (
		<div className="wd-kanbas-nav list-group">
			<img
				src="/images/neu.png"
				alt="Northeastern University Logo"
				className="wd-logo align-self-center"
			/>
			{links.map((link, index) => (
				<Link
					key={index}
					to={`/Kanbas/${link}`}
					className={`list-group-item ${
						pathname.includes(link) && "active"
					}`}
				>
					{icons[index]}
					<br />
					{link}
				</Link>
			))}
		</div>
	);
}
export default KanbasNavigation;
