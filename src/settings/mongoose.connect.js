import mongoose from 'mongoose';

import { DBMONGOUri } from './config';

export const mongoConnect = () => {
	mongoose.Promise = global.Promise;

	return mongoose
		.connect(DBMONGOUri, {
			useNewUrlParser: true,
			socketTimeoutMS: 0,
			connectTimeoutMS: 0,
			useUnifiedTopology: true
		})
		.then(() => console.log(`Succeeded connected to MongoDB.\n`))
		.catch(err => console.log(`ERROR connecting to MongoDB.\n`, err));
};