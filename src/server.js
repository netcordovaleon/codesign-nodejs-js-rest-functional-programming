import cors from 'cors';
import express from 'express';
import http from 'http';
import morgan from 'morgan';

import { routes } from './context/routes';
import { PORT } from './settings/config';
import { mongoConnect } from './settings/mongoose.connect';

const app = express();

routes(app);

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(morgan('dev'));

const server = http.createServer(app);

server.listen(PORT, () => {
	mongoConnect();
	console.log(`Server listening on port: ${PORT}`);
});
