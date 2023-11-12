import KanbasNavigation from "./KanbasNavigation";
import { Routes, Route, Navigate } from "react-router-dom";
import Dashboard from "./Dashboard";
import Courses from "./Courses";
import EditDashboard from "./Dashboard/EditDashboard";
import { Provider} from "react-redux";
import store from "./store";
import EditModules from "./Courses/Modules/EditModules";

function Kanbas() {

	return (
		<Provider store={store}>
			<div className="d-flex">
				<KanbasNavigation />
				<Routes>
					<Route path="/" element={<Navigate to="Dashboard" />} />
					<Route path="*" element={<Navigate to="Dashboard" />} />
					<Route path="Account" element={<h1>Account</h1>} />
					<Route path="Dashboard/*" element={<Dashboard />} />
					<Route
						path="Dashboard/Edit/*"
						element={<EditDashboard />}
					/>
					<Route path="Courses/:courseId/*" element={<Courses />} />
					<Route
						path="Courses/:courseId/Modules/Edit/*"
						element={<EditModules />}
					/>
				</Routes>
			</div>
		</Provider>
	);
}
export default Kanbas;
