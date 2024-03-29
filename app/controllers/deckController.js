const dataMapper = require('../dataMapper.js');

const deckController = {
	deckPage(req, res) {
		res.render('deck', {
			cards: req.session.deck || [],
			title: 'Votre deck',
		});
	},

	async addCard(req, res) {
		try {
			if (!req.session.deck) {
				req.session.deck=[];
			}
			const cardId = Number(req.params.id);

			const checkCard = req.session.deck.find((card) => card.id === cardId);

			if (!checkCard) {
				const card = await dataMapper.getCard(cardId);
				req.session.deck.push(card);
			}
			console.log(req.session.deck);

			res.redirect('/');

		} catch (error) {
			console.error(error);
			res.status(500).send('Erreur serveur');
		}
	},
};

module.exports = deckController;
