import ModuleList from "../Modules/ModuleList";
import ModuleButtons from "../Modules/ModuleButtons";
import Status from "../Status";

function Home() {
	return (
		<>
			<div className="wd-module-center">
				<ModuleButtons />
				<hr />
				<ModuleList />
			</div>
			<Status />
		</>
	);
}
export default Home;
