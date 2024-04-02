const dataMapper = require('../models/dataMapper.js');

const searchController = {
	searchPage(_, res) {
		res.render('search');
	},

	async searchByElement(req, res) {
		try {
			const { element } = req.query;

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
			const { level } = req.query;

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
			const { name } = req.query;

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

  async searchByValues(req, res) {
		try {
			const { direction } = req.query;
      const { value } = req.query;

			const cards = await dataMapper.getCardByValues(direction, value);

			res.render('cardList', {
				cards,
				title: `Résultats par direction : ${direction}`,
			});
		} catch (error) {
			console.error(error);
			res.status(500).send('Erreur serveur');
		}
	},
};

module.exports = searchController;
