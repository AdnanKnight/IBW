// ads.js
const express = require('express');
const router = express.Router();
const controller = require('../controllers/adController');

router.get('/', controller.getAll);
router.post('/', controller.create);
router.delete('/:id', controller.remove);

module.exports = router;
