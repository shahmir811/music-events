import Layout from '@/components/Layout';
import Pagination from '@/components/Pagination';
import { API_URL, PER_PAGE } from '@/config/index';
import EventItem from '@/components/EventItem';

export default function EventPage(props) {
	const { events, page, total } = props;

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
			<Pagination page={page} total={total} />
		</Layout>
	);
}

export const getServerSideProps = async ({ query: { page = 1 } }) => {
	// Calculate Start Page
	const start = +page === 1 ? 0 : (+page - 1) * PER_PAGE;

	// Fetch total/count
	const totalRes = await fetch(`${API_URL}/events/count`);
	const total = await totalRes.json();

	// Fetch events
	const res = await fetch(
		`${API_URL}/events?_sort=date:ASC&_limit=${PER_PAGE}&_start=${start}`
	);
	const events = await res.json();

	return {
		props: {
			events,
			page: +page,
			total,
		},
	};
};
