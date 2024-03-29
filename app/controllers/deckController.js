const dataMapper = require('../dataMapper.js');

const deckController = {
	deckPage(req, res) {
		res.render('deck', {
			cards: req.session.deck || [],
		});
	},

	async addCard(req, res) {
		try {
			if (!req.session.deck) {
				req.session.deck=[];
			}


			res.render('cardList', {
				cards,
				title: `Construction de ton deck`,
			});
		} catch (error) {
			console.error(error);
			res.status(500).send('Erreur serveur');
		}
	},
};

module.exports = deckController;
