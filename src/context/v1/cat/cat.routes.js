import { Router } from 'express';

import * as catList from './infrastructure/catListApi';

export const routes = () => {
	const router = Router();

	router.route('/').get(catList.handler);

	return router;
};