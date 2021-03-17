import { Router } from 'express';

import * as catRoutes from './cat/cat.routes';

export const routes = () => {
	const router = Router();

	router.use('/cat', catRoutes.routes());

	return router;
};
