const express = require('express');
const router = express.Router();
const { convertHTMLToDesign } = require('../controllers/conversionController');

router.post("/convert",convertHTMLToDesign)

module.exports=router;