const mongoose = require('mongoose');

const Schema = mongoose.Schema;
const ProductSchema = new Schema({
    name: {
        type: String,
        trim: true,
        required: true,
    },
    stock: {
        type: Number,
        trim: true,
        required: true
    },
    price: {
        type: Number,
        trim: true,
        required: true
    }
});

module.exports = mongoose.model('product', ProductSchema);