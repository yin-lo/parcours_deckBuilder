const database = require('./client');

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
		const query =
			element === 'null'
				? 'SELECT * FROM card WHERE element IS NULL'
				: {
						text: 'SELECT * FROM card WHERE element = $1;',
						values: [element],
				  };

		const result = await database.query(query);
		return result.rows;
	},

	async getCardByLevel(level) {
		const result = await database.query('SELECT * FROM card WHERE level = $1;', [level]);
		return result.rows;
	},

	async getCardByName(name) {
		const result = await database.query('SELECT * FROM card WHERE name ILIKE $1;', [`%${name}%`]);
		return result.rows;
	},

	async getCardByValues(direction, value) {
		const result = await database.query(`SELECT * FROM card WHERE ${escapeIdentifier(`value_${direction}`)} = $1;`, [value]);
		return result.rows;
	},
};

module.exports = dataMapper;
