import React, { useState, useEffect } from "react";
import { BsTrash3Fill, BsPlusCircleFill } from "react-icons/bs";
import * as client from "./client";
function UserTable() {
	const [users, setUsers] = useState([]);
	const [user, setUser] = useState({
		username: "",
		password: "",
		firstName: "",
		lastName: "",
		role: "USER",
	});
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
						<td>
							<BsPlusCircleFill size={36} onClick={createUser} />
						</td>
					</tr>
				</thead>
				<tbody>
					{users.map((user) => (
						<tr key={user._id}>
							<td>{user.username}</td>
							<td>{user.firstName}</td>
							<td>{user.lastName}</td>
                            <td></td>
                            <td></td>
						</tr>
					))}
				</tbody>
			</table>
		</div>
	);
}
export default UserTable;
