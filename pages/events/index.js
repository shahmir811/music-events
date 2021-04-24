import Layout from '@/components/Layout';
import { API_URL } from '@/config/index';

import EventItem from '@/components/EventItem';

export default function EventPage(props) {
	const { events } = props;

	const haveEvents = () => {
		if (events.length === 0) {
			return <h3>No events to show</h3>;
		} else {
			return events.map((event) => <EventItem key={event.id} event={event} />);
		}
	};

	return (
		<Layout title='Home'>
			<h1>Events</h1>
			{haveEvents()}
		</Layout>
	);
}

export const getStaticProps = async () => {
	const res = await fetch(`${API_URL}/events?_sort=date:ASC`);
	const events = await res.json();

	return {
		props: {
			events,
			revalidate: 1, // 1 second
		},
	};
};

// export const getServerSideProps = async () => {
// 	const res = await fetch(`${API_URL}/events?_sort=date:ASC`);
// 	const events = await res.json();

// 	return {
// 		props: {
// 			events,
// 		},
// 	};
// };
