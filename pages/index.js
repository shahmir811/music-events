import Layout from '@/components/Layout';
import Link from 'next/link';
import { Fragment } from 'react';

import { API_URL } from '@/config/index';
import EventItem from '@/components/EventItem';

export default function HomePage(props) {
	const { events } = props;

	const haveEvents = () => {
		if (events.length === 0) {
			return <h3>No events to show</h3>;
		} else {
			return (
				<Fragment>
					{events.map((event) => (
						<EventItem key={event.id} event={event} />
					))}
					<Link href='/events'>
						<a className='btn-secondary'>View All Events</a>
					</Link>
				</Fragment>
			);
		}
	};

	return (
		<Layout title='Home'>
			<h1>Upcoming Events</h1>
			{haveEvents()}
		</Layout>
	);
}

export const getStaticProps = async () => {
	const res = await fetch(`${API_URL}/events?_sort=date:ASC&_limit=3`);
	const events = await res.json();

	return {
		props: {
			events,
			revalidate: 1, // 1 second
		},
	};
};

// export const getServerSideProps = async () => {
// 	const res = await fetch(`${API_URL}/events`);
// 	const events = await res.json();

// 	return {
// 		props: {
// 			events,
// 		},
// 	};
// };
