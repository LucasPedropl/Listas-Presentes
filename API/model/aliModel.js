const Sequelize = require('sequelize');
const database = require('../db/db');
const Ali = database.define(
	'ali',
	{
		id_ali: {
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
			allowNull: true,
		},
	},
	{ database, modelname: 'ali', tableName: 'alis' }
);
module.exports = Ali;
