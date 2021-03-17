import * as v1 from './v1/v1.routes';

export const routes = app => {
	app.use('/v1', v1.routes());
	// app.use('/v2', v2.routes());
};
