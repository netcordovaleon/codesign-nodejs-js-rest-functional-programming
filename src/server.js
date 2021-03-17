const cors = require('cors');
const express = require('express');
const http = require('http');
const morgan = require('morgan');

const { routes } = require('./context/routes');
const { PORT } = require('./settings/config');
const { mongoConnect } = require('./settings/mongoose.connect');

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
