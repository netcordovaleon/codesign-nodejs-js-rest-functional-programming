require('./app/config/database');
const bodyParser = require('body-parser');
const app = require('./app/api/index');

app.use(bodyParser.urlencoded({ extended: false }));

app.listen(3000, () => { console.log(`el servidor se encuentra activo en el puerto 3000`) });