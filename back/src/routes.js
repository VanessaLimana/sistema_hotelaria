const {Router} = require('express');
const {resolve} = require('path');

const routes = new Router();

const ClienteController = require('./controllers/ClienteController');
const FileController = require('./controllers/FileController');

routes.get('/', (req, res) => {
	return res.sendFile(resolve(__dirname, '..','..','front','index.html'))
});

routes.get('/clientes', ClienteController.index);
routes.get('/clientes/:id', ClienteController.show);
routes.post('/clientes', ClienteController.store);
routes.put('/clientes/:id', ClienteController.update);
routes.delete('/clientes/:id', ClienteController.destroy);
routes.get('/csv', FileController.fill);
// routes.get('/csv', ClienteController.csvIndex);

module.exports = routes;