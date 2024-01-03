const Ali = require('../model/aliModel');
module.exports = class aliController {
	//CREATE
	static async AliCreate(req, res) {
		let nome = req.body.nome;
		let preco = req.body.preco;
		let link = req.body.link;
		let linkIMG = req.body.linkIMG;
		const ali = {
			nome: nome,
			preco: preco,
			link: link,
			linkIMG: linkIMG,
		};
		await Ali.create(ali);
	}
	//READ - LISTAR
	static async AliListar(req, res) {
		const id_ali = req.params.id;
		if (id_ali) {
			const ali = await Ali.findOne({
				where: { id_ali: id_ali },
			});
			res.json(ali);
		} else {
			const ali = await Ali.findAll({ raw: true });
			res.json(ali);
		}
	}
	//UPDATE

	static async UpdateAli(req, res) {
		try {
			let id_ali = req.params.id;

			if (id_ali) {
				console.log(id_ali);
				const ali = await Ali.findOne({
					where: { id_ali: id_ali },
				});

				if (!ali) {
					return res.status(404).json({ error: 'Ali não encontrado' });
				}

				res.json(ali);
			} else {
				console.log(id_ali);
				// Tratar o caso em que id_ali não existe (se necessário)
				res.status(400).json({ error: 'ID de Ali não fornecido' });
			}
		} catch (error) {
			console.error(error);
			res.status(500).json({ error: 'Erro ao procurar o ali update' });
		}
	}

	static async AliUpdate(req, res) {
		const id_ali = req.params.id;
		let nome = req.body.nome;
		let preco = req.body.preco;
		let link = req.body.link;
		let linkIMG = req.body.linkIMG;
		const ali = {
			nome: nome,
			preco: preco,
			link: link,
			linkIMG: linkIMG,
		};
		await Ali.update(ali, { where: { id_ali: id_ali } });
	}

	//DELETE
	static async AliDelete(req, res) {
		const id_ali = req.params.id;
		await Ali.destroy({ where: { id_ali: id_ali } });
	}

	//COUNT - CONTAR
	static async AliCount(req, res) {
		const count = await Ali.count();
		res.json(count);
	}
};
