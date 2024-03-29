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

	async getCardByElement(element) {
    const query = element === 'null' ? 'SELECT * FROM card WHERE element IS NULL' : {text:'SELECT * FROM card WHERE element = $1;', 
    values: [element],};

		const result = await database.query(query);
		return result.rows;
	},
};

module.exports = dataMapper;
