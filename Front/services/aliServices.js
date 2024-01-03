const axios = require('axios');

module.exports = class Services {
	// CREATE
	static async AliCreate(req, res) {
		try {
			let valores = req.body;
			const options = {
				url: 'http://localhost:3000/add_alis',
				method: 'POST',
				data: valores,
			};
			await axios(options);
			res.render('ali/cadastrarAli');
		} catch (error) {
			console.error(error);
			res.status(500).json({ error: 'Erro ao cadastrar' });
		}
	}

	// LISTAR
	static async AliListar(req, res) {
		try {
			const options = {
				url: 'http://localhost:3000/alis',
				method: 'GET',
			};
			const response = await axios(options);
			console.log(response.data);
			const ali = response.data;
			res.render('ali/listarAli', { ali });
		} catch (error) {
			console.error(error);
			res.status(500).json({ error: 'Erro ao listar' });
		}
	}

	// UPDATE
	static async UpdateAli(req, res) {
		try {
			let id_ali = req.body.id_ali;

			const options = {
				url: 'http://localhost:3000/update_alis/' + id_ali,
				method: 'POST',
				
			}; 
			const response = await axios(options);
			console.log(response.data);
			const ali = response.data;
			res.render('ali/editarAli', { ali });
		} catch (error) {
			let id_ali = req.params.id_ali;
			console.error(`Erro ao ir para update. id_ali: ${id_ali}, Erro: ${error}`);
			res.status(500).json({ error: `Erro ao ir para update. id_ali: ${id_ali}` });
		}
	}

	static async AliUpdate(req, res) {
		try {
			let valores = req.body;
			const options = {
				url: 'http://localhost:3000/alis_update/' + valores.id_ali,
				method: 'PUT',
				data: valores,
			};
			await axios(options);
			res.redirect('ali/listarAli', { valores });
		} catch (error) {
			console.error(error);
			res.status(500).json({ error: 'Erro no update' });
		}
	}

	// DELETE
	static async AliDelete(req, res) {
		try {
			let id_ali = req.body.id_ali;
			const options = {
				url: 'http://localhost:3000/alis_delete/' + id_ali,
				method: 'DELETE',
			};
			await axios(options);
			res.send('<script>window.location.reload();</script>');
		} catch (error) {
			console.error(error);
			res.status(500).json({ error: 'Erro no delete' });
		}
	}

	// COUNT
	static async AliCount() {
		try {
			const options = {
				url: 'http://localhost:3000/alis_count',
				method: 'GET',
			};
			const response = await axios(options);
			return response.data;
		} catch (error) {
			console.error(error);
			throw new Error('Erro do Count');
		}
	}
};
