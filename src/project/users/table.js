import React, { useState, useEffect } from "react";
import {
	BsFillCheckCircleFill,
	BsTrash3Fill,
	BsPlusCircleFill,
	BsPencil,
} from "react-icons/bs";
import * as client from "./client";
import { Link } from "react-router-dom";
function UserTable() {
	const [users, setUsers] = useState([]);
	const [user, setUser] = useState({
		username: "",
		password: "",
		firstName: "",
		lastName: "",
		role: "USER",
	});
	const deleteUser = async (user) => {
		try {
			await client.deleteUser(user);
			setUsers(users.filter((u) => u._id !== user._id));
		} catch (err) {
			console.log(err);
		}
	};

	const selectUser = async (user) => {
		try {
			const u = await client.findUserById(user._id);
			setUser(u);
		} catch (err) {
			console.log(err);
		}
	};
	const updateUser = async () => {
		try {
			const status = await client.updateUser(user);
			setUsers(users.map((u) => (u._id === user._id ? user : u)));
		} catch (err) {
			console.log(err);
		}
	};

	const createUser = async () => {
		try {
			const newUser = await client.createUser(user);
			setUsers([newUser, ...users]);
		} catch (err) {
			console.log(err);
		}
	};

	const fetchUsers = async () => {
		const users = await client.findAllUsers();
		setUsers(users);
	};
	useEffect(() => {
		fetchUsers();
	}, []);
	return (
		<div>
			<h1>User List</h1>
			<table className="table">
				<thead>
					<tr>
						<th>Username</th>
						<th>First Name</th>
						<th>Last Name</th>
					</tr>
					<tr>
						<td>
							<div className="d-flex">
								<input
									className="form-control w-50"
									placeholder="Username"
									value={user.username}
									onChange={(e) =>
										setUser({
											...user,
											username: e.target.value,
										})
									}
								/>
								<input
									className="form-control w-50"
									placeholder="Password"
									type="password"
									value={user.password}
									onChange={(e) =>
										setUser({
											...user,
											password: e.target.value,
										})
									}
								/>
							</div>
						</td>
						<td>
							<input
								className="form-control"
								value={user.firstName}
								onChange={(e) =>
									setUser({
										...user,
										firstName: e.target.value,
									})
								}
							/>
						</td>
						<td>
							<input
								className="form-control"
								value={user.lastName}
								onChange={(e) =>
									setUser({
										...user,
										lastName: e.target.value,
									})
								}
							/>
						</td>
						<td>
							<select
								className="form-control"
								value={user.role}
								onChange={(e) =>
									setUser({ ...user, role: e.target.value })
								}
							>
								<option value="USER">User</option>
								<option value="ADMIN">Admin</option>
								<option value="FACULTY">Faculty</option>
								<option value="STUDENT">Student</option>
							</select>
						</td>
						<td className="text-nowrap">
							<BsFillCheckCircleFill
								onClick={updateUser}
								className="me-2 text-success fs-1 text"
							/>
							<BsPlusCircleFill
								onClick={createUser}
								className="fs-1 text"
								color="royalblue"
							/>
						</td>
					</tr>
				</thead>
				<tbody>
					{users.map((user) => (
						<tr key={user._id}>
							<td>
								<Link to={`/project/account/${user._id}`}>
									{user.username}
								</Link>
							</td>
							<td>{user.firstName}</td>
							<td>{user.lastName}</td>
							<td></td>
							<td className="text-nowrap">
								<button
									className="btn btn-warning me-2"
									onClick={() => selectUser(user)}
								>
									<BsPencil
										onClick={() => selectUser(user)}
									/>
								</button>
								<button
									className="btn btn-danger"
									onClick={() => deleteUser(user)}
								>
									<BsTrash3Fill />
								</button>
							</td>
						</tr>
					))}
				</tbody>
			</table>
		</div>
	);
}
export default UserTable;
