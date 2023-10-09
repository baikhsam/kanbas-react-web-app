import BooleanVariables from "./BooleanVariables";
import Destructing from "./Destructing";
import FunctionDestructing from "./FunctionDestructing";
import House from "./House";
import IfElse from "./IfElse";
import Spread from "./Spread";
import TemplateLiterals from "./TemplateLiterals";
import TernaryOperator from "./TernaryOperator";
import VariableTypes from "./VariableTypes";
import VariablesAndConstants from "./VariablesAndConstants";
import WorkingWithArrays from "./WorkingWithArrays";
import WorkingWithFunctions from "./WorkingWithFunctions";

function JavaScript() {
	return (
		<div>
			<h1>JavaScript</h1>
			<FunctionDestructing />
			<Destructing />
			<Spread />
			<House />
			<TemplateLiterals />
			<WorkingWithArrays />
			<WorkingWithFunctions />
			<TernaryOperator />
			<IfElse />
			<BooleanVariables />
			<VariableTypes />
			<VariablesAndConstants />
		</div>
	);
}
export default JavaScript;
