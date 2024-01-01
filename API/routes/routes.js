const express = require('express');
const router = express.Router();
const aliController = require('../controller/aliController');
const belezaController = require('../controller/belezaController');
const pesenteController = require('../controller/pesenteController');

// Middleware para adicionar o cabeçalho 'Access-Control-Allow-Origin'
router.use((req, res, next) => {
	res.setHeader('Access-Control-Allow-Origin', 'http://localhost:4000');
	next();
});

// Requisição HTTP Principal
router.get('/', (req, res) => {
	return res.json({ message: 'Sistema de Presentes' });
});

// Requisições Ali
router.post('/add_alis', aliController.AliCreate);
router.get('/alis/:id?', aliController.AliListar);
router.put('/alis_update/:id', aliController.AliUpdate);
router.delete('/alis_delete/:id', aliController.AliDelete);
router.get('/alis_count', aliController.AliCount);

// Requisições Beleza
router.post('/add_belezas', belezaController.BelezaCreate);
router.get('/belezas/:id?', belezaController.BelezaListar);
router.put('/belezas_update/:id', belezaController.BelezaUpdate);
router.delete('/belezas_delete/:id', belezaController.BelezaDelete);
router.get('/belezas_count', belezaController.BelezaCount);

// Requisições Pesente
router.post('/add_pesentes', pesenteController.PesenteCreate);
router.get('/pesentes/:id?', pesenteController.PesenteListar);
router.put('/pesentes_update/:id', pesenteController.PesenteUpdate);
router.delete('/pesentes_delete/:id', pesenteController.PesenteDelete);
router.get('/pesentes_count', pesenteController.PesenteCount);

module.exports = router;
