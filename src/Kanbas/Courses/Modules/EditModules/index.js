import React, { useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import "jquery/dist/jquery.min.js";
import "bootstrap/dist/js/bootstrap.min.js";
import "../index.css";
import {
	addModule,
	deleteModule,
	updateModule,
	setModule,
	setModules,
} from "../modulesReducer";
import * as client from "../client";
import { useSelector, useDispatch } from "react-redux";

function EditModules() {
	const dispatch = useDispatch();
	const { courseId } = useParams();
	useEffect(() => {
		client.findModulesForCourse(courseId).then((modules) => {
			dispatch(setModules(modules));
		});
	}, [courseId, dispatch]);
	const modules = useSelector((state) => state.modulesReducer.modules);
	const module = useSelector((state) => state.modulesReducer.module);

	const handleUpdateModule = async () => {
		const status = await client.updateModule(module);
		dispatch(updateModule(module));
	};

	const handleDeleteModule = (moduleId) => {
		client.deleteModule(moduleId).then((status) => {
			dispatch(deleteModule(moduleId));
		});
	};

	const handleAddModule = () => {
		client.createModule(courseId, module).then((module) => {
			dispatch(addModule(module));
		});
	};

	return (
		<ul className="list-group w-75">
			<li className="list-group-item">
				<button
					className="btn btn-success float-end mx-1"
					onClick={handleAddModule}
				>
					Add Module
				</button>
				<button
					className="btn btn-primary float-end"
					onClick={handleUpdateModule}
				>
					Update Module
				</button>
				<input
					className="form-control w-50"
					value={module.name}
					onChange={(e) =>
						dispatch(
							setModule({
								...module,
								name: e.target.value,
							})
						)
					}
				/>
				<textarea
					className="form-control w-50"
					value={module.description}
					onChange={(e) =>
						dispatch(
							setModule({
								...module,
								description: e.target.value,
							})
						)
					}
				></textarea>
			</li>
			{modules
				.filter((module) => module.course === courseId)
				.map((module, index) => (
					<li key={index} className="list-group-item">
						<button
							className="btn btn-success float-end mx-1"
							onClick={(e) => {
								dispatch(setModule(module));
							}}
						>
							Edit
						</button>
						<button
							className="btn btn-danger float-end"
							onClick={() => handleDeleteModule(module._id)}
						>
							Delete
						</button>
						<h3>{module.name}</h3>
						<p>{module.description}</p>
						<p>{module._id}</p>
					</li>
				))}
			<li className="list-group-item">
				<Link to={`/Kanbas/Courses/${courseId}`}>
					<button className="btn btn-danger float-start mx-1">
						Publish
					</button>
				</Link>
			</li>
		</ul>
	);
}
export default EditModules;
