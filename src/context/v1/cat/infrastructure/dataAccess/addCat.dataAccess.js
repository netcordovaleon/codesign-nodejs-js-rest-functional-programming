import CatModel from '../../../../../shared/model/cat.model';
import CatSchema from '../../../../../shared/schema/cat.mongo';

export const catByNameIO = name => {
	return CatSchema.findOne({
		name: { $regex: new RegExp(name, 'i') }
	}).then(res => (res ? new CatModel(res) : res));
};

export const addCatIO = cat => {
	return CatSchema.create(cat).then(res => new CatModel(res));
};
