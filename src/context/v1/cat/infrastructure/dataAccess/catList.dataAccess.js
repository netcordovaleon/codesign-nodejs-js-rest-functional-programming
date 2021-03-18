import CatModel from '../../../../../shared/model/cat.model';
import CatSchema from '../../../../../shared/schema/cat.mongo';

export const listIO = () => {
	return CatSchema.find().then(cats => cats.map(cat => new CatModel(cat)));
};