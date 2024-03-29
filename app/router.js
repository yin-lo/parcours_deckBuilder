const express = require('express');
const router = express.Router();

const mainController = require('./controllers/mainController');
const searchController = require('./controllers/searchController');
const deckController = require('./controllers/deckController');

// page d'accueil
router.get('/', mainController.homePage);

// page détail d'une carte
router.get('/card/:id',mainController.cardPage);

// page de recherche
router.get('/search', searchController.searchPage);
router.get('/search/element', searchController.searchByElement);

// page de création d'un deck
router.get('/deck', deckController.deckPage);
router.get('/deck/add/:id',deckController.addCard);
router.get('/deck/delete/:id');


module.exports = router;