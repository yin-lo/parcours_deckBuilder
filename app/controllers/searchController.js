const dataMapper = require('../dataMapper.js');

const searchController = {
	searchPage: (req, res) => {
		res.render('search');
	},

	async searchByElement(req, res) {
		try {
			const element = req.query.element;

			const cards = await dataMapper.getCardByElement(element);

			res.render('cardList', {
				cards,
				title: `Résultats pour ${element}`,
			});
		} catch (error) {
			console.error(error);
			res.status(500).send('Erreur serveur');
		}
	},
};

module.exports = searchController;
