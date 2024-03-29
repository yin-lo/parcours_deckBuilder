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
				title: `Résultats pour l'élément : ${element}`,
			});
		} catch (error) {
			console.error(error);
			res.status(500).send('Erreur serveur');
		}
	},

  async searchByLevel(req, res) {
		try {
			const level = req.query.level;

			const cards = await dataMapper.getCardByLevel(level);

			res.render('cardList', {
				cards,
				title: `Résultats par level : ${level}`,
			});
		} catch (error) {
			console.error(error);
			res.status(500).send('Erreur serveur');
		}
	},

  async searchByName(req, res) {
		try {
			const name = req.query.name;

			const cards = await dataMapper.getCardByName(name);

			res.render('cardList', {
				cards,
				title: `Résultats par noms : ${name}`,
			});
		} catch (error) {
			console.error(error);
			res.status(500).send('Erreur serveur');
		}
	},
};

module.exports = searchController;
