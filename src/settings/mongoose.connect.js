const mongoose = require('mongoose');
const { DBMONGOUri } = require('./config');

function mongoConnect() {
	mongoose.Promise = global.Promise;

	return mongoose
		.connect(DBMONGOUri, {
			useNewUrlParser: true,
			socketTimeoutMS: 0,
			connectTimeoutMS: 0,
			useUnifiedTopology: true
		})
		.then(() => console.log(`Succeeded connected to MongoDB`))
		.catch(err => console.log(`ERROR connecting to MongoDB.`, err));
}

module.exports = {
	mongoConnect
};
