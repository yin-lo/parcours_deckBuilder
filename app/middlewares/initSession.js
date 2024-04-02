const expressSession = require('express-session');

const session = expressSession({
	resave: true,
	saveUninitialized: true,
	secret: process.env.SESSION_SECRET,
	cookie: {
		secure: false,
	},
});

module.exports = session;
