import {
	successResponse200,
	errorResponse400
} from '../../../../shared/utils/responseServices';

import { catListWorkflow } from '../application.service/catList.service';
import { listIO } from './dataAccess/catList.dataAccess';

export const handler = (_req, res) => {
	return catListWorkflow(listIO)
		.then(result => successResponse200(res, result))
		.catch(error => errorResponse400(res, error));
};