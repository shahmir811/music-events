import React from 'react';
import Link from 'next/link';

import Layout from '../components/Layout';

function AboutPage() {
	return (
		<Layout title='About'>
			<h1>This is my About Page</h1>
			<Link href='/'>Home</Link>
		</Layout>
	);
}

export default AboutPage;
