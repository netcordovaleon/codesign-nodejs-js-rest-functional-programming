import { Schema, model } from 'mongoose';

const catSchema = new Schema({
	name: {
		type: Schema.Types.String
	},
	color: {
		type: Schema.Types.String
	},
	createdAt: {
		type: Schema.Types.Date
	}
});

export default model('Cat', catSchema);
