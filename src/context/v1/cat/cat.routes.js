const { Router } = require('express');
const catList = require('./infrastructure/catListApi');

const routes = () => {
	const router = Router();

	router.route('/').get(catList.handler);

	return router;
};

module.exports = { routes };
