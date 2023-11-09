import React from "react";
import { useParams } from "react-router-dom";
import "jquery/dist/jquery.min.js";
import "bootstrap/dist/js/bootstrap.min.js";
import db from "../../Database";
import "./index.css";

function ModuleList() {
	const { courseId } = useParams();
	const modules = db.modules;
	return (
		<>
			{modules
				.filter((module) => module.course === courseId)
				.map((module, index) => (
					<div className="accordion">
						<div key={index} className="accordion-item mb-5">
							<h2 className="accordion-header">
								<button
									className="accordion-button"
									type="button"
									data-bs-toggle="collapse"
									data-bs-target={`#collapse${module._id}`}
									aria-expanded="true"
									aria-controls={`collapse${module._id}`}
								>
									{module.name}
								</button>
							</h2>
							<div
								id={`collapse${module._id}`}
								className="accordion-collapse collapse show"
							>
								<div className="accordion-body">
									{module.description}
								</div>
							</div>
						</div>
					</div>
				))}
		</>
	);
}
export default ModuleList;
