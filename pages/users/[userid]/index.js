import { useRouter } from 'next/router';

function UserPage() {
	const router = useRouter();

	function loadUserHandler() {
		router.push('/users/user1');
	}

	return (
		<div>
			<h1>
				This is the individual User Page of User {router.query.userid}
			</h1>
			<button onClick={loadUserHandler}>Load User1</button>
		</div>
	);
}

export default UserPage;
