export default class CatModel {
	id;
	name;

	constructor(data) {
		// eslint-disable-next-line no-underscore-dangle
		this.id = data._id;
		this.name = data.name;
	}
}
