import dotenv from 'dotenv';

dotenv.config();

// Port for server
export const PORT = process.env.PORT || 3000;

// Credentials to connect MongoDB
export const { DBMONGOUri } = process.env;
