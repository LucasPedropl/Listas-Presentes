const Pesente = require('../model/pesenteModel');
module.exports = class pesenteController {
	//CREATE
	static async PesenteCreate(req, res) {
		let nome = req.body.nome;
		let preco = req.body.preco;
		let link = req.body.link;
		let linkIMG = req.body.linkIMG;
		const pesente = {
			nome: nome,
			preco: preco,
			link: link,
			linkIMG: linkIMG,
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
	static async UpdatePesente(req, res) {
		try {
			let id_pesente = req.params.id;

			if (id_pesente) {
				console.log(id_pesente);
				const pesente = await Pesente.findOne({
					where: { id_pesente: id_pesente },
				});

				if (!pesente) {
					return res.status(404).json({ error: 'Pesente não encontrado' });
				}

				res.json(pesente);
			} else {
				console.log(id_pesente);
				// Tratar o caso em que id_pesente não existe (se necessário)
				res.status(400).json({ error: 'ID de Pesente não fornecido' });
			}
		} catch (error) {
			console.error(error);
			res.status(500).json({ error: 'Erro ao procurar o pesente update' });
		}
	}

	static async PesenteUpdate(req, res) {
		const id_pesente = req.params.id;
		let nome = req.body.nome;
		let preco = req.body.preco;
		let link = req.body.link;
		let linkIMG = req.body.linkIMG;
		const pesente = {
			nome: nome,
			preco: preco,
			link: link,
			linkIMG: linkIMG,
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
