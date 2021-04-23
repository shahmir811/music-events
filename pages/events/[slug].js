import React from 'react';
import { useRouter } from 'next/router';

import Layout from '../../components/Layout';

const EventPage = () => {
	const router = useRouter();
	console.log(router);

	return (
		<Layout>
			<p>This is my slug event</p>
			<p>{router.query.slug}</p>
			<button type='button' onClick={() => router.push('/')}>
				Home
			</button>
		</Layout>
	);
};

export default EventPage;
