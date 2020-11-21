const mongoose = require('mongoose');
const mongoosePaginate = require('mongoose-paginate');

const ClienteSchema = new mongoose.Schema({
	nome: {
		type: String,
		required: true
	},
	email: {
		type: String,
		required: true
	},
	cpf: {
		type: String,
		required: false
	},
	sexo: {
		type: String,
		required: false
	},
	telefone: {
		type: String,
		required: false
	},
	status: {
		type: String,
		required: true
	},
	datahora_cadastro: {
		type: Date,
		default: Date.now
	}
});

ClienteSchema.plugin(mongoosePaginate);

module.exports =  mongoose.model('Cliente', ClienteSchema);