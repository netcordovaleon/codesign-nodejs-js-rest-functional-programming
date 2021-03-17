import cors from 'cors';
import express from 'express';
import http from 'http';

import { routes } from './context/routes';
import { PORT } from './settings/config';
import { mongoConnect } from './settings/mongoose.connect';

const morgan = require('morgan');

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(morgan('dev'));

routes(app);

const server = http.createServer(app);

server.listen(PORT, () => {
	console.log(`\nServer listening on port: ${PORT}`);
	mongoConnect();
});
