const { Schema, model } = require('mongoose');

const catSchema = new Schema({
	name: {
		type: String
	},
	color: {
		type: String
	}
});

module.exports = model('Cat', catSchema);
