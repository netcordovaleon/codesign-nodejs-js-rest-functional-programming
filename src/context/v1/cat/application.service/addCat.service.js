import { addCat } from '../domain.model/addCat.implementation';

export const addCatWorkflow = (addCatIO, catbyNameIO, cat) => {
	return addCat(addCatIO, catbyNameIO, cat);
};
