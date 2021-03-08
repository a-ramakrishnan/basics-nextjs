import Link from 'next/link';

function UsersPage() {
	const users = [
		{ id: 'user1', name: 'User 1' },
		{ id: 'user2', name: 'User 2' },
	];

	return (
		<div>
			<h1>This is the users folder</h1>
			<ul>
				{users.map((user) => (
					<li key={user.id}>
						{/* 						<Link href={`/users/${user.id}`}>{user.name}</Link>*/}
						<Link
							href={{
								pathname: '/users/[id]',
								query: {
									id: user.id,
								},
							}}
						>
							{user.name}
						</Link>
					</li>
				))}
			</ul>
		</div>
	);
}

export default UsersPage;
