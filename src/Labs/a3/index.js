import Classes from "./Classes";
import ConditionalOutput from "./ConditionalOutput";
import JavaScript from "./JavaScript";
import PathParameters from "./PathParameters";
import Styles from "./Styles";
import TodoItem from "./todo/TodoItem";
import TodoList from "./todo/TodoList";
import { useSelector } from "react-redux";

function Assignment3() {
	console.log("Hello World!");
	const { todos } = useSelector((state) => state.todosReducer);
	return (
			<div className="container">
				<h1>Assignment3</h1>
				<ul className="list-group">
					{todos.map((todo) => (
						<li className="list-group-item" key={todo.id}>
							{todo.title}
						</li>
					))}
				</ul>
				<TodoList />
				<TodoItem />
				<ConditionalOutput />
				<Styles />
				<Classes />
				<PathParameters />
				<JavaScript />
			</div>
	);
}
export default Assignment3;
