import React from 'react';
import Link from 'next/link';

import Layout from '../../components/Layout';

function EventsPage() {
	return (
		<Layout>
			<h2>This is my events page</h2>
			<Link href='/'>Home</Link>
		</Layout>
	);
}

export default EventsPage;
