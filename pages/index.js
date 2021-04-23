import styles from '../styles/Home.module.css';
import Link from 'next/link';

import Layout from '../components/Layout';

export default function HomePage() {
	return (
		<Layout title='Home'>
			<h1>Home Page</h1>
			<Link href='/about'>About Us</Link>
			<br />
			<Link href='/events'>Event</Link>
		</Layout>
	);
}
