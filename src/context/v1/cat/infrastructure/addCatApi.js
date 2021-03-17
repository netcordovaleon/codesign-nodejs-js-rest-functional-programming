import {
	successResponse200,
	errorResponse400
} from '../../../../shared/utils/responseServices';

import { addCatWorkflow } from '../application.service/addCat.service';
import AddCatDTO from '../application.service/addCat.dto';

import { addCatIO, catByNameIO } from './dataAccess/addCat.dataAccess';

export const handler = (req, res) => {
	let body;
	try {
		body = new AddCatDTO(req.body);
	} catch (error) {
		return errorResponse400(res, error);
	}

	return addCatWorkflow(addCatIO, catByNameIO, body)
		.then(result => successResponse200(res, result))
		.catch(error => errorResponse400(res, error));
};
