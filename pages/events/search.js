import Layout from '@/components/Layout';
import qs from 'qs';
import { useRouter } from 'next/router';
import Link from 'next/link';

import { API_URL } from '@/config/index';
import EventItem from '@/components/EventItem';

export default function SearchPage(props) {
	const { events } = props;
	const router = useRouter();

	const haveEvents = () => {
		if (events.length === 0) {
			return <h3>No events to show</h3>;
		} else {
			return events.map((event) => <EventItem key={event.id} event={event} />);
		}
	};

	return (
		<Layout title='Search Result'>
			<Link href='/events'> &#8592; Go Back</Link>
			<h1>Search Results For {router.query.term} :</h1>
			{haveEvents()}
		</Layout>
	);
}

export const getServerSideProps = async ({ query: { term } }) => {
	const query = qs.stringify({
		_where: {
			_or: [
				{ name_contains: term },
				{ performers_contains: term },
				{ description_contains: term },
				{ venue_contains: term },
			],
		},
	});

	const res = await fetch(`${API_URL}/events?${query}`);
	const events = await res.json();

	return {
		props: {
			events,
		},
	};
};
