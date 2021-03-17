const CatModel = require('../../../../../shared/model/cat.model');
const CatSchema = require('../../../../../shared/schema/cat.mongo');

const listIO = () => {
	return CatSchema.find().then(cats => cats.map(cat => new CatModel(cat)));
};

module.exports = {
	listIO
};
