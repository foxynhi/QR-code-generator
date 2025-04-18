//define and manage route /generate-qr to generate QR code

const express = require('express');
const controller = require('./controller');

const router = express.Router();

router.post('/generate-qr', controller.generateQR);

module.exports = router;