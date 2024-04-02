const dotenv = require('dotenv');
dotenv.config();
const express = require('express');
const path = require('path');
const initSession = require('./app/middlewares/initSession');
const initDeck = require('./app/middlewares/initDeck');

const router = require('./app/router');

const app = express();

app.set('view engine', 'ejs');
// afin de ne pas avoir de personne qui font des bêtises sur les fichiers :
const viewsDirectory = path.join(__dirname, 'app/views');
app.set('views', viewsDirectory);

app.use(express.static('public'));

app.use(initSession);
app.use(initDeck);

app.use(router);

const PORT = process.env.PORT || 1234;
app.listen(PORT, () => {
	console.log(`Listening at http://localhost:${PORT}`);
});
