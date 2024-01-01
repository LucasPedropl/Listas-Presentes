const Sequelize = require('sequelize');
const database = require('../db/db');
const Pesente = database.define(
	'pesente',
	{
		id_pesente: {
			type: Sequelize.INTEGER,
			autoIncrement: true,
			allowNull: false,
			primaryKey: true,
		},
		nome: {
			type: Sequelize.STRING,
			allowNull: false,
		},
		preco: {
			type: Sequelize.STRING,
			allowNull: false,
		},
		link: {
			type: Sequelize.STRING,
			allowNull: false,
		},
	},
	{ database, modelname: 'pesente', tableName: 'pesentes' }
);
module.exports = Pesente;
