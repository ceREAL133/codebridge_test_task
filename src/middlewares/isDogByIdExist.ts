import { NextFunction, Request, Response } from 'express';
import { Puppy } from '../models/puppies.model';

export const isDogByIdExist = async (
	req: Request,
	res: Response,
	next: NextFunction
) => {
	const { id } = req.params;

	const dog = await Puppy.findOne({ where: { id } });

	if (!dog) {
		return res.status(404).send('Dog with this id was not found');
	}

	next();
};
