const express = require('express');
const router = express.Router();

// Rota de teste
router.get('/', (req, res) => {
    res.send('Auth routes funcionando!');
});

module.exports = router;
