const Beleza = require('../model/belezaModel');
module.exports = class belezaController {
	//CREATE
	static async BelezaCreate(req, res) {
		let nome = req.body.nome;

		let preco = req.body.preco;
		let link = req.body.link;

		const beleza = {
			nome: nome,

			preco: preco,
			link: link,
		};
		await Beleza.create(beleza);
	}
	//READ - LISTAR
	static async BelezaListar(req, res) {
		const id_beleza = req.params.id;
		if (id_beleza) {
			const beleza = await Beleza.findOne({
				where: { id_beleza: id_beleza },
			});
			res.json(beleza);
		} else {
			const beleza = await Beleza.findAll({ raw: true });
			res.json(beleza);
		}
	}
	//UPDATE
	static async BelezaUpdate(req, res) {
		const id_beleza = req.params.id;
		let nome = req.body.nome;

		let preco = req.body.preco;
		let link = req.body.link;
		const beleza = {
			nome: nome,

			preco: preco,
			link: link,
		};
		await Beleza.update(beleza, { where: { id_beleza: id_beleza } });
	}
	//Função BelezaDelete responsável pela exclusão do usuário.
	static async BelezaDelete(req, res) {
		const id_beleza = req.params.id;
		await Beleza.destroy({ where: { id_beleza: id_beleza } });
	}
	//COUNT
	static async BelezaCount(req, res) {
		const count = await Beleza.count();
		res.json(count);
	}
};
