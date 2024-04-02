function initDeck(req, res, next) {
	if (!req.session.deck) {
		req.session.deck = [];
	}
	next();
}

module.exports = initDeck;
