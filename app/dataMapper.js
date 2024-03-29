const database = require('./database');

const dataMapper = {
	async getAllCards() {
		const result = await database.query('SELECT * FROM card');
		return result.rows;
	},

	async getCard(id) {
		const result = await database.query('SELECT * FROM card WHERE id = $1;', [id]);
		return result.rows[0];
	},
};

module.exports = dataMapper;
