//require('../config/setup')
const mongoose = require('mongoose');

const mongoSetting = { useNewUrlParser: true, useUnifiedTopology: true };
mongoose.connect('mongodb+srv://m001-student:m001-student@cordovacluster-fwjkv.mongodb.net/codesign?retryWrites=true&w=majority', mongoSetting);
mongoose.Promise = global.Promise;
mongoose.connection.on('error', console.error.bind(console, 'Error de conexion en MongoDB'));
mongoose.connection.on('open', console.log.bind(console, 'Conexion Satisfactoria'));
//module.exports = mongoose;