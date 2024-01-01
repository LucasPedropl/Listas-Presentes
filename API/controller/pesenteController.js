const Pesente = require('../model/pesenteModel');
module.exports = class pesenteController {
	//CREATE
	static async PesenteCreate(req, res) {
		let nome = req.body.nome;

		let preco = req.body.preco;
		let link = req.body.link;

		const pesente = {
			nome: nome,

			preco: preco,
			link: link,
		};
		await Pesente.create(pesente);
	}
	//READ - LISTAR
	static async PesenteListar(req, res) {
		const id_pesente = req.params.id;
		if (id_pesente) {
			const pesente = await Pesente.findOne({
				where: { id_pesente: id_pesente },
			});
			res.json(pesente);
		} else {
			const pesente = await Pesente.findAll({ raw: true });
			res.json(pesente);
		}
	}
	//UPDATE
	static async PesenteUpdate(req, res) {
		const id_pesente = req.params.id;
		let nome = req.body.nome;

		let preco = req.body.preco;
		let link = req.body.link;
		const pesente = {
			nome: nome,

			preco: preco,
			link: link,
		};
		await Pesente.update(pesente, { where: { id_pesente: id_pesente } });
	}
	//Função PesenteDelete responsável pela exclusão do usuário.
	static async PesenteDelete(req, res) {
		const id_pesente = req.params.id;
		await Pesente.destroy({ where: { id_pesente: id_pesente } });
	}
	//COUNT
	static async PesenteCount(req, res) {
		const count = await Pesente.count();
		res.json(count);
	}
};
