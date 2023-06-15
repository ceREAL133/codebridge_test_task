import express from 'express';
import routes from './src/routes';
import dotenv from 'dotenv';
import { fillDatabase } from './src/db/fillDatabase';

dotenv.config();

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.get('/', (req, res) => {
	res.send('Hello, programm is working');
});

fillDatabase();

app.listen(process.env.PORT, () => {
	console.log(`app listening on port ${process.env.PORT}`);

	routes(app);
});
