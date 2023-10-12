import { connectToDatabase } from '@/lib/db';
import { hashPassword } from '@/lib/auth';
import type { NextApiRequest, NextApiResponse } from 'next';

const handler = async (req: NextApiRequest, res: NextApiResponse) => {

	if (req.method === 'POST') {
		const data = req.body;

		const { firstName, lastName, image, email, phone, adress, region, car, periodic, medical, endContract } = data;

		const client = await connectToDatabase();
		const db = client.db();

		const existingUser = await db.collection('employees').findOne({ email: email });
		if (existingUser) {
			res.status(422).json({ message: 'User already exist' });
			client.close();
			return;
		}

	

		const result = await db
			.collection('employees')
			.insertOne({ firstName, lastName, image, email, phone, adress, region, car, periodic, medical, endContract });

		res.status(201).json({ message: 'Created user!' });
	}
};

export default handler;


// 
