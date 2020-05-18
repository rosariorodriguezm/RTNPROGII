const express = require('express');
const router = express.Router();

const controller = require('../controllers/pagesController')

router.get('/', controller.home);



module.exports = router;