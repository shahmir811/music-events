import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { FaPencilAlt, FaTimes } from 'react-icons/fa';

import styles from '@/styles/Event.module.css';
import { API_URL } from '@/config/index';
import Layout from '@/components/Layout';

const EventPage = (props) => {
	const {
		id,
		name,
		image,
		performers,
		date,
		time,
		venue,
		description,
		address,
	} = props.event;

	const deleteEvent = () => {
		console.log('Delete Event Function click');
	};

	return (
		<Layout>
			<div className={styles.event}>
				<div className={styles.controls}>
					<Link href={`/events/edit/${id}`}>
						<a>
							<FaPencilAlt /> Edit Event
						</a>
					</Link>

					<a href='#' className={styles.delete} onClick={deleteEvent}>
						<FaTimes /> Delete Event
					</a>
				</div>

				<span>
					{new Date(date).toLocaleDateString('en-US')} at {time}
				</span>
				<h1>{name}</h1>
				{image && (
					<div className={styles.image}>
						<Image src={image.formats.medium.url} width={960} height={600} />
					</div>
				)}

				<h3>Performers:</h3>
				<p>{performers}</p>
				<h3>Description:</h3>
				<p>{description}</p>
				<h3>Venue: {venue}</h3>
				<p>{address}</p>

				<Link href='/events'>
					<a className={styles.back}>{'<'} Go Back</a>
				</Link>
			</div>
		</Layout>
	);
};

export default EventPage;

export const getStaticPaths = async () => {
	const res = await fetch(`${API_URL}/events`);
	const events = await res.json();
	const paths = events.map((event) => ({
		params: { slug: event.slug },
	}));

	return {
		paths,
		fallback: true,
	};
};

export const getStaticProps = async ({ params: { slug } }) => {
	// const { slug } = context.query;

	const res = await fetch(`${API_URL}/events?slug=${slug}`);
	const event = await res.json();

	return {
		props: {
			event: event[0],
		},
		revalidate: 1,
	};
};

// export const getServerSideProps = async (context) => {
// 	const { slug } = context.query;

// 	const res = await fetch(`${API_URL}/events/${slug}`);
// 	const event = await res.json();

// 	return {
// 		props: {
// 			event: event[0],
// 		},
// 	};
// };
