import React from "react";
import Add from "./Add";
import ClickEvent from "./ClickEvent";
import PassingDataOnEvent from "./PassingDataOnEvent";
import PassingFunctions from "./PassingFunctions";
import EventObject from "./EventObject";
import Counter from "./Counter";
import BooleanStateVariables from "./BooleanStateVariables";
import StringStateVariables from "./StringStateVariables";
import DateStateVariable from "./DateStateVariable";
import ObjectStateVariable from "./ObjectStateVariable";
import ArrayStateVariable from "./ArrayStateVariable";
import ParentStateComponent from "./ParentStateComponent";
import ReduxExamples from "./ReduxExamples";
import { useSelector } from "react-redux";

function Assignment4() {
	const sayHello = () => {
		alert("Hello!");
	};
	const { todos } = useSelector((state) => state.todosReducer);
	return (
			<div className="container">
				<h1>Assignment 4</h1>
				<ul className="list-group">
					{todos.map((todo) => (
						<li className="list-group-item" key={todo.id}>
							{todo.title}
						</li>
					))}
				</ul>
				<ReduxExamples />
				<ParentStateComponent />
				<ArrayStateVariable />
				<ObjectStateVariable />
				<DateStateVariable />
				<StringStateVariables />
				<BooleanStateVariables />
				<Counter />
				<Add a={1} b={2} />
				<ClickEvent />
				<PassingDataOnEvent />
				<PassingFunctions theFunction={sayHello} />
				<EventObject />
			</div>
	);
}
export default Assignment4;
