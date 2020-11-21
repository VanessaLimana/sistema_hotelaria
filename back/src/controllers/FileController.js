const Cliente = require('../models/Clientes');
const ClienteController = require('../controllers/ClienteController');
const createCsvWriter = require('csv-writer').createObjectCsvWriter;

module.exports = {
	async fill(req, res) {
		const csvWriter = createCsvWriter({
			path: '../clientes.csv',
			fieldDelimiter: ";",
			header: [
				{id: 'nome', title: 'Nome'},
				{id: 'email', title: 'E-mail'},
				{id: 'cpf', title: 'Cpf'},
				{id: 'sexo', title: 'Sexo'},
				{id: 'telefone', title: 'Telefone'},
				{id: 'status', title: 'Status'},
			]
		});
		
		const data = await Cliente.find();

		csvWriter
		.writeRecords(data)
		.then(()=> console.log('The CSV file was written successfully'));

		return res.json(true);
	}
};