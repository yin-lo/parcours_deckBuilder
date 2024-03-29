const dataMapper = require('../dataMapper.js');

const mainController = {
	homePage: async (req, res) => {
		try {
			const cards = await dataMapper.getAllCards();
			res.render('cardList', {
				cards,
				title: 'Liste des cartes',
			});
		} catch (error) {
			console.error(error);
			res.status(500).send(`An error occured with the database :\n${error.message}`);
		}
	},

	async cardPage(req, res) {
		const id = req.params.id;
		try {
			const card = await dataMapper.getCard(id);

			if (!card) {
				res.status(404).send('Carte non trouvée');
			} else {
				res.render('card', {
					card,
          pageTitle: card.name,
				});
			}
		} catch (error) {
			console.error(error);
			res.status(500).send('Erreur serveur');
		}
	},
};

module.exports = mainController;
