const dotenv = require('dotenv');

dotenv.config();

// Port for server
exports.PORT = process.env.PORT || 3000;

// Credentials to connect MongoDB
exports.DBMONGOUri = process.env.DBMONGOUri;
