import { Sequelize } from 'sequelize';
import dotenv from 'dotenv';

dotenv.config();

const password = process.env.PASSWORD as string;
const host = process.env.HOST as string;
const user = process.env.USER as string;

export const sequelize = new Sequelize('postgres', user, password, {
	host,
	dialect: 'postgres',
	logging: false,
});
