const Sequelize = require('sequelize');
const database = require('../db/db');
const Beleza = database.define(
	'beleza',
	{
		id_beleza: {
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
		linkIMG: {
			type: Sequelize.STRING,
			allowNull: false,
		},
	},
	{ database, modelname: 'beleza', tableName: 'belezas' }
);
module.exports = Beleza;
