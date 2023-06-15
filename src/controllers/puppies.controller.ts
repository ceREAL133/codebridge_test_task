import { Request, Response } from 'express';
import { Puppy } from '../models/puppies.model';
import { puppySchema } from '../schemas/puppy.schema';

export const getAllPuppies = async (req: Request, res: Response) => {
	try {
		const { attribute, order, pageNumber, limit } = req.query;

		const sortOptions: [string, 'ASC' | 'DESC'][] =
			attribute && order
				? [[attribute as string, order as 'ASC' | 'DESC']]
				: [];

		const paginationOptions =
			pageNumber && limit
				? {
						offset: (Number(pageNumber) - 1) * Number(limit),
						limit: Number(limit),
				  }
				: {};

		const puppies = await Puppy.findAll({
			order: sortOptions,
			...paginationOptions,
		});

		return res.status(200).send(puppies);
	} catch (error) {
		console.error('Error retrieving puppies:', error);
		return res.status(500).json({ error: 'Internal server error' });
	}
};

export const createDog = async (req: Request, res: Response) => {
	const { error, value: candidateDog } = puppySchema.validate(req.body);

	if (error) {
		return res.status(400).json({ error: error.details[0].message });
	}

	try {
		const existingDog = await Puppy.findOne({
			where: {
				name: candidateDog.name,
				tail_length: candidateDog.tail_length,
				color: candidateDog.color,
				weight: candidateDog.weight,
			},
		});

		if (existingDog) {
			return res.status(409).json({
				error: 'Same dog already exists',
			});
		}
		const dog = await Puppy.create(candidateDog);
		return res.status(200).send(dog);
	} catch (error) {
		console.error('Error creating dog:', error);
		return res.status(500).json({ error: 'Internal server error' });
	}
};

export const deleteDog = async (req: Request, res: Response) => {
	const { id } = req.params;

	try {
		await Puppy.destroy({ where: { id } });

		return res.status(200).send(`Puppy with id ${id} was deleted`);
	} catch (error: any) {
		throw new Error(error);
	}
};
