const express = require('express');
const aliServices = require('../services/aliServices');
const belezaServices = require('../services/belezaServices');
const pesenteServices = require('../services/pesenteServices');
const router = express.Router();

//PRINCIPAL
router.get('/', (req, res) => {
	res.render('principal');
});

//////////////////////////////////////////ALIEXPRESS

//Cadastrar Ali
router.get('/ali/cadastrarAli', (req, res) => {
	res.render('ali/cadastrarAli');
});
router.post('/ali/cadastrarAli', aliServices.AliCreate);
//Listar Ali
router.get('/ali/listarAli', aliServices.AliListar);
//Editar Ali
router.get('/ali/editarAli/:id_ali/:nome/:preco/:link', (req, res) => {
	let ali = {
		id_ali: req.params.id_ali,
		nome: decodeURIComponent(req.params.nome),
		preco: req.params.preco,
		link: decodeURIComponent(req.params.link),
	};
	res.render('ali/editarAli', { ali });
});
router.post('/ali/editarAli', aliServices.AliUpdate);

//Excluir Ali
router.post('/ali/excluirAli', aliServices.AliDelete);

// Contar Ali
router.get('/ali/contarAli', aliServices.AliCount);

//////////////////////////////////////////BELEZA

//Cadastrar Beleza
router.get('/beleza/cadastrarBeleza', (req, res) => {
	res.render('beleza/cadastrarBeleza');
});
router.post('/beleza/cadastrarBeleza', belezaServices.BelezaCreate);
//Listar Beleza
router.get('/beleza/listarBeleza', belezaServices.BelezaListar);
//Editar Beleza
router.get('/beleza/editarBeleza/:id_beleza/:nome/:preco/:link', (req, res) => {
	let beleza = {
		id_beleza: req.params.id_beleza,
		nome: decodeURIComponent(req.params.nome),
		preco: req.params.preco,
		link: decodeURIComponent(req.params.link),
	};
	res.render('beleza/editarBeleza', { beleza });
});
router.post('/beleza/editarBeleza', belezaServices.BelezaUpdate);
//Excluir Beleza
router.post('/beleza/excluirBeleza', belezaServices.BelezaDelete);
// Contar Ali
router.get('/beleza/contarBeleza', belezaServices.BelezaCount);

//////////////////////////////////////////PESENTE

//Cadastrar Pesente
router.get('/pesente/cadastrarPesente', (req, res) => {
	res.render('pesente/cadastrarPesente');
});
router.post('/pesente/cadastrarPesente', pesenteServices.PesenteCreate);
//Listar Pesente
router.get('/pesente/listarPesente', pesenteServices.PesenteListar);
//Editar Pesente
router.get('/pesente/editarPesente/:id_pesente/:nome/:preco/:link', (req, res) => {
	let pesente = {
		id_pesente: req.params.id_pesente,
		nome: decodeURIComponent(req.params.nome),
		preco: req.params.preco,
		link: decodeURIComponent(req.params.link),
	};
	res.render('pesente/editarPesente', { pesente });
});
router.post('/pesente/editarPesente', pesenteServices.PesenteUpdate);
//Excluir Pesente
router.post('/pesente/excluirPesente', pesenteServices.PesenteDelete);
// Contar Ali
router.get('/beleza/contarBeleza', belezaServices.BelezaCount);

module.exports = router;
