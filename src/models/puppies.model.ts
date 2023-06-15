import { INTEGER, Model, Optional, STRING } from 'sequelize';
import { sequelize } from '../db/sequelize';

export interface PuppyAttributes {
	id: number;
	name: string;
	color: string;
	tail_length: number;
	weight: number;
}

interface PuppyCreationAttributes extends Optional<PuppyAttributes, 'id'> {}

export const Puppy = sequelize.define<
	Model<PuppyAttributes, PuppyCreationAttributes>
>(
	'Puppy',
	{
		id: {
			type: INTEGER,
			primaryKey: true,
			autoIncrement: true,
		},
		name: {
			type: STRING,
			allowNull: false,
		},
		color: {
			type: STRING,
			allowNull: false,
		},
		tail_length: {
			type: INTEGER,
			allowNull: false,
		},
		weight: {
			type: INTEGER,
			allowNull: false,
		},
	},
	{
		tableName: 'puppies',
		timestamps: false,
	}
);
