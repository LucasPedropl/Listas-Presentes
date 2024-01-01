const express = require('express');
const app = express();
const hand = require('express-handlebars');

const routes = require('./routes/routes');

app.engine('handlebars', hand.engine());
app.set('view engine', 'handlebars');

var hbs = require('handlebars');

hbs.registerHelper('encodeURIComponent', function (text) {
	return encodeURIComponent(text);
});

app.use(express.static('public'));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use('/', routes);
app.listen(4000);
