import { connectToDatabase } from '@/lib/db';

export const getAll = async (client: any, collection: string) => {
	const db = client.db();
	const data = await db.collection(collection).find().toArray();

	return data;
};
