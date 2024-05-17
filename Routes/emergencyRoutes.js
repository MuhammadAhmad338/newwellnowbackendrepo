const express = require('express');
const emergencyRouter = express.Router();
const { postemergencyContact, getemergencyContact } = require('../Controller/emergencyController');

emergencyRouter.get('/getEmergency', getemergencyContact);
emergencyRouter.post('/postEmergency', postemergencyContact);

module.exports = emergencyRouter;
