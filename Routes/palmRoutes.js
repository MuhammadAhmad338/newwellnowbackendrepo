const express = require("express");
const { palmController } = require("../Controller/palmController");
const palmRouter = express.Router();

palmRouter.post("/palm", palmController);

module.exports = palmRouter;