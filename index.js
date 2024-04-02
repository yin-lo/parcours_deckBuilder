const dotenv = require('dotenv');
dotenv.config();
const express = require('express');
const path = require('path');
const expressSession = require('express-session');

const router = require('./app/router');

const app = express();

app.use(expressSession({
  resave: true,
  saveUninitialized: true,
  secret: process.env.SESSION_SECRET,
  cookie: {
    secure: false,
    maxAge: (1000 * 60 * 60), // ça fait une heure
  },
}));

app.set('view engine', 'ejs');
// afin de ne pas avoir de personne qui font des bêtises sur les fichiers
const viewsDirectory = path.join(__dirname, "app/views");
app.set('views', viewsDirectory);

app.use(express.static('public'));

app.use(router);

const PORT = process.env.PORT || 1234;
app.listen(PORT, () => {
  console.log(`Listening at http://localhost:${PORT}`);
});
