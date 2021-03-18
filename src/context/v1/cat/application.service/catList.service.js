import { catList } from '../domain.model/catList.implementation';

export const catListWorkflow = catListIO => {
	return catList(catListIO);
};
