const CatModel = data => {
	// eslint-disable-next-line no-underscore-dangle
	this.id = data._id;
	this.name = data.name;
};

module.exports = CatModel;
