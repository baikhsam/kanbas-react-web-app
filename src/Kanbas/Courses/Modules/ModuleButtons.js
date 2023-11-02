import {FaEllipsisV, FaRegCheckCircle} from 'react-icons/fa';
import {Link, useParams} from 'react-router-dom';

function ModuleButtons() {
	const { courseId } = useParams();
	return (
		<div className="wd-module-header my-2 mx-2 d-flex justify-content-end">
			<button type="button" className="btn btn-sm btn-secondary mx-1">
				Collapse All
			</button>
			<button type="button" className="btn btn-sm btn-secondary mx-1">
				View Progress
			</button>
			<div className="dropdown" id='wd-dropdown'>
				<button
					className="btn btn-secondary dropdown-toggle mx-1"
					type="button"
					data-bs-toggle="dropdown"
					aria-expanded="false"
				>
					<FaRegCheckCircle color='green' className='float-start mx-1 my-1'/>
					Publish All
				</button>
				<ul className="dropdown-menu">
					<li>
						<a className="dropdown-item" href="#wd-dropdown">
							Publish all items and modules
						</a>
					</li>
					<li>
						<a className="dropdown-item" href="#wd-dropdown">
							Unpublish
						</a>
					</li>
				</ul>
			</div>
			<Link to={`/Kanbas/Courses/${courseId}/Modules/Edit`}>
			<button type="button" className="btn btn-sm btn-danger mx-1 text-white bg-danger">
				+ Module
			</button>
			</Link>
			<button
				type="button"
				className="wd-module-header-settings btn btn-sm btn-secondary mx-1"
			>
				<FaEllipsisV />
			</button>
		</div>
	);
}
export default ModuleButtons;
