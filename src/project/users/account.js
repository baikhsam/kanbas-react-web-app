import * as client from "./client";
import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
function Account() {
	const [account, setAccount] = useState(null);
	const navigate = useNavigate();
	const fetchAccount = async () => {
		const account = await client.account();
		setAccount(account);
	};
	useEffect(() => {
		fetchAccount();
	}, []);
	const save = async () => {
		await client.updateUser(account);
	};
	return (
		<div className="w-50">
			<h1>Account</h1>
			{account && (
				<div>
					<input
						className="form-control w-50 my-2"
						value={account.password}
						onChange={(e) =>
							setAccount({ ...account, password: e.target.value })
						}
					/>
					<input
						className="form-control w-50 my-2"
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
						value={account.lastName}
						onChange={(e) =>
							setAccount({ ...account, lastName: e.target.value })
						}
					/>
					<input
						className="form-control w-50 my-2"
						type="date"
						value={account.dob}
						onChange={(e) =>
							setAccount({ ...account, dob: e.target.value })
						}
					/>
					<input
						className="form-control w-50 my-2"
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
					<Link
						to="/project/admin/users"
						className="btn btn-warning w-50"
					>
						Users
					</Link>
				</div>
			)}
		</div>
	);
}
export default Account;
