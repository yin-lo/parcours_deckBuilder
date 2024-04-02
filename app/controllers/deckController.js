const dataMapper = require('../models/dataMapper.js');

const deckController = {
	deckPage(req, res) {
		res.render('deck', {
			cards: req.session.deck,
			title: 'Votre deck',
		});
	},

	async addCard(req, res) {
		try {
			// req.session.deck ||= [];
			// req.session.deck = req.session.deck || []; <= plus besoin avec le initDeck

			const cardId = Number(req.params.id);

			//pour ne pas mettre en double la carte :
			const checkCard = req.session.deck.find((card) => card.id === cardId);

			const countDeck = req.session.deck.length;

			//Si la carte n'y est pas et s'il y a moins de 5 cartes, alors on peut rajouter la carte :
			if (!checkCard && countDeck < 5) {
				const card = await dataMapper.getCard(cardId);
				req.session.deck.push(card);
			}
			// petite info qui s'affiche sous le titre :
			let info = !checkCard ? `Ajout réalisé` : `La carte est déjà dans le deck`;

			if (req.session.deck.length >= 5) {
				info = `Le deck contient déjà 5 cartes`;
			}
			req.app.locals.info = info;

			res.redirect('/');
		} catch (error) {
			console.error(error);
			res.status(500).send('Erreur serveur');
		}
	},

	async deleteCard(req, res) {
		try {
			const cardId = Number(req.params.id);

			req.session.deck = req.session.deck.filter((card) => card.id !== cardId);
			res.redirect('/deck');

		} catch (error) {
			console.error(error);
			res.status(500).send('Erreur serveur');
		}
	},
};

module.exports = deckController;
