import { Express } from 'express';
import { healthcheck } from './helpers/healthcheck';
import {
	getAllPuppies,
	createDog,
	deleteDog,
} from './controllers/puppies.controller';
import { isDogByIdExist } from './middlewares/isDogByIdExist';

export default function routes(app: Express) {
	app.get('/ping', healthcheck);

	app.get('/dogs', getAllPuppies);
	app.post('/dog', createDog);
	app.delete('/dog/:id', isDogByIdExist, deleteDog);
}
