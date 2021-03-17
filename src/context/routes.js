const v1 = require('./v1/v1.routes');

function routes(app) {
	app.use('/v1', v1.routes());
	// app.use('/v2', v2.routes());
}

module.exports = {
	routes
}