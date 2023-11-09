import ModuleList from "./ModuleList";
import ModuleButtons from "./ModuleButtons";

function Modules() {
	return (
		<>
			<div className="wd-module-center-focus">
				<ModuleButtons />
				<hr />
				<ModuleList />
			</div>
		</>
	);
}
export default Modules;