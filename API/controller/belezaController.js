const Beleza = require('../model/belezaModel');
module.exports = class belezaController {
	//CREATE
	static async BelezaCreate(req, res) {
		let nome = req.body.nome;
		let preco = req.body.preco;
		let link = req.body.link;
		let linkIMG = req.body.linkIMG;
		const beleza = {
			nome: nome,
			preco: preco,
			link: link,
			linkIMG: linkIMG,
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
	static async UpdateBeleza(req, res) {
		try {
			let id_beleza = req.params.id;

			if (id_beleza) {
				console.log(id_beleza);
				const beleza = await Beleza.findOne({
					where: { id_beleza: id_beleza },
				});

				if (!beleza) {
					return res.status(404).json({ error: 'Beleza não encontrado' });
				}

				res.json(beleza);
			} else {
				console.log(id_beleza);
				// Tratar o caso em que id_beleza não existe (se necessário)
				res.status(400).json({ error: 'ID de Beleza não fornecido' });
			}
		} catch (error) {
			console.error(error);
			res.status(500).json({ error: 'Erro ao procurar o beleza update' });
		}
	}

	static async BelezaUpdate(req, res) {
		const id_beleza = req.params.id;
		let nome = req.body.nome;
		let preco = req.body.preco;
		let link = req.body.link;
		let linkIMG = req.body.linkIMG;
		const beleza = {
			nome: nome,
			linkIMG: linkIMG,
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
