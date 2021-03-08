import Link from 'next/link';

function HomePage() {
	return (
		<div>
			<h1>The Home Page</h1>
			<ul>
				<li>
					<Link href='/products'>Products</Link>
				</li>
				<li>
					<Link href='/users'>Users</Link>
				</li>
				<li>
					<Link href='/products/list'>Product List</Link>
				</li>
			</ul>
		</div>
	);
}

export default HomePage;
