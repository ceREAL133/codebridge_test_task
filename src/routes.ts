import { Express } from 'express';
import { healthcheck } from './helpers/healthcheck';
// import { getAllPuppies } from './controllers/puppies.controller';

export default function routes(app: Express) {
	app.get('/ping', healthcheck);
	// app.get('/dogs', getAllPuppies);
}
