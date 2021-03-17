import { Router } from 'express';

import * as catList from './infrastructure/catListApi';
import * as addCat from './infrastructure/addCatApi';

export const routes = () => {
	const router = Router();

	router.route('/').get(catList.handler);
	router.route('/').post(addCat.handler);

	return router;
};