import React from 'react';
import Head from 'next/head';
import { useRouter } from 'next/router';

import Header from './Header';
import Footer from './Footer';
import Showcase from './Showcase';
import styles from '@/styles/Layout.module.css';

const Layout = (props) => {
	const { title, keywords, description, children } = props;
	const router = useRouter();

	let modifiedTitle = `DJ Events | ${title}`;

	return (
		<div>
			<Head>
				<meta name='description' content={description} />
				<meta name='keywords' content={keywords} />

				<title>{modifiedTitle}</title>
			</Head>
			<Header />

			{router.pathname === '/' && <Showcase />}

			<div className={styles.container}>{children}</div>
			<Footer />
		</div>
	);
};

Layout.defaultProps = {
	title: 'Find the coming parties',
	description: 'Find the latest parties in your location',
	keywords: 'music, dj, edm, events',
};

export default Layout;
