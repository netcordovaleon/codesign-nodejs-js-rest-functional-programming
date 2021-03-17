import { Schema, model } from 'mongoose';

const catSchema = new Schema({
	name: {
		type: String
	},
	color: {
		type: String
	}
});

export default model('Cat', catSchema);
