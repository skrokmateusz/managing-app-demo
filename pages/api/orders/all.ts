import type { NextApiRequest, NextApiResponse } from 'next';

import { connectToDatabase } from '../../../lib/db';
import { getAll } from '../../../helpers/api-util';

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
	let client: any;
	try {
		client = await connectToDatabase();
	} catch (error) {
		res.status(500).json({ message: 'Connecting to the database fail!' });
		return;
	}

	try {
		const allOrders = await getAll(client, 'orders');
		res.status(200).json({ allOrders: allOrders });
	} catch (error) {
		res.status(500).json({ message: 'Getting orders failed!' });
	}
	client.close();
};

export default handler;
