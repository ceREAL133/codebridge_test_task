const Joi = require('joi');
const colorPattern = /^(?:[a-zA-Z]+(?:\s+&\s+[a-zA-Z]+)*)$/;

export const puppySchema = Joi.object({
	name: Joi.string().min(3).max(25).required().messages({
		'string.min': 'Name must be at least 3 characters long',
		'string.max': 'Name must not exceed 25 characters',
	}),
	color: Joi.string().pattern(new RegExp(colorPattern)).required().messages({
		'string.pattern.base': 'Color must be one word or words separated by &',
	}),
	tail_length: Joi.number().integer().positive().max(40).required().messages({
		'number.max': 'Tail must not be longer than 40',
	}),
	weight: Joi.number().positive().required(),
});
