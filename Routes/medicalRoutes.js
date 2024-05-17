const express = require('express');
const medicalRouter = express.Router();
const {  get_medical_records, post_medical_record } = require('../Controller/medical_recordController');

medicalRouter.post('/post_medical', post_medical_record);
medicalRouter.get('/get_medical', get_medical_records);

module.exports = medicalRouter;

