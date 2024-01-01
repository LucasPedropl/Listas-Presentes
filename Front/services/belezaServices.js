const axios = require('axios');

module.exports = class Services {
	// CREATE
	static async BelezaCreate(req, res) {
		try {
			let valores = req.body;
			const options = {
				url: 'http://localhost:3000/add_belezas',
				method: 'POST',
				data: valores,
			};
			await axios(options);
			res.render('beleza/cadastrarBeleza');
		} catch (error) {
			console.error(error);
			res.status(500).json({ error: 'Erro Interno do Servidor' });
		}
	}

	// LISTAR
	static async BelezaListar(req, res) {
		try {
			const options = {
				url: 'http://localhost:3000/belezas',
				method: 'GET',
			};
			const response = await axios(options);
			console.log(response.data);
			const beleza = response.data;
			res.render('beleza/listarBeleza', { beleza });
		} catch (error) {
			console.error(error);
			res.status(500).json({ error: 'Erro Interno do Servidor' });
		}
	}

	// UPDATE
	static async BelezaUpdate(req, res) {
		try {
			let valores = req.body;
			const options = {
				url: 'http://localhost:3000/belezas_update/' + valores.id_beleza,
				method: 'PUT',
				data: valores,
			};
			await axios(options);
			res.render('beleza/listarBeleza');
		} catch (error) {
			console.error(error);
			res.status(500).json({ error: 'Erro Interno do Servidor' });
		}
	}

	// DELETE
	static async BelezaDelete(req, res) {
		try {
			let id_beleza = req.body.id_beleza;
			const options = {
				url: 'http://localhost:3000/belezas_delete/' + id_beleza,
				method: 'DELETE',
			};
			await axios(options);
			res.render('beleza/listarBeleza');
		} catch (error) {
			console.error(error);
			res.status(500).json({ error: 'Erro Interno do Servidor' });
		}
	}
	// COUNT
	static async BelezaCount() {
		try {
			const options = {
				url: 'http://localhost:3000/belezas_count',
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
