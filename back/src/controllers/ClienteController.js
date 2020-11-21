const Cliente = require('../models/Clientes');

module.exports = {
	async index(req, res) {
		const {page = 1, search} = req.query;

		const clientes = await Cliente.paginate(search ? {nome: { $regex: search, $options: 'i'}} : null, {page, limit: 5});
		return res.json(clientes);
	},

	async show(req, res) {
		const cliente = await Cliente.findById(req.params.id);
		return res.json(cliente);
	},

	async store(req, res) {
		console.log(req);
		
		const cliente = await Cliente.create(req.body);
		return res.json(cliente);
	},

	async update(req, res) {
		//retornar o produto atualizado -> new: true
		//retornar produto antes de estar atualizado -> sem o new ou new:false
		const cliente = await Cliente.findByIdAndUpdate(req.params.id, req.body, {new: true});
		return res.json(cliente);
	},

	async destroy(req, res) {
		await Cliente.findByIdAndRemove(req.params.id);
		return res.send();
	}
};