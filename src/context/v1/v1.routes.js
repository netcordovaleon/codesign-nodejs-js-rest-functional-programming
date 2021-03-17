const { Router } = require('express');

const catRoutes = require('./cat/cat.routes');

const routes = () => {
	const router = Router();

	router.use('/cat', catRoutes.routes())

	return router;
};

module.exports = { routes };
