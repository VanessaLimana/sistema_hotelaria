const mongoose = require('mongoose');

class Database {
	constructor() {
		this.mongo();
	}

	mongo() {
		// iniciando o db
		mongoose.connect('mongodb://localhost:27017/hoteldb', {
			useNewUrlParser: true,
			useUnifiedTopology: true
		});

	}
}

module.exports = new Database();