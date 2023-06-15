import { sequelize } from '../db/sequelize';

export const healthcheck = async (req: any, res: any) => {
	try {
		await sequelize.authenticate();
		res.status(200).send('Dogshouseservice.Version1.0.1');
		console.log('Connection has been established successfully.');
	} catch (error) {
		console.error('Unable to connect to the database:', error);
	}
};
