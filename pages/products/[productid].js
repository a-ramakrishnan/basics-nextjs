import { useRouter } from 'next/router';

function ProductIdPage() {
	const router = useRouter();

	return (
		<div>
			<h1>
				This is the Single Product View Page of ID:{' '}
				{router.query.productid}
			</h1>
		</div>
	);
}

export default ProductIdPage;
