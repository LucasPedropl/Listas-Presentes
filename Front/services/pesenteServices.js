const axios = require('axios');

module.exports = class Services {
	// CREATE
	static async PesenteCreate(req, res) {
		try {
			let valores = req.body;
			const options = {
				url: 'http://localhost:3000/add_pesentes',
				method: 'POST',
				data: valores,
			};
			await axios(options);
			res.render('pesente/cadastrarPesente');
		} catch (error) {
			console.error(error);
			res.status(500).json({ error: 'Erro Interno do Servidor' });
		}
	}

	// LISTAR
	static async PesenteListar(req, res) {
		try {
			const options = {
				url: 'http://localhost:3000/pesentes',
				method: 'GET',
			};
			const response = await axios(options);
			console.log(response.data);
			const pesente = response.data;
			res.render('pesente/listarPesente', { pesente });
		} catch (error) {
			console.error(error);
			res.status(500).json({ error: 'Erro Interno do Servidor' });
		}
	}

	// UPDATE
	static async UpdatePesente(req, res) {
		try {
			let id_pesente = req.body.id_pesente;

			const options = {
				url: 'http://localhost:3000/update_pesentes/' + id_pesente,
				method: 'POST',
				
			}; 
			const response = await axios(options);
			console.log(response.data);
			const pesente = response.data;
			res.render('pesente/editarPesente', { pesente });
		} catch (error) {
			let id_pesente = req.params.id_pesente;
			console.error(`Erro ao ir para update. id_pesente: ${id_pesente}, Erro: ${error}`);
			res.status(500).json({ error: `Erro ao ir para update. id_pesente: ${id_pesente}` });
		}
	}

	static async PesenteUpdate(req, res) {
		try {
			let valores = req.body;
			const options = {
				url: 'http://localhost:3000/pesentes_update/' + valores.id_pesente,
				method: 'PUT',
				data: valores,
			};
			await axios(options);
			res.redirect('pesente/listarPesente', { valores });
		} catch (error) {
			console.error(error);
			res.status(500).json({ error: 'Erro no update' });
		}
	}

	// DELETE
	static async PesenteDelete(req, res) {
		try {
			let id_pesente = req.body.id_pesente;
			const options = {
				url: 'http://localhost:3000/pesentes_delete/' + id_pesente,
				method: 'DELETE',
			};
			await axios(options);
			res.render('pesente/listarPesente');
		} catch (error) {
			console.error(error);
			res.status(500).json({ error: 'Erro Interno do Servidor' });
		}
	}

	// COUNT
	static async PesenteCount() {
		try {
			const options = {
				url: 'http://localhost:3000/pesentes_count',
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
