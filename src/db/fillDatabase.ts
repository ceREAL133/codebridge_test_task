import { Puppy } from '../models/puppies.model';

export async function fillDatabase() {
	try {
		await Puppy.sync();

		const data = [
			{
				name: 'Neo',
				color: 'red & amber',
				tail_length: 22,
				weight: 32,
			},
			{
				name: 'Jessy',
				color: 'black & white',
				tail_length: 7,
				weight: 14,
			},
		];

		for (const record of data) {
			const existingRecord = await Puppy.findOne({
				where: { name: record.name },
			});
			if (!existingRecord) {
				await Puppy.create(record);
			}
		}

		console.log('Database initialized successfully.');
	} catch (error) {
		console.error('Unable to create the database:', error);
	}
}
