const {
	successResponse200,
	errorResponse400
} = require('../../../../shared/utils/responseServices');

const { listIO } = require('./dataAccess/catList.dataAccess');
const catListWorkflow = require('../application.service/catList.service');

const handler = (_req, res) => {
	return catListWorkflow(listIO)
		.then(result => successResponse200(res, result))
		.catch(error => errorResponse400(res, error));
};

module.exports = {
	handler
};
