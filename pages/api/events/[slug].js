const { events } = require('./data.json');

export default (req, res) => {
	const { method } = req;

	const { slug } = req.query;
	// console.log(slug);

	const evt = events.filter((event) => event.slug === slug);

	if (method === 'GET') {
		res.status(200).json(evt);
	} else {
		res.setHeader('Allow', ['GET']);
		res.status(405).json({
			message: `Method ${method} is not allowed`,
		});
	}
};
