export default class AddCatDTO {
	constructor(data = {}) {
		if (!data.name || !data.name.trim()) {
			throw {code: 'nameRequired', message: 'Name is required'};
		}

		this.name = data.name.trim();
	}
}
