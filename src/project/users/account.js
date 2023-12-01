import * as client from "./client";
import { useState, useEffect } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
function Account() {
	const { id } = useParams();
	const [account, setAccount] = useState(null);
	const findUserById = async (id) => {
		const user = await client.findUserById(id);
		setAccount(user);
	};
	const navigate = useNavigate();
	const fetchAccount = async () => {
		const account = await client.account();
		setAccount(account);
	};
	useEffect(() => {
		if (id) {
			findUserById(id);
		} else {
			fetchAccount();
		}
	}, []);
	const save = async () => {
		await client.updateUser(account);
	};
	const formatDate = (date) => {
		return date.toString().split("T")[0];
	};
	const signout = async () => {
		await client.signout();
		navigate("/project/signin");
	};
	return (
		<div className="w-50">
			<h1>Account</h1>
			{account && (
				<div>
					<input
						className="form-control w-50 my-2"
						placeholder="Password"
						value={account.password}
						onChange={(e) =>
							setAccount({ ...account, password: e.target.value })
						}
					/>
					<input
						className="form-control w-50 my-2"
						placeholder="First Name"
						value={account.firstName}
						onChange={(e) =>
							setAccount({
								...account,
								firstName: e.target.value,
							})
						}
					/>
					<input
						className="form-control w-50 my-2"
						placeholder="Last Name"
						value={account.lastName}
						onChange={(e) =>
							setAccount({ ...account, lastName: e.target.value })
						}
					/>
					<input
						className="form-control w-50 my-2"
						type="date"
						value={account.dob ? formatDate(account.dob) : ""}
						onChange={(e) =>
							setAccount({ ...account, dob: e.target.value })
						}
					/>
					<input
						className="form-control w-50 my-2"
						placeholder="Email"
						value={account.email}
						onChange={(e) =>
							setAccount({ ...account, email: e.target.value })
						}
					/>
					<select
						className="form-control w-50 my-2"
						value={account.role}
						onChange={(e) =>
							setAccount({ ...account, role: e.target.value })
						}
					>
						<option value="USER">User</option>
						<option value="ADMIN">Admin</option>
						<option value="FACULTY">Faculty</option>
						<option value="STUDENT">Student</option>
					</select>
					<button className="btn btn-primary w-50" onClick={save}>
						Save
					</button>
					<br></br>
					<button className="btn btn-danger w-50" onClick={signout}>
						Signout
					</button>
				</div>
			)}
			{!account && (
				<div>
					<Link to="/project/signin">
						<button className="btn btn-primary w-25">Signin</button>
					</Link>
				</div>
			)}
		</div>
	);
}
export default Account;
